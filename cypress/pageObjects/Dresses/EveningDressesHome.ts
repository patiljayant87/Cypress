///<reference types="cypress" />
export default class EveningDressesHome {
    private dressTile = '[id="center_column"] li h5 a';
    private categoryHeader = '[class="breadcrumb clearfix"]';

    verifyPageLoaded() {
        cy.get(this.categoryHeader).should('contain.text','Evening Dresses');
    }
    clickEveningDressTile() {
        cy.get(this.dressTile).should('contain.text','Printed Dress').click();
    }
}
