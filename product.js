document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            name: 'Smart Watch', 
            price: 20, 
            rating: 4.5, 
            imageUrl: 'imgs/Watch 1.png' 
        },
        { 
            name: 'Product 2', 
            price: 35, 
            rating: 4.0, 
            imageUrl: 'images/product2.jpg' 
        },
        { 
            name: 'Product 3', 
            price: 50, 
            rating: 5.0, 
            imageUrl: 'images/product3.jpg' 
        }
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating} / 5</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});

function addToCart(productName, price) {
    alert(`${productName} has been added to the cart.`);
}