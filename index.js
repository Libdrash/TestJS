const object = {
  name: "Douglas Neal",
  avatar: "imagesSearch/profileAvatar.svg",
  status: "imagesSearch/profileStatus.svg",
}
localStorage.setItem("person", JSON.stringify(object))
const raw = localStorage.getItem("person")
const person = JSON.parse(raw)

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

const searchProducts = document.querySelector(".searchProducts")

const showSearch = (block) => {
  block.innerHTML = productList.map((el) => {
    const { description, material, price, rating, img } = el
    return `<div class='products'>
    <a href="product.html"><img src="${img}" /></a>
    <button class="heart"></button>
  <p>${description}</p>
<p>${material}</p>
<div class="counting"><b>&#8364; ${price}</b>
<span><img src="imagesSearch/icon/star.svg"/> ${rating}</span></div>
</div>`
  })
}
showSearch(searchProducts)
let heart = document.querySelector(".heart")
heart.onclick = () => (heart.style.backgroundImage = "url('imagesSearch/icon/heartWhite.svg')")
///ochen grustno

// СТРАНИЦА ПРОДУКТА
let returnButton = document.querySelector(".return")

// const colorChange = () => {
//   let random = colors[Math.floor(Math.random() * colors.length)]
//   colorize.style.backgroundColor = random
// }
// button.addEventListener("click", colorChange)

const Cart = [
  {
    product: {
      id: 5,
      description: `Modern light clothes`,
      material: "Recycled",
      price: 340,
    },
    quantity: 4,
  },
  {
    product: {
      id: 2,
      description: `Clean Climb Sweatshirt`,
      material: "Recucled",
      price: 75,
    },
    quantity: 1,
  },
  {
    product: {
      id: 6,
      description: `Powder Town HeadBand`,
      material: "Recycled",
      price: 40,
    },
    quantity: 1,
  },
]

localStorage.setItem("cart", JSON.stringify(Cart))
const raw2 = localStorage.getItem("cart")
const cart = JSON.parse(raw2)
