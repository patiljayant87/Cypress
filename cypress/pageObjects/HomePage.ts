///<reference types="cypress" />
export default class HomePage {
    private tShirtsTab = '[id="block_top_menu"] > ul > li > a[title="T-shirts"]';
    private dressesTab = '[id="block_top_menu"] > ul > li > a[title="Dresses"]';
    private cart = 'a[title="View my shopping cart"]';
    private checkoutBtn = '[id="button_order_cart"]';
    private notificationCloseIcon = '[id="layer_cart"] span[title="Close window"]';
    private notificationWindow = '[id="layer_cart"]';
    verifyPageLoaded() {
        cy.get(this.cart).should('be.visible');
    }
    openTshirts() {
        cy.get(this.tShirtsTab).should('be.visible').click();
    }
    openDresses() {
        cy.get(this.dressesTab).should('be.visible').click();
    }
    checkout() {
        cy.get(this.cart).trigger('mouseover');
        cy.get(this.checkoutBtn).should('be.visible').click();
    }
    verifySuccessNotification() {
        Cypress.config('defaultCommandTimeout', 15000);
        cy.get(this.notificationWindow).should('be.visible')
        .should('contain.text', 'Product successfully added to your shopping cart');
    }
    closeNotification() {
        cy.get(this.notificationCloseIcon).should('be.visible').click();
    }
}
