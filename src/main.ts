import { Product } from "./models/Product.js";
//import {calculateTax} from '../src/utils/taxCalculator.js'
//import {calculateDiscount} from '../src/utils/discountCalculator.js'
import {fetchProductById} from '../src/services/apiService.js'
import { handleError } from "./utils/errorHandler.js";

async function runApp(){
    try{
        const item1 = await fetchProductById(1);
        const product1 = new Product(item1);
        product1.displayDetails();

    }catch(error){
        handleError(error);
    }
}

runApp();