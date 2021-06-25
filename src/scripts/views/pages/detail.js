import UrlParser from '../../routes/url-parser'
import RestaurantDbSource from '../../data/restaurantdb-source'
import { createDetailTemplate, createErrorTemplate } from '../templates/template-creator'
import ReviewInitiator from '../../utils/review-initiator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestoIdb from '../../data/favorite-resto-idb'

const Detail = {
  async render () {
    return /* html */`
    <div class="error invisible"></div>
    <section class="content">
        <div class="katalog">
            <h1 class="katalog__label">Best Restaurants</h1>
            <div class="cards details">
              <div class="skeleton__main detail__main"></div>
              <div class="skeleton__menu detail__menu"></div>
              <div class="skeleton__review detail__review"></div>
              <div class="skeleton__addreview detail__addreview"></div>
            </div>
        </div>
    </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDbSource.detail(url.id)
    const resto = restaurant.restaurant
    const error = document.querySelector('.error')
    const content = document.querySelector('.content')
    const main = document.querySelector('#maincontent')

    if (resto) {
      main.innerHTML = createDetailTemplate(resto)

      ReviewInitiator.init({
        reviewName: document.querySelector('#review__name'),
        reviewText: document.querySelector('#review__text'),
        reviewForm: document.querySelector('#review__form')
      })

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('.detail__like'),
        favoriteResto: FavoriteRestoIdb,
        resto: {
          id: resto.id,
          address: resto.address,
          city: resto.city,
          description: resto.description,
          name: resto.name,
          customerReview: resto.customerReview,
          pictureId: resto.pictureId,
          rating: resto.rating,
          menus: resto.menus,
          categories: resto.categories
        }
      })
    } else {
      content.classList.add('invisible')
      error.classList.remove('invisible')
      error.innerHTML = createErrorTemplate('please check your connection')
    }
  }
}

export default Detail
