const productList = [
  {
    id: 1,
    description: `Men's Cotton in Conversion Midweight Rugby Shirt`,
    material: "Organic",
    price: 120,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId1.svg",
  },
  {
    id: 2,
    description: `Clean Climb Sweatshirt`,
    material: "Recucled",
    price: 75,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId2.svg",
  },
  {
    id: 3,
    description: `Modern light clothes`,
    material: "Dress modern",
    price: 212.99,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId3.svg",
  },
  {
    id: 4,
    description: `Modern light clothes`,
    material: "Dress modern",
    price: 212.99,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId4.svg",
  },
  {
    id: 5,
    description: `Modern light clothes`,
    material: "Recycled",
    price: 340,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId5.svg",
  },
  {
    id: 6,
    description: `Powder Town HeadBand`,
    material: "Recycled",
    price: 40,
    rating: "5.0",
    isLiked: false,
    img: "imagesSearch/productId6.svg",
  },
]
// СТРАНИЦА SEARCH
localStorage.setItem("products", JSON.stringify(productList))
const raw1 = localStorage.getItem("products")
const products = JSON.parse(raw1)
// function handleClickButtonHeartbeat() {

// }

const searchProducts = document.querySelector(".searchProducts")
const showSearch = (block) => {
  if (!block) return
  block.innerHTML = products.map((el) => {
    const { description, material, price, rating, img } = el
    return `<div class='products'>
    <a href="product.html"><img src="${img}" /></a>
    <button  id="heart"></button>
  <p>${description}</p>
<p>${material}</p>
<div class="counting"><b>&#8364; ${price}</b>
<span><img src="imagesSearch/icon/star.svg"/> ${rating}</span></div>
</div>`
  })
}
showSearch(searchProducts)
// onclick="${() => console.log(123)}"

// const btnLike = document.querySelectorAll("#heart")
// console.log(btnLike)
// products.map()
// products.map((item) => item.isLiked)

// btnLike.forEach((btn,index) => {
//   btn.addEventListener("click", () => {
//     btn.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
//     // localStorage.getItem('products')[index]

// сравнить индексы!!! и типа перезаписать в локал сторейдж
//   })
// })
// ТИПА ТОГО НАДО ПОПРОБОВАТЬ

// )
// const colorChange = (block) => {
//   block.map((btn) => btn.onclick = )
// }
// colorChange(btnLike)

// searchProducts.onclick = function (event) {
//   let target = event.target
//   console.log(target)
//   if (target.id != "heart") return

//   changeColor1(target)
// }
// function changeColor1(target) {
//   target.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
// }

// searchProducts.onclick = function (event) {
//   let target = event.target
//   if (target.tagName != "a") return
//   console.log(target)
// }

// const like = () => {
//   if (!isLike) {
//     likeButton.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
//     lol.isLiked = true
//   }
//   // if (lol.isLiked) {
//   //   lol.isLiked = false
//   // }
// }
// likeButton.addEventListener("click", like)

// СТРАНИЦА ПРОДУКТА

// КОРЗИНА
export const Cart = [
  {
    img: "imagesSearch/productId5.svg",
    id: 5,
    description: `Modern light clothes`,
    material: "Recycled",
    price: 340,
    quantity: 1,
  },
  {
    img: "imagesSearch/productId2.svg",
    id: 2,
    description: `Clean Climb Sweatshirt`,
    material: "Recucled",
    price: 75,
    quantity: 1,
  },
  {
    img: "imagesSearch/productId6.svg",
    id: 6,
    description: `Powder Town HeadBand`,
    material: "Recycled",
    price: 40,
    quantity: 1,
  },
]

localStorage.setItem("cart", JSON.stringify(Cart))
const raw2 = localStorage.getItem("cart")
const cart = JSON.parse(raw2)

import { showCart, cartProducts, cartQuantity } from "./cart.js"
showCart(cartProducts)
