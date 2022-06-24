export const totalPriceCalculator = (price,discount) => {
    if((isNaN(price)) ){
        return;
    }
    return Math.floor(price - (price ) * (discount/100))
}