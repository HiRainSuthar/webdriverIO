import LoginPage from "../pages/loginpage";

describe("checkout flow validation", async () => {
  it("checkout product", async () => {
    await browser.url('https://www.saucedemo.com/')
    await LoginPage.login('standard_user', 'secret_sauce');
    expect(await browser.getUrl()).toContain('inventory');
    let productsHeaders = await $$('.inventory_item');
    console.log('products found '+ productsHeaders.length);

    productsHeaders.forEach(async function(product){
        const productText = await product.$('.inventory_item_name').getText();
        console.log('Products are '+productText)
        if(productText === "Sauce Labs Backpack"){
            await product.$('.pricebar button').click();
            browser.pause(10000);
        }
    })
    await $('#shopping_cart_container').click();
    expect(await $('.cart_item').isExisting()).toBe(true)
    // let desiredProduct = products.filter(product async() => await product.$('.inventory_item_name').getText() == ('Sauce Labs Backpack'))
    // await desiredProduct.$('#add-to-cart-sauce-labs-backpack').click();
  });
});
