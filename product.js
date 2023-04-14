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

function oneLike(btn) {
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
  })
}
oneLike(likeButton) //стаивит лайк/ почему-то не видит при переходе со страницы в локалсторейдже значение исЛайкед? хотя прописывалось в него и товары лайки на серче влияют на ислайкд в лок стор

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
//ВАРИАНТ 1
// Object.keys(communicate).forEach((key) => console.log(key == "id"))
addSum.onclick = () => {
  document.location.href = "cart.html"
  for (let key in communicate) {
    if (key == "id") {
      let isAddedToCart = false
      //функция которая определит есть ли в корзине элемент и потом уже мапать не испольховать два источника правды
      // беру объект делаю махинации и потом сохраняю объект в локстор
      Cart.map((item) => {
        // if (Cart.value === null) {
        //   Cart.push(communicate)}
        if (item.id === communicate.id) {
          item.quantity += communicate.quantity
          isAddedToCart = true
          return item
        }
        // if (!isAddedToCart) {
        //   Cart.push(communicate)
        // }
        localStorage.setItem("cart", JSON.stringify(Cart))
      })
    }
  }
}
//ВАРИАНТ 2
// addSum.onclick = () => {
//   document.location.href = "cart.html"
//   let isAddedToCart = false
//   Cart.map((item) => {
//     if (Cart.value === null) {
//       Cart.push(communicate)
//     }
// if (item.id === communicate.id) {
//   item.quantity += communicate.quantity
//   isAddedToCart = true
//   return item
// }
//   if (!isAddedToCart) {
//     Cart.push(communicate)
//   }
//   localStorage.setItem("cart", JSON.stringify(Cart))
// })
// }
// Cart.map((item) => console.log(item.id))

// console.log(communicate.id)
