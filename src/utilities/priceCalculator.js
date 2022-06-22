export const totalPriceCalculator = (price,discount) => {
    return Math.floor((price * 100) / (discount))
}