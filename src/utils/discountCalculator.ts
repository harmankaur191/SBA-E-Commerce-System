function calculateDiscount(price:number, discountPercentage: number):number{
    if(price<0 || discountPercentage<0){
        return 0;
    }else{
        const discount = price*(discountPercentage/100);
        return discount;
    }
}