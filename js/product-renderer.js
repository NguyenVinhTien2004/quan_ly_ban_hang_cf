// Hàm render sản phẩm từ data
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    PRODUCTS_DATA.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-name', product.name);
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <p>${product.description.substring(0, 80)}...</p>
                <div class="product-price">
                    <span class="price">${Utils.formatPrice(product.price)}</span>
                    <button class="btn add-to-cart" data-id="${product.id}">Thêm vào giỏ</button>
                </div>
            </div>
        `;
        
        // Thêm event listeners trực tiếp
        const addToCartBtn = productCard.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            cartManager.addToCart(productId);
        });
        
        productCard.addEventListener('click', function() {
            const productId = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
            openProductModal(productId);
        });
        
        productGrid.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}