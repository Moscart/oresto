/* eslint-disable no-tabs */
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#maincontent'),
  nav: document.querySelector('.nav__list'),
  searchText: document.querySelector('.search__text'),
  searchForm: document.querySelector('.hero__search'),
  footer: document.querySelector('#footer')
})

window.addEventListener('hashchange', () => {
  app._content.scrollIntoView()
  app.renderPage()
})

window.addEventListener('load', () => {
  app._content.scrollIntoView()
  app.renderPage()
  swRegister()
})
