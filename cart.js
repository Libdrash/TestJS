const Cart = JSON.parse(localStorage.getItem("cart"))
const cartProducts = document.querySelector(".cartContainer")
const showCart = (block) => {
  // if (!block) return
  block.innerHTML = Cart.map((elem) => {
    const { img, description, material, price, quantity } = elem
    return `<div class="product_cart">
        <a href="product.html"><img src="${img}" /></a>
<div><p>${description}</p><p class="material">${material}</p><span>&#8364; ${price}</span></div>
        <div class="product_cart-calculate">
        <button id="minus" class="minus" type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
        <input id="quantity" type="number" min="0" value="${quantity}" />
        <button id="plus" class="plus" type="button" onclick="this.previousElementSibling.stepUp()">&#43;</button>
        </div>
        </div>`
  })
}
showCart(cartProducts)
const product_cart = document.querySelectorAll(".product_cart")
const quantityProductInCart = document.querySelector("h3")
quantityProductInCart.textContent = `Cart: ${product_cart.length}` //количество прод в корзине в заголовок
const subTotal = document.querySelector(".subTotal")
subTotal.textContent = `Sub Total (${product_cart.length} items)` //количество прод в тотал

const quantityInputs = document.querySelectorAll("#quantity")
console.log(quantityInputs)

const plus = document.querySelectorAll("#plus")
console.log(plus)
Array.from(quantityInputs).map((btn, index) => {
  btn.addEventListener("click", () => {
    const Cart = JSON.parse(localStorage.getItem("cart"))
    Cart[index].quantity = +quantityInputs[index].value
  })
  localStorage.setItem("cart", JSON.stringify(Cart))
})

// Array.from(btnLike).map((btn, index) => {
//   btn.addEventListener("click", () => {
//     cart[index].quantity = +
//   })
// })
// plus.addEventListener("click", () => {
//   communicate.quantity = +quantity.value
//   localStorage.setItem("communicate", JSON.stringify(communicate))
//   addSum.textContent = `Add | ${(communicate.price * quantity.value).toFixed(2)}`
// }) //добавление и умножение
// minus.addEventListener("click", () => {
//   communicate.quantity = +quantity.value
//   localStorage.setItem("communicate", JSON.stringify(communicate))
//   addSum.textContent = `Add | ${(communicate.price * quantity.value).toFixed(2)}`
// }) //вычитание и умножение
