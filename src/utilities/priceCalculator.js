export const totalPriceCalculator = (price,discount) => {
    return Math.floor(price * (discount/100))
}