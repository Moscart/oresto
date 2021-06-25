import { createRestaurantTemplate } from '../../templates/template-creator'

class FavoriteRestoSearchView {
  getTemplate () {
    return `
        <form action class="hero__search" method="POST">
            <input
                type="text"
                class="search__text"
                placeholder="Restaurant name, category, or menu"
                required
                autocomplete="off"
            />
            <button class="search__submit" aria-label="Search button">
                <span class="material-icons"> search </span>
            </button>
        </form>
        <div class="content">
            <div class="cards">
            </div>
        </div>
        `
  }

  getFavoriteRestoTemplate () {
    return `
      <section class="content">
          <div class="katalog">
              <h1 class="katalog__label">Favorite Restaurants</h1>
              <div class="cards">
              </div>
          </div>
      </section>
      `
  }

  runWhenUserIsSearching (callback) {
    document.querySelector('.search__text').addEventListener('change', (event) => {
      callback(event.target.value)
    })
  }

  showResto (resto) {
    let html
    if (resto.length > 0) {
      html = resto.reduce(
        (carry, resto) => carry.concat(`<div class="card"><div class="card__title">${resto.title || '-'}</div></div>`),
        ''
      )
    } else {
      html = this._getEmptyMovieTemplate()
    }

    document.querySelector('.cards').innerHTML = html

    document.querySelector('.content')
      .dispatchEvent(new Event('cards:searched:updated'))
  }

  showFavoriteResto (resto = []) {
    let html

    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestaurantTemplate(resto)), '')
    } else {
      html = this._getEmptyMovieTemplate()
    }

    document.querySelector('.cards').innerHTML = html

    document.querySelector('.cards').dispatchEvent(new Event('cards:updated'))
  }

  _getEmptyMovieTemplate () {
    return '<div class="error__message">Film tidak ditemukan</div>'
  }
}

export default FavoriteRestoSearchView
