let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    
    console.log(cart)
}