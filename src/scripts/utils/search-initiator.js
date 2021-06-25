const SearchInitiator = {
  async init ({ searchText, searchForm }) {
    this._searchText = searchText
    this._searchForm = searchForm

    await this._search()
  },

  async _search () {
    this._searchForm.addEventListener('submit', async (event) => {
      location.replace('#/search/' + this._searchText.value)
      event.preventDefault()
    })
  }
}

export default SearchInitiator
