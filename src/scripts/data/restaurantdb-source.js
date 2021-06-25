import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantDbSource {
  static async home () {
    try {
      const response = await fetch(API_ENDPOINT.HOME)
      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (error) {
      return error
    }
  }

  static async detail (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id))
      return response.json()
    } catch (error) {
      return error
    }
  }

  static async search (query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query))
      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (error) {
      return error
    }
  }
}

export default RestaurantDbSource
