interface ProductData{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
}


class Product{
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
        this.discountPercentage =data.discountPercentage;
        this.rating =data.rating;
    }
   
     displayDetails(): any {
        console.log(`Product id: ${this.id}`);
        console.log(`Product name: ${this.title}`);
        console.log(`Product description: ${this.description}`);
        console.log(`Product price: ${this. price}`);
        console.log(`Product's discount percentage: ${this.discountPercentage}`);
        console.log(`Product ratings: ${this.rating}`);
     }

    getPriceWithDiscount(): number{
        
        return 0;
}
}
