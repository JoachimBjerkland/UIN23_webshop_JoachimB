let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    //Etter å ha lagt til et product; oppdater handlelistevisning:
    renderCart()
    //Så må vi oppdatere label med antall produkter
    document.querySelector("#cart .label").innerHTML = cart.length

    //Flere måter å gjøre boksen synlig ved produkt innlegging
    /*    if(document.getElementById("cartview").classList.contains("hidden")) {
        toggleCart()
    }*/

    document.getElementById("cartview").classList.remove("hidden")
}

function calculatePrice() {
    let totalPrice = 0
    cart.map(prod => totalPrice += prod.productPrice)
    document.getElementById("total").innerHTML = totalPrice
}

function renderCart() {
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map((prod, index) => listHTML += `<li id"prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <span class="delete" onClick="deleteProduct(${index})">X</span>
</li>`)
    //Bruke en selector for å finne riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
    //Oppdater total pris:
    calculatePrice()
}

function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart()
    }, 700)

}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}