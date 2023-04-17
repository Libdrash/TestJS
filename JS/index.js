//Добавление в localstorage
//ниже нужно расскомментить
//полотно продуктов
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
//активная карточка коммуникации
const com = {
  description: "Modern light clothes",
  id: 3,
  img: "imagesSearch/productId3.svg",
  material: "Dress modern",
  price: 212.99,
  isLiked: false,
}
//корзина
const cartOfProducts = [
  {
    description: "Modern light clothes",
    id: 3,
    img: "imagesSearch/productId3.svg",
    material: "Dress modern",
    price: 212.99,
    quantity: 1,
  },
]
//ЭТО НАДО РАССКОММЕНТИТЬ
// localStorage.setItem("cart", JSON.stringify(cartOfProducts))
// localStorage.setItem("communicate", JSON.stringify(com))
// localStorage.setItem("products", JSON.stringify(productList))

//начало
// СТРАНИЦА SEARCH ПРОДУКТОВ

const products = JSON.parse(localStorage.getItem("products"))
const searchProducts = document.querySelector(".searchProducts")
const showSearch = (block) => {
  block.innerHTML = products.map((el) => {
    const { description, material, price, rating, img } = el
    return `<div class='products'>
    <a><img alt="productPicture" id="productsImg" src="${img}" /></a>
    <button id="heart"></button>
  <p>${description}</p>
<p>${material}</p>
<div class="counting"><b>&#8364; ${price}</b>
<span><img alt="iconStar" src="imagesSearch/icon/star.svg"/> ${rating}</span></div>
</div>`
  })
}
showSearch(searchProducts)
//полотно продуктов

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

const productCard = document.querySelectorAll(".products")

Array.from(productCard).map((card, index) => {
  card.addEventListener("click", (event) => {
    let target = event.target
    if (target.id != "productsImg") return
    document.location.href = "product.html"
    communicate.id = products[index].id
    communicate.material = products[index].material
    communicate.img = products[index].img
    communicate.description = products[index].description
    communicate.price = products[index].price
    communicate.isLiked = products[index].isLiked
    communicate.quantity = 1
    localStorage.setItem("communicate", JSON.stringify(communicate))
  })
})
//перенос данных одного продукта на активную карточку
