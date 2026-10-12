import { fetchProductById } from "../services/apiService.js";
import {calculateDiscount} from "../utils/discountCalculator.js";
import {calculateTax} from "../utils/taxCalculator.js";

export interface ProductData{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
}


export class Product{
    id:number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    
    

    constructor(data: ProductData){
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category =data.category;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating =data.rating;
    }
   
     displayDetails(): any {
        console.log(`Product id: ${this.id}`);
        console.log(`Product name: ${this.title}`);
        console.log(`Product description: ${this.description}`);
        console.log(`Product category: ${this. category}`);
        console.log(`Product price: $ ${this. price}`);
        console.log(`Product's discount percentage: ${this.discountPercentage} %`);
        //console.log(`Product ratings: ${this.rating}`);
        console.log('Product price after disount: $', this.getPriceWithDiscount());
        const taxAmount = Number(calculateTax(this.getPriceWithDiscount(), this.category));
        console.log('Price after tax: $', taxAmount+this.getPriceWithDiscount());
     }

    getPriceWithDiscount(): number{
        const discountedPrice = Number(calculateDiscount(this.price,this.discountPercentage));
        const reducedprice = this.price - Number(discountedPrice);
        //console.log(reducedprice);
        return reducedprice;
}
}
