import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantTemplate, createErrorTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return /* html */`
    <div class="error invisible"></div>
    <section class="content">
        <div class="katalog">
            <h1 class="katalog__label">List Restaurants</h1>
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
    const restaurants = await RestaurantDbSource.home()
    const skeleton = document.querySelectorAll('.skeleton')
    const content = document.querySelector('.content')
    const error = document.querySelector('.error')
    const cards = document.querySelector('.cards')

    for (let i = 0; i < skeleton.length; i++) {
      skeleton[i].classList.add('invisible')
    }

    if (Array.isArray(restaurants)) {
      restaurants.forEach((restaurant) => {
        cards.innerHTML += createRestaurantTemplate(restaurant)
      })
    } else {
      content.classList.add('invisible')
      error.classList.remove('invisible')
      error.innerHTML = createErrorTemplate('please check your connection')
    }
  }
}

export default Home
