class CartPage{
    get productName(){
        return $('.cart_item .inventory_item_name')
    }
    get checkoutBtn(){
        return $('#checkout')
    }
}
export default new CartPage();