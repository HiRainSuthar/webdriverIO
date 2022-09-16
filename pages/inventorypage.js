class InventoryPage{
    async addProductoToCart(productToCheckout){
        let products = await $$('.inventory_item');

        let desiredProduct= products.find(async function(product){
          ((await product.$('.inventory_item_name').getText()) == productToCheckout);
        });
    
        await desiredProduct.$('.pricebar button').click();
    
        await $('#shopping_cart_container').click();
    }
}
export default new InventoryPage();


//"Sauce Labs Backpack"