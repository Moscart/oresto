import FavoriteRestoIdb from '../../data/favorite-resto-idb'
import { createRestaurantTemplate, createErrorTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return /* html */`
    <div class="error invisible"></div>
    <section class="content">
        <div class="katalog">
            <h1 class="katalog__label">Favorite Restaurants</h1>
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
    const restaurant = await FavoriteRestoIdb.getAllResto()
    const skeleton = document.querySelectorAll('.skeleton')
    const cards = document.querySelector('.cards')
    const error = document.querySelector('.error')
    const content = document.querySelector('.content')

    for (let i = 0; i < skeleton.length; i++) {
      skeleton[i].classList.add('invisible')
    }

    if (restaurant.length === 0) {
      content.classList.add('invisible')
      error.classList.remove('invisible')
      error.innerHTML = createErrorTemplate('not found')
    } else {
      restaurant.forEach((resto) => {
        cards.innerHTML += createRestaurantTemplate(resto)
      })
    }
  }
}

export default Favorite
