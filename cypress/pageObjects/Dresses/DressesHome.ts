///<reference types="cypress" />
export default class DressesHome {
    private dressType = '[id="categories_block_left"] li a';
    private categoryHeader = '[class="breadcrumb clearfix"]';

    verifyPageLoaded() {
        cy.get(this.categoryHeader).should('contain.text','Dresses');
    }
    openEveningDresses() {
        cy.get(this.dressType).contains('Evening Dresses').click();
    }
    openSummerDresses() {
        cy.get(this.dressType).contains('Summer Dresses').click();
    }
}
