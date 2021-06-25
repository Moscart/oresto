import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view'
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Showing all favorite resto', () => {
  let view

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView()
    document.body.innerHTML = view.getTemplate()
  }

  beforeEach(() => {
    renderTemplate()
  })

  describe('When no resto have been liked', () => {
    it('should ask for the favorite resto', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb)

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto
      })

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1)
    })
    it('should show the information that no resto have been liked', () => {
      document.querySelector('.content').addEventListener('cards:updated', () => {
        expect(document.querySelectorAll('.error__message').length)
          .toEqual(1)

        done()
      })

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb)
      favoriteResto.getAllResto.and.returnValues([])

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto
      })
    })
  })
  describe('When favorite resto exist', () => {
    it('should show the resto', () => {
      document.querySelector('.content').addEventListener('cards:searched:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(2)

        done()
      })

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb)
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11, city: 'A', rating: 3, name: 'Sebuah resto A', description: 'lorem ipsum'
        },
        {
          id: 22, city: 'B', rating: 4, name: 'Sebuah resto B', description: 'lorem ipsum'
        }
      ])

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto
      })
    })
  })
})
