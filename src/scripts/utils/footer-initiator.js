const FooterInitiator = {
  init ({ footer }) {
    this._footer = footer
    this._attachFooter()
  },

  _attachFooter () {
    this._footer.innerHTML = 'Copyrignt &copy ' + new Date().getFullYear() + " - O'Resto"
  }
}

export default FooterInitiator
