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

const communication = {}
const cartOfProducts = []

const communicationGet = JSON.parse(localStorage.getItem("communicate"))
const productsGet = JSON.parse(localStorage.getItem("products"))
const cartGet = JSON.parse(localStorage.getItem("cart"))
if (!productsGet) {
  localStorage.setItem("products", JSON.stringify(productList))
}
if (!communicationGet) {
  localStorage.setItem("communicate", JSON.stringify(communication))
}
if (!cartGet) {
  localStorage.setItem("cart", JSON.stringify(cartOfProducts))
}

// СТРАНИЦА SEARCH ПРОДУКТОВ
//полотно продуктов
const products = JSON.parse(localStorage.getItem("products"))

const searchProducts = document.querySelector(".searchProducts")
const showSearch = (block) => {
  products.forEach((el) => {
    const { description, material, price, rating, img } = el
    block.innerHTML += `
    <div class='products'>
    <a>
    <img alt="productPicture" id="productsImg" src="${img}" />
    </a>
    <button id="heart"></button>
  <p class="productsDescription">${description}</p>
<p>${material}</p>
<div class="counting"><b>&#8364; ${price}</b>
<span><img alt="iconStar" src="imagesSearch/icon/star.svg"/> ${rating}</span></div>
</div>`
  })
}
showSearch(searchProducts)

const productCard = document.querySelectorAll(".products")
console.log(productCard)
const productsDescription = document.querySelectorAll(".productsDescription")
const productCardArray = Array.from(productCard)

//инпут
const searchInput = document.querySelector(".searchInput")
const searchFilter = (event) => {
  let target = event.target
  filtered(target.value)
}
searchInput.addEventListener("input", searchFilter)

const filtered = (value) => {
  let regex = new RegExp(value, "i")
  products.filter((item, index) =>
    item.description.match(regex)
      ? changeDisplayBlock(productCardArray[index])
      : changeDisplayNone(productCardArray[index])
  )
}
const changeDisplayNone = (el) => {
  el.style.display = "none"
}
const changeDisplayBlock = (el) => {
  el.style.display = "flex"
}

const communicate = JSON.parse(localStorage.getItem("communicate"))
const btnLike = document.querySelectorAll("#heart")
Array.from(btnLike).map((btn, index) => {
  if (products[index].isLiked) {
    btn.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
  }
  btn.addEventListener("click", () => {
    products[index].isLiked = !products[index].isLiked
    btn.style.backgroundImage = `url(${
      products[index].isLiked ? "imagesSearch/icon/heartWhite.svg" : "imagesSearch/icon/heartBlack.svg"
    })`
    localStorage.setItem("products", JSON.stringify(products))
  })
})
//изменение понравившихся
// СТРАНИЦА Коммуникационного ПРОДУКТА

Array.from(productCard).map((card, index) => {
  card.addEventListener("click", (event) => {
    let target = event.target
    if (target.id != "productsImg") return
    communicate.id = products[index].id
    communicate.material = products[index].material
    communicate.img = products[index].img
    communicate.description = products[index].description
    communicate.price = products[index].price
    communicate.isLiked = products[index].isLiked
    communicate.quantity = 1
    localStorage.setItem("communicate", JSON.stringify(communicate))
    document.location.href = "product.html"
  })
})
//перенос данных одного продукта на активную карточку
