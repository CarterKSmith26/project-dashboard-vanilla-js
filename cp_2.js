// fetchProductsThen
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then(data => {
      data.forEach(product => console.log(product.fields.name));
    })
    .catch(error => console.error("Fetch (then) error:", error));
}

// fetchProductsAsync
async function fetchProductsAsync() {
  try {
    const res = await fetch("https://www.course-api.com/javascript-store-products");
    const data = await res.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}

// displayProducts
function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${image[0].url}" alt="${name}">
      <div class="product-info">
        <h3>${name}</h3>
        <p>$${(price / 100).toFixed(2)}</p>
      </div>
    `;

    container.appendChild(productCard);
  });
}

// handleError
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// Call both functions
fetchProductsThen();
fetchProductsAsync();