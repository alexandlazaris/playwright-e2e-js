class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartContainer = page.locator('#shopping_cart_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  addToCartButton(productId) {
    return this.page.locator(`[data-test="add-to-cart-${productId}"]`);
  }

  async addProduct(productId) {
    await this.addToCartButton(productId).click();
  }

  async openMenuAndLogout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { InventoryPage };
