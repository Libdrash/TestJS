// СТРАНИЦА SEARCH

const raw1 = localStorage.getItem("products")
const products = JSON.parse(raw1)

const searchProducts = document.querySelector(".searchProducts")
const showSearch = (block) => {
  // if (!block) return
  block.innerHTML = products.map((el) => {
    const { description, material, price, rating, img } = el
    return `<div class='products'>
    <a><img id="productsImg" src="${img}" /></a>
    <button id="heart"></button>
  <p>${description}</p>
<p>${material}</p>
<div class="counting"><b>&#8364; ${price}</b>
<span><img src="imagesSearch/icon/star.svg"/> ${rating}</span></div>
</div>`
  })
}
showSearch(searchProducts)

const btnLike = document.querySelectorAll("#heart")
Array.from(btnLike).map((btn, index) => {
  if (products[index].isLiked) {
    btn.style.backgroundImage = `url("imagesSearch/icon/heartWhite.svg")`
  }
  btn.addEventListener("click", () => {
    products[index].isLiked = !products[index].isLiked
    const communicate = JSON.parse(localStorage.getItem("communicate"))
    communicate.isLiked = products[index].isLiked
    localStorage.setItem("communicate", JSON.stringify(communicate))
    btn.style.backgroundImage = `url(${
      products[index].isLiked ? "imagesSearch/icon/heartWhite.svg" : "imagesSearch/icon/heartBlack.svg"
    })`

    localStorage.setItem("products", JSON.stringify(products))
  })
})

// СТРАНИЦА ПРОДУКТА

const productCard = document.querySelectorAll(".products")
const communicate = JSON.parse(localStorage.getItem("communicate"))
Array.from(productCard).map((card, index) => {
  card.addEventListener("click", (event) => {
    let target = event.target
    if (target.id != "productsImg") return
    document.location.href = "product.html"
    const products = JSON.parse(localStorage.getItem("products"))
    communicate.id = products[index].id
    communicate.material = products[index].material
    communicate.img = products[index].img
    communicate.description = products[index].description
    communicate.price = products[index].price
    communicate.isLiked = products[index.isLiked]
    communicate.quantity = 1
    localStorage.setItem("communicate", JSON.stringify(communicate))
  })
})

// // КОРЗИНА

const raw2 = localStorage.getItem("cart")
const cart = JSON.parse(raw2)
