export function calculateTax(price: number, category: string): string{
    if(price>0 && category === 'groceries'){
        const taxRate = 0.03;
        const taxAmount = price*taxRate;
        return `${taxAmount.toFixed(2)}`;
    }else{
        const taxRate = 0.0475;
        const taxAmount = price*taxRate;
        return `${taxAmount.toFixed(2)}`;
    }
}