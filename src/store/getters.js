// getters

export default {

  totalCount(state) {
    return state.cartFoods.reduce((preTotal, curFood) => preTotal + curFood.count, 0)
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, curFood) => preTotal + curFood.count * curFood.price, 0)
  }
}