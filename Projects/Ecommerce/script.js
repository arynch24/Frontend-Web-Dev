document.addEventListener('DOMContentLoaded', () => {

  const products = [
    { id: 1, name: 'Product 1', price: 100.9999 },
    { id: 2, name: 'Product 2', price: 200.50 },
    { id: 3, name: 'Product 3', price: 300.399 },
    { id: 4, name: 'Product 4', price: 950.399 },
  ]

  // const cart = []
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productList = document.getElementById('product-list')
  const cartItems = document.getElementById('cart-items')
  const emptyCartMessage = document.getElementById('empty-cart')
  const cartTotalMessage = document.getElementById('cart-total')
  const totalPriceDisplay = document.getElementById('total-price')
  const checkOutButton = document.getElementById('checkout-btn')


  products.forEach(product => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product');
    productDiv.innerHTML = `<span>${product.name} - ${product.price.toFixed(2)}</span> 
      <button data-id="${product.id}">Add to Cart</button>
      `
    productList.appendChild(productDiv)
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find(p => p.id === productId)

      addToCart(product)
      renderCartElements();
    }
  })

  //Add item to the cart 
  function addToCart(product) {
    cart.push(product);
    saveCart()
    console.log(cart)
  }

  // Delete item from cart
  function deleteItem(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    saveCart()
    renderCartElements();
  }

  function renderCartElements() {
    cartItems.innerText = ""
    let totalPrice = 0

    if (cart.length) {
      emptyCartMessage.classList.add("hidden")
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement('div')

        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)} <button item-id="${item.id}" id="delete">X</button>`

        cartItem.querySelector('button').addEventListener('click', (e) => {
          const productId = parseInt(e.target.getAttribute("item-id"));
          deleteItem(productId)
          totalPrice -= item.price.toFixed(2);

        })
        cartItems.appendChild(cartItem);
      })
      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
    }
    else {
      emptyCartMessage.classList.remove("hidden");
    }
  }

  checkOutButton.addEventListener('click', () => {
    cart.length = 0
    renderCartElements();
    saveCart()
    alert("Check Out Successfully")
    totalPriceDisplay.textContent = 0;
  })

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  renderCartElements()
})