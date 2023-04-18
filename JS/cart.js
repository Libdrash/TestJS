// КОРЗИНА
const cart = JSON.parse(localStorage.getItem("cart"))
const communicate = JSON.parse(localStorage.getItem("communicate"))
const cartProducts = document.querySelector(".cartContainer")

const showCart = (block) => {
  block.innerHTML = cart.map((elem) => {
    const { img, description, material, price, quantity } = elem
    return `<div class="product_cart">
        <a href="product.html"><img alt="productPicture" src="${img}" /></a>
<div><p class="product_description">${description}</p><p class="material">${material}</p><span>&#8364; ${price}</span></div>
        <div class="product_cart-calculate">
        <button id="minus" class="minusPlusValue" type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
        <input id="quantity" type="number" min="0" value="${quantity}" />
        <button id="plus" class="minusPlusValue" type="button" onclick="this.previousElementSibling.stepUp()">&#43;</button>
        </div>
        </div>`
  })
}
showCart(cartProducts)
//отображение полотна продуктов в корзине
const product_cart = document.querySelectorAll(".product_cart")
const quantityProductInCart = document.querySelector("h3")
quantityProductInCart.textContent = `Cart: ${product_cart.length}` //количество прод в корзине в заголовок
const subTotal = document.querySelector(".subTotal")
subTotal.textContent = `Sub Total (${product_cart.length} items)` //количество прод в тотал

const quantityInputs = document.querySelectorAll("#quantity")

const plus = document.querySelectorAll("#plus")
const minus = document.querySelectorAll("#minus")
Array.from(quantityInputs).map((btn, index) => {
  btn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    cart[index].quantity = +quantityInputs[index].value
  })
})
localStorage.setItem("cart", JSON.stringify(cart))

Array.from(plus).map((btn, index) => {
  btn.addEventListener("click", () => {
    cart[index].quantity = +quantityInputs[index].value
    localStorage.setItem("cart", JSON.stringify(cart))
  })
})
Array.from(minus).map((btn, index) => {
  btn.addEventListener("click", () => {
    cart[index].quantity = +quantityInputs[index].value
    localStorage.setItem("cart", JSON.stringify(cart))
    if (cart[index].quantity === 0) {
      cart.splice(index, 1)
      for (let i = 0; i < cart.length; i++) {
        localStorage.setItem("item" + i, cart[i])
      }
      localStorage.setItem("cart", JSON.stringify(cart))
      location.reload()
    }
  })
})
//удаление
const totalBeforeFee = document.querySelector(".totalBeforeFee")
const totalAfterFee = document.querySelector(".totalAfterFee")

let totalCostStart = 0
const costProcess = () => {
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i]
    const { quantity, price } = product
    const cost = quantity * price
    totalCostStart += cost
  }
}
costProcess() //подсчет в тотал внизу при открытии страницы
totalBeforeFee.textContent = totalCostStart.toFixed(2)
totalAfterFee.textContent = totalCostStart.toFixed(2)

const minusPlusValue = document.querySelectorAll(".minusPlusValue")
Array.from(minusPlusValue).map((btn) => {
  btn.addEventListener("click", () => {
    let totalCost = 0
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i]
      const { quantity, price } = product
      const cost = quantity * price
      totalCost += cost
      totalBeforeFee.textContent = totalCost.toFixed(2)
      totalAfterFee.textContent = totalCost.toFixed(2)
    }
  })
})
//подсчет в моменте
const cart__buttonPay = document.querySelector(".cart__buttonPay")

const payForThePurchcase = []
localStorage.setItem("pay", JSON.stringify(payForThePurchcase))
const pay = JSON.parse(localStorage.getItem("pay"))

cart__buttonPay.addEventListener("click", (index) => {
  pay.push(...cart)
  localStorage.setItem("pay", JSON.stringify(pay))
  if (pay.length === 0) return
  cart.splice(index)
  localStorage.setItem("cart", JSON.stringify(cart))
  location.reload()
  alert("Thank You!")
})
