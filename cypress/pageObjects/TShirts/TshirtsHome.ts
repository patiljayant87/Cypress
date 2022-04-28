///<reference types="cypress" />
export default class TshirtsHome {
    private tShirtTile = '[id="center_column"] li h5 a';
    private categoryHeader = '[class="breadcrumb clearfix"]';

    verifyPageLoaded() {
        cy.get(this.categoryHeader).should('contain.text','T-shirts');
    }
    clickTshirtTile() {
        cy.get(this.tShirtTile).should('contain.text','Faded Short Sleeve T-shirts').click();
    }
}
