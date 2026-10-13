export function calculateDiscount(price: number, discountPercentage: number): string {

    if (price < 0 || discountPercentage < 0) {
        return 'invalid price or discount percentage';
    } else {
        const discount = price * (discountPercentage / 100);
        //console.log(discount);
        return `${discount.toFixed(2)}`;
    }
}