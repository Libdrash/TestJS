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
    material: "Organuc",
    price: 120,
    rating: 5.0,
    isLiked: false,
    img: "imagesSearch/productId1.svg",
  },
  {
    id: 2,
    description: `Clean Climb Sweatshirt`,
    material: "Recucled",
    price: 75,
    rating: 5.0,
    isLiked: false,
  },
  {
    id: 3,
    description: `Modern light clothes`,
    material: "Dress modern",
    price: 212.99,
    rating: 5.0,
    isLiked: false,
  },
  {
    id: 4,
    description: `Modern light clothes`,
    material: "Dress modern",
    price: 212.99,
    rating: 5.0,
    isLiked: false,
  },
  {
    id: 5,
    description: `Modern light clothes`,
    material: "Recycled",
    price: 340,
    rating: 5.0,
    isLiked: false,
  },
  {
    id: 6,
    description: `Powder Town HeadBand`,
    material: "Recycled",
    price: 40,
    rating: 5.0,
    isLiked: false,
  },
]

localStorage.setItem("products", JSON.stringify(productList))
const raw1 = localStorage.getItem("products")
const products = JSON.parse(raw1)

const searchProducts = document.querySelector(".searchProducts")
let product1 = products[0]
console.log(product1)
console.log(product1.id)
searchProducts.innerHTML = `<div class='product1'>${product1.description} 
<br> ${product1.material} 
<br> ${product1.price}
<br> ${product1.rating}
</div>`
const suka = document.querySelector(".product1")

const arrCart = [
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

localStorage.setItem("cart", JSON.stringify(arrCart))
const raw2 = localStorage.getItem("cart")
const cart = JSON.parse(raw2)
