const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 599, image: "images/smartphone.jpg" },
    { id: 2, name: "Headphones", category: "electronics", price: 99, image: "images/headphones.jpg" },
    { id: 3, name: "T-Shirt", category: "clothing", price: 25, image: "images/tshirt.jpg" },
    { id: 4, name: "Watch", category: "accessories", price: 150, image: "images/watch.jpg" },
];

const productContainer = document.getElementById("products");

function displayProducts(category = null) {
    productContainer.innerHTML = ""; // Clear previous products
    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add event listeners for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const category = event.target.getAttribute("href").replace("#", "");
        displayProducts(category);
    });
});

// Display all products on page load
displayProducts();
