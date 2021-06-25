import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import SearchInitiator from '../utils/search-initiator'
import FooterInitiator from '../utils/footer-initiator'

class App {
  constructor ({ button, drawer, hero, content, nav, searchText, searchForm, footer }) {
    this._button = button
    this._drawer = drawer
    this._hero = hero
    this._content = content
    this._nav = nav
    this._searchText = searchText
    this._searchForm = searchForm
    this._footer = footer

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
      nav: this._nav
    })

    SearchInitiator.init({
      searchText: this._searchText,
      searchForm: this._searchForm
    })

    FooterInitiator.init({
      footer: this._footer
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    if (url === '/') {
      window.location.replace('#/')
    }
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
