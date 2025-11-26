// Hàm render sản phẩm
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    products.forEach(product => {
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
                <p>${product.description}</p>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(${Math.floor(Math.random() * 100) + 50})</span>
                </div>
                <div class="product-price">
                    <span class="price">${Utils.formatPrice(product.price)}</span>
                    <button class="btn" onclick="openProductModal(${product.id})">Xem chi tiết</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}