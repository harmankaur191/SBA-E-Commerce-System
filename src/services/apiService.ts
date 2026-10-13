import type { ProductData } from '../models/Product.ts'
import { AppError } from '../utils/errorHandler.js';

// creating async function to make a fetch request to retrieve productdetails in a json response
export async function fetchProductById(id: number): Promise<ProductData> {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        alert(`Failed to retrieve product with ID ${id}`);

        throw new AppError(`Failed to retrieve product with ID ${id}`);

    }

    return response.json();
}


