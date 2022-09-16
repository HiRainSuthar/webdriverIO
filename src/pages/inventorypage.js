class InventoryPage {
  async addProductoToCart (productToCheckout) {
    const products = await $$('.inventory_item')

    const desiredProduct = products.find(async function (product) {
      // eslint-disable-next-line no-unused-expressions
      (await product.$('.inventory_item_name').getText()) === productToCheckout
    })

    await desiredProduct.$('.pricebar button').click()

    await $('#shopping_cart_container').click()
  }
}
export default new InventoryPage()
