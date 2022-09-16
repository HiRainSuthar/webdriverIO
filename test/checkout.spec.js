import LoginPage from "../pages/loginpage";
import InventoryPage from "../pages/inventorypage";
import CartPage from "../pages/cartpage";
import CheckoutYourInfoPage from "../pages/checkoutyourinfopage";
import CheckoutOverviewPage from "../pages/checkouoverviewpage";
import CheckoutCompletePage from "../pages/chekcoutcompletepage";

describe("checkout flow validation", async () => {
  it("Successful checkout", async () => {
    await browser.url("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce");
    expect(browser).toHaveTextContaining("inventory");
    await InventoryPage.addProductoToCart("Sauce Labs Backpack");
    expect(browser).toHaveUrlContaining("cart");
    expect(await CartPage.productName.getText()).toHaveText(
      "Sauce Labs Backpack"
    );
    await CartPage.checkoutBtn.click();
    expect(browser).toHaveUrlContaining("checkout-step-one");
    await CheckoutYourInfoPage.fillupInformation(
      "testname",
      "testlastname",
      "356488"
    );
    expect(browser).toHaveUrlContaining("checkout-step-two");
    expect(await CheckoutOverviewPage.orderTotal.getText()).toHaveText(
      "$32.39"
    );
    await CheckoutOverviewPage.finishBtn.click();
    expect(
      await CheckoutCompletePage.checkoutCompleteMessage.getText()
    ).toHaveText("THANK YOU FOR YOUR ORDER");
  });
});
