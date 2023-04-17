// // СТРАНИЦА SEARCH

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

// // КОРЗИНА

const raw2 = localStorage.getItem("cart")
const cart = JSON.parse(raw2)
