export const test = "teasddasst"
import { Cart } from "./index.js"
export const showCart = (block) => {
  if (!block) return
  block.innerHTML = Cart.map((elem) => {
    const { img, description, material, price, quantity } = elem
    return `<div class="product_cart">
        <a href="product.html"><img src="${img}" /></a>
<div><p>${description}</p><p class="material">${material}</p><span>&#8364; ${price}</span></div>
        <div class="product_cart-calculate">
        <button class="minus" type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
        <input type="number" min="0" value="${quantity}" />
        <button class="plus" type="button" onclick="this.previousElementSibling.stepUp()">&#43;</button>
        </div>
        </div>`
  })
  Cart.map((item) => {
    const { price, quantity } = item
    let multiplier = price * quantity
    // console.log(multiplier)
    return multiplier
  })
}
export const cartProducts = document.querySelector(".cartContainer")
export const cartQuantity = document.querySelector("h3")
// console.log(cartQuantity)
