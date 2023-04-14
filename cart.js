const Cart = JSON.parse(localStorage.getItem("cart"))
const communicate = JSON.parse(localStorage.getItem("communicate"))
const cartProducts = document.querySelector(".cartContainer")

const showCart = (block) => {
  // if (Cart == undefined) return
  block.innerHTML = Cart.map((elem) => {
    const { img, description, material, price, quantity } = elem
    // if (cart[index] == null) return
    return `<div class="product_cart">
        <a href="product.html"><img src="${img}" /></a>
<div><p>${description}</p><p class="material">${material}</p><span>&#8364; ${price}</span></div>
        <div class="product_cart-calculate">
        <button id="minus" class="minusPlusValue" type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
        <input id="quantity" type="number" min="0" value="${quantity}" />
        <button id="plus" class="minusPlusValue" type="button" onclick="this.previousElementSibling.stepUp()">&#43;</button>
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

const plus = document.querySelectorAll("#plus")
const minus = document.querySelectorAll("#minus")
Array.from(quantityInputs).map((btn, index) => {
  btn.addEventListener("click", () => {
    const Cart = JSON.parse(localStorage.getItem("cart"))
    Cart[index].quantity = +quantityInputs[index].value
  })
})
localStorage.setItem("cart", JSON.stringify(Cart))

Array.from(plus).map((btn, index) => {
  btn.addEventListener("click", () => {
    Cart[index].quantity = +quantityInputs[index].value
    localStorage.setItem("cart", JSON.stringify(Cart))
  })
})
Array.from(minus).map((btn, index) => {
  btn.addEventListener("click", () => {
    Cart[index].quantity = +quantityInputs[index].value
    localStorage.setItem("cart", JSON.stringify(Cart))
    if (Cart[index].quantity === 0) {
      deleteFunction()
    }
  })
})
const deleteFunction = () => {
  // delete Cart[id]
  console.log("Это бы удалить")
  //Да что такое это ваше удалять
}
const totalBeforeFee = document.querySelector(".totalBeforeFee")
const totalAfterFee = document.querySelector(".totalAfterFee")

let totalCostStart = 0
const costProcess = () => {
  for (let i = 0; i < Cart.length; i++) {
    const product = Cart[i]
    const { quantity, price } = product
    const cost = quantity * price
    totalCostStart += cost
  }
}
costProcess()
totalBeforeFee.textContent = totalCostStart
totalAfterFee.textContent = totalCostStart

const minusPlusValue = document.querySelectorAll(".minusPlusValue")
Array.from(minusPlusValue).map((btn) => {
  btn.addEventListener("click", () => {
    let totalCost = 0
    for (let i = 0; i < Cart.length; i++) {
      const product = Cart[i]
      const { quantity, price } = product
      const cost = quantity * price
      totalCost += cost
      totalBeforeFee.textContent = totalCost
      totalAfterFee.textContent = totalCost
    }
  })
})

//На случай смерти корзины
// const cartOfProducts = [
//   {
//     description: "Modern light clothes",
//     id: 3,
//     img: "imagesSearch/productId3.svg",
//     material: "Dress modern",
//     price: 212.99,
//     quantity: 1,
//   },
// ]
// localStorage.setItem("cart", JSON.stringify(cartOfProducts))
