import UrlParser from '../routes/url-parser'
import CONFIG from '../globals/config'

const ReviewInitiator = {
  async init ({ reviewName, reviewText, reviewForm }) {
    this._reviewName = reviewName
    this._reviewText = reviewText
    this._reviewForm = reviewForm

    await this._review()
  },

  async _review () {
    this._reviewForm.addEventListener('submit', async (event) => {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const reviewName = this._reviewName.value
      const reviewText = this._reviewText.value
      const data = {
        id: url.id,
        name: reviewName,
        review: reviewText
      }
      event.preventDefault()
      await this._addReview(data)
      document.location.reload()
    })
  },

  async _addReview (data) {
    const response = await fetch(CONFIG.BASE_URL + 'review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(data)
    })
  }
}

export default ReviewInitiator
