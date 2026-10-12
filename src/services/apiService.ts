import type {ProductData} from '../models/Product.ts'
import { AppError } from '../utils/errorHandler.js';


async function fetchProductById(id:number):Promise<ProductData>{
    const response = await fetch(`https://dummyjson.com/products/{id}`);
    if(!response.ok){
        throw new AppError(response.status,`Failed to retrieve product with ID ${id}`);
    }
    return response.json();
}


