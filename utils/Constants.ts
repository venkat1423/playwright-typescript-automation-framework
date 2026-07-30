export class Constants {

    // Base URL for the application
    static readonly BASE_URL: string = 'https://www.saucedemo.com';

    //Login Error Messages

    static readonly INVALID_CREDENTAILS = 'Username and password do not match';
    static readonly LOCKED_USER = 'Sorry, this user has been locked out.';

    // Inventory
    static readonly INVENTORY_TITLE: string = 'Products';

    //Products
    static readonly PRODUCT_NAMES = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ];

    static readonly BACKPACK = 'Sauce Labs Backpack';
    static readonly BIKE_LIGHT = 'Sauce Labs Bike Light';
    static readonly BOLT_TSHIRT = 'Sauce Labs Bolt T-Shirt';

    // Cart
    static readonly CART_TITLE: string = 'Your Cart';

    // Checkout
    static readonly CHECKOUT_INFORMATION_TITLE: string = 'Checkout: Your Information';
    static readonly CHECKOUT_OVERVIEW_TITLE: string = 'Checkout: Overview';
    static readonly CHECKOUT_COMPLETE_TITLE: string = 'Checkout: Complete!';
    static readonly FIRST_NAME_REQUIRED: string = 'Error: First Name is required';
    static readonly LAST_NAME_REQUIRED: string = 'Error: Last Name is required';
    static readonly POSTAL_CODE_REQUIRED: string = 'Error: Postal Code is required';

    // Products
    static readonly PRODUCT_NAME: string = 'Sauce Labs Backpack';
    static readonly PRODUCT_PRICE: string = '$29.99';

    // Total Products
    static readonly TOTAL_PRODUCTS = 6;

    // Order Completion
    static readonly SUCCESS_HEADER: string = 'Thank you for your order!';
    static readonly SUCCESS_MESSAGE: string = 'Your order has been dispatched';

    // Sort Options
    static readonly SORT_NAME_ASC = 'Name (A to Z)';
    static readonly SORT_NAME_DESC = 'Name (Z to A)';
    static readonly SORT_PRICE_LOW_HIGH = 'Price (low to high)';
    static readonly SORT_PRICE_HIGH_LOW = 'Price (high to low)';
}