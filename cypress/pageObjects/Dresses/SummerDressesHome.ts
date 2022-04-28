///<reference types="cypress" />
export default class EveningDressesHome {
    private dressTile = '[id="center_column"] li h5 a';
    private categoryHeader = '[class="breadcrumb clearfix"]';

    verifyPageLoaded() {
        cy.get(this.categoryHeader).should('contain.text','Summer Dresses');
    }
    clickFirstSummerDressTile() {
        cy.get(this.dressTile).first().should('contain.text','Printed Summer Dress').click();
    }
}
