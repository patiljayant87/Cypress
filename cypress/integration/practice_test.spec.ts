import HomePage from '../pageObjects/HomePage';
import TshirtsHome from '../pageObjects/TShirts/TshirtsHome';
import ProductDetails from '../pageObjects/ProductDetails';
import DressesHome from '../pageObjects/Dresses/DressesHome';
import EveningDressesHome from '../pageObjects/Dresses/EveningDressesHome';
import SummerDressesHome from '../pageObjects/Dresses/SummerDressesHome';
import ShoppingCart from '../pageObjects/ShoppingCart';
import Size from "../enums/size";
import Color from "../enums/Color";

describe('Regression Test Suite', () => {
    let data: any;
    beforeEach(function () {
        cy.fixture('test-data').then((ids) => {
            //Data can be imported from above json file
            data = ids;
        });
        //cy.login(); This can be added in commands file
        cy.viewport(1280, 720);
        cy.visit('http://automationpractice.com/index.php');
    });

    after(function () {
        //cy.logout(); This can be added in commands file
    });

    it('Practice test', () => {
        const homepage = new HomePage();
        const tshirtsHome = new TshirtsHome();
        const productDetails = new ProductDetails();
        const dressesHome = new DressesHome();
        const eveningDressesHome = new EveningDressesHome();
        const summerDressesHome = new SummerDressesHome();
        const shoppingCart = new ShoppingCart();

        homepage.verifyPageLoaded();
        homepage.openTshirts();
        tshirtsHome.verifyPageLoaded();
        tshirtsHome.clickTshirtTile();
        productDetails.verifyPageLoaded();
        productDetails.addToCartWithColorAndSize(Size.medium, Color.blue);
        homepage.verifySuccessNotification();
        homepage.closeNotification();
        homepage.openDresses();
        dressesHome.verifyPageLoaded();
        dressesHome.openEveningDresses();
        eveningDressesHome.verifyPageLoaded();
        eveningDressesHome.clickEveningDressTile();
        productDetails.verifyPageLoaded();
        productDetails.addToCartWithColorAndSize(Size.small, Color.beige);
        homepage.verifySuccessNotification();
        homepage.closeNotification();
        homepage.openDresses();
        dressesHome.verifyPageLoaded();
        dressesHome.openSummerDresses();
        summerDressesHome.verifyPageLoaded();
        summerDressesHome.clickFirstSummerDressTile();
        productDetails.verifyPageLoaded();
        productDetails.addToCartWithColorAndSize(Size.medium, Color.orange);
        homepage.verifySuccessNotification();
        homepage.closeNotification();
        homepage.checkout();
        shoppingCart.verifyPageLoaded();
        shoppingCart.addQuantity('Faded Short Sleeve T-shirts');
        shoppingCart.removeProduct('Printed Dress');
        shoppingCart.assertTotalForRow('Printed Summer Dress','$28.98');
        shoppingCart.assertTotalForRow('Faded Short Sleeve T-shirts','$33.02');
        shoppingCart.assertCartTotal('$64.00');
    });
});
