import LoginPage from "../pages/loginpage";
import InventoryPage from "../pages/inventorypage";
import CartPage from "../pages/cartpage";
import CheckoutYourInfoPage from "../pages/checkoutyourinfopage";
import CheckoutOverviewPage from "../pages/checkouoverviewpage";
import CheckoutCompletePage from "../pages/chekcoutcompletepage";
import testdata from '../testdata/testdata.js';

describe("checkout flow validation", async () => {
  it("Successful checkout", async () => {
    await browser.url("https://www.saucedemo.com/");
    await LoginPage.login(testdata.username, testdata.password);
    expect(browser).toHaveTextContaining("inventory");
    await InventoryPage.addProductoToCart(testdata.productToCheckout);
    expect(browser).toHaveUrlContaining("cart");
    expect(await CartPage.productName.getText()).toHaveText(testdata.productToCheckout);
    await CartPage.checkoutBtn.click();
    expect(browser).toHaveUrlContaining("checkout-step-one");
    await CheckoutYourInfoPage.fillupInformation(
      testdata.firstname,
      testdata.lastname,
      testdata.zipcode
    );
    expect(browser).toHaveUrlContaining("checkout-step-two");
    expect(await CheckoutOverviewPage.orderTotal.getText()).toHaveText(
      testdata.ordertotal
    );
    await CheckoutOverviewPage.finishBtn.click();
    expect(
      await CheckoutCompletePage.checkoutCompleteMessage.getText()
    ).toHaveText(testdata.checkoutcompletemessage);
  });
});
