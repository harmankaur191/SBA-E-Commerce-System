import { fetchProductById } from "../services/apiService.js";
import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
//creating interface
export interface ProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
}

//accessing properties
export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;


    //constructor of Product class
    constructor(data: ProductData) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating = data.rating;
    }
    //displaying properties of a product
    displayDetails(): any {
        console.log(`Product id: ${this.id}`);
        console.log(`Product name: ${this.title}`);
        console.log(`Product description: ${this.description}`);
        console.log(`Product category: ${this.category}`);
        console.log(`Product price: $ ${this.price}`);
        console.log(`Product's discount percentage: ${this.discountPercentage} %`);
        //console.log(`Product ratings: ${this.rating}`);
        console.log('Product price after disount: $', this.getPriceWithDiscount());
        const taxAmount = Number(calculateTax(this.getPriceWithDiscount(), this.category));
        console.log('Price after tax: $', taxAmount + this.getPriceWithDiscount());
        return "Product: " + this.title + '\n' + "Description: " + this.description + '\n' + "Category: " + this.category + '\n' + "Price: $" + this.price + '\n' +
            "Discount Percentage: " + this.discountPercentage + " %" + '\n' + "Price after discount: $" + this.getPriceWithDiscount() + '\n' + "Price after tax: $" + (taxAmount + this.getPriceWithDiscount());
    }
    //calculating price after discount
    getPriceWithDiscount(): number {
        const discountedPrice = Number(calculateDiscount(this.price, this.discountPercentage));
        const reducedprice = this.price - Number(discountedPrice);
        //console.log(reducedprice);
        return reducedprice;
    }
}
