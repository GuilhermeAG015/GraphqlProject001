module.exports = {
    priceWithDiscount(product) {
        const { price, discount } = product;
        const percent = discount / 100;
        const result =  price - (price * percent);
        return result.toFixed(2);
    }
}