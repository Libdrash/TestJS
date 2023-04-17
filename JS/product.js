const communicate = JSON.parse(localStorage.getItem("communicate"))

const productContainer = document.querySelector(".productContainer ")
const description = document.querySelector("p")
const quantity = document.querySelector("input")
const likeButton = document.querySelector(".liked")
const addSum = document.querySelector(".addSum")

productContainer.style.backgroundImage = `url('${communicate.img}')` //фотка
description.textContent = communicate.description //название
quantity.value = communicate.quantity //количество отправляется в счетчик

addSum.textContent = `Add | ${(communicate.price * quantity.value).toFixed(2)}` //умножает количество на цену
const products = JSON.parse(localStorage.getItem("products"))

function oneLike(btn, index) {
  const communicate = JSON.parse(localStorage.getItem("communicate"))
  if (communicate.isLiked) {
    btn.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
  }
  btn.addEventListener("click", () => {
    communicate.isLiked = !communicate.isLiked
    btn.style.backgroundImage = `url(${
      communicate.isLiked ? "imagesSearch/icon/heartWhite.svg" : "imagesSearch/icon/heartBlack.svg"
    }`
    localStorage.setItem("communicate", JSON.stringify(communicate))
    let findProduct = products.find((el) => el.id === communicate.id)
    findProduct.isLiked = communicate.isLiked
    localStorage.setItem("products", JSON.stringify(products))
  })
}
oneLike(likeButton)

const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
plus.addEventListener("click", () => {
  communicate.quantity = +quantity.value
  localStorage.setItem("communicate", JSON.stringify(communicate))
  addSum.textContent = `Add | ${(communicate.price * quantity.value).toFixed(2)}`
}) //добавление и умножение
minus.addEventListener("click", () => {
  communicate.quantity = +quantity.value
  localStorage.setItem("communicate", JSON.stringify(communicate))
  addSum.textContent = `Add | ${(communicate.price * quantity.value).toFixed(2)}`
}) //вычитание и умножение

const Cart = JSON.parse(localStorage.getItem("cart"))

addSum.onclick = () => {
  const found = Cart.find((item) => item.id === communicate.id)
  document.location.href = "cart.html"
  switch (found) {
    case undefined:
      Cart.push(communicate)
      break
    case found:
      found.quantity += communicate.quantity
      break
  }
  localStorage.setItem("cart", JSON.stringify(Cart))
}
