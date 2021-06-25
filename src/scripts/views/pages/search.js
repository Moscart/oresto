import UrlParser from '../../routes/url-parser'
import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantTemplate, createErrorTemplate } from '../templates/template-creator'

const Search = {
  async render () {
    return /* html */`
    <div class="error invisible"></div>
    <section class="content">
        <div class="katalog">
            <h1 class="katalog__label">Your Search Results</h1>
            <div class="cards">
              <div class="skeleton"></div>
              <div class="skeleton"></div>
              <div class="skeleton"></div>
              <div class="skeleton"></div>
              <div class="skeleton"></div>
              <div class="skeleton"></div>
            </div>
        </div>
    </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurants = await RestaurantDbSource.search(url.id)
    const skeleton = document.querySelectorAll('.skeleton')
    const content = document.querySelector('.content')
    const cards = document.querySelector('.cards')
    const error = document.querySelector('.error')

    for (let i = 0; i < skeleton.length; i++) {
      skeleton[i].classList.add('invisible')
    }

    if (Array.isArray(restaurants)) {
      if (restaurants.length === 0) {
        content.classList.add('invisible')
        error.classList.remove('invisible')
        error.innerHTML = createErrorTemplate('not found')
      } else {
        restaurants.forEach((restaurant) => {
          cards.innerHTML += createRestaurantTemplate(restaurant)
        })
      }
    } else {
      content.classList.add('invisible')
      error.classList.remove('invisible')
      error.innerHTML = createErrorTemplate('please check your connection')
    }
  }
}

export default Search
