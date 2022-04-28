///<reference types="cypress" />
import Size from "../enums/size";
import Color from "../enums/Color";
export default class ProductDetails {
    private addToCartBtn = '[id="add_to_cart"] button';
    private sizeDropdown = '[id="group_1"]';

    verifyPageLoaded() {
        cy.get(this.addToCartBtn).should('be.visible');
    }
    selectSize(sizeToSelect: Size) {
        cy.get(this.sizeDropdown).select(sizeToSelect);
        cy.get(this.sizeDropdown+' option:selected').should('have.text', sizeToSelect);
    }
    pickColor(colorToPick: Color) {
        cy.get('[id="color_to_pick_list"] li a[name='+colorToPick+']').click().should('have.class','color_pick selected');
    }
    clickAddToCartBtn() {
        cy.get(this.addToCartBtn).click();
    }
    addToCartWithColorAndSize(sizeToSelect: Size, colorToPick: Color) {
        this.selectSize(sizeToSelect);
        this.pickColor(colorToPick);
        this.clickAddToCartBtn();
    }
}
