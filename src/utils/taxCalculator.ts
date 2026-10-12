function calculateTax(price: number, category: string): number{
    if(price>0 && category === 'groceries'){
        const taxRate = 0.03
        return Math.round(price*taxRate);
    }else{
        const taxRate = 0.0475;
        return Math.round(price*taxRate);
    }
}