///<reference types="cypress" />
export default class ShoppingCart {
    private categoryHeader = '[class="breadcrumb clearfix"]';
    private productRow = '[id="cart_summary"] tr td:nth-child(2)';
    private deleteIcon = 'a[title="Delete"]';
    private plusIcon = 'a[title="Add"]';
    private cartTotal = '[id="total_price"]';

    verifyPageLoaded() {
        cy.get(this.categoryHeader).should('contain.text','Your shopping cart');
    }
    removeProduct(productName: string) {
        cy.get(this.productRow).each(($e1, index) => {
            const text = $e1.text();
            if (text.includes(productName)) {
                cy.get(this.productRow).eq(index).next().next().next().next().next().find(this.deleteIcon).click();
            }
        });
    }
    addQuantity(productName: string) {
        cy.get(this.productRow).each(($e1, index) => {
            const text = $e1.text();
            if (text.includes(productName)) {
                cy.get(this.productRow).eq(index).next().next().next().find(this.plusIcon).click();
            }
        });
    }
    assertTotalForRow(productName: string, priceToVerify: string) {
        cy.get('[id="total_product_price_1_4_0"]').should('not.contain.text','$16.51');
        cy.get(this.productRow).each(($e1, index) => {
            const text = $e1.text();
            if (text.includes(productName)) {
                cy.get(this.productRow).eq(index).next().next().next().next().find('[class="price"]').then(function (price: JQuery<HTMLElement>) {
                    const A: string = price.text();
                    assert.equal(A,priceToVerify);
                });
            }
        });
    }
    assertCartTotal(totalToCheck: string) {
        cy.get(this.cartTotal).should('have.text',totalToCheck);
    }
}
