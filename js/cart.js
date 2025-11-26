// File quản lý giỏ hàng
class CartManager {
    constructor() {
        this.cart = [];
        this.cartCount = document.querySelector('.cart-count');
        this.cartItems = document.getElementById('cart-items');
        this.cartTotalPrice = document.getElementById('cart-total-price');
        this.cartSidebar = document.getElementById('cart-sidebar');
        
        // Bind events một lần duy nhất
        this.bindCartEvents();
    }

    // Định dạng giá tiền
    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
    }

    // Thêm sản phẩm vào giỏ
    addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        this.updateCart();
    }

    // Tăng số lượng
    increaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            this.updateCart();
        }
    }

    // Giảm số lượng
    decreaseQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                this.removeFromCart(productId);
            }
            this.updateCart();
        }
    }

    // Cập nhật số lượng
    updateQuantity(productId, quantity) {
        if (quantity < 1) {
            this.removeFromCart(productId);
            return;
        }
        
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.updateCart();
        }
    }

    // Xóa sản phẩm
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCart();
    }

    // Cập nhật giao diện giỏ hàng
    updateCart() {
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
        this.cartCount.textContent = totalItems;
        
        this.cartItems.innerHTML = '';
        
        if (this.cart.length === 0) {
            this.cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 15px; opacity: 0.3;"></i>
                    <p>Giỏ hàng của bạn đang trống</p>
                </div>
            `;
            this.cartTotalPrice.textContent = '0 ₫';
            return;
        }
        
        let totalPrice = 0;
        
        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${this.formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                        <span class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></span>
                    </div>
                </div>
            `;
            
            this.cartItems.appendChild(cartItemElement);
        });
        
        this.cartTotalPrice.textContent = this.formatPrice(totalPrice);
    }

    // Gắn sự kiện cho các nút trong giỏ hàng
    bindCartEvents() {
        // Sử dụng event delegation
        this.cartItems.addEventListener('click', (e) => {
            const target = e.target.closest('button, span');
            if (!target) return;
            
            const id = parseInt(target.getAttribute('data-id'));
            
            if (target.classList.contains('cart-quantity-btn') && target.classList.contains('minus')) {
                this.decreaseQuantity(id);
            } else if (target.classList.contains('cart-quantity-btn') && target.classList.contains('plus')) {
                this.increaseQuantity(id);
            } else if (target.classList.contains('remove-item')) {
                this.removeFromCart(id);
            }
        });
        
        this.cartItems.addEventListener('change', (e) => {
            if (e.target.classList.contains('cart-quantity-input')) {
                const id = parseInt(e.target.getAttribute('data-id'));
                const quantity = parseInt(e.target.value);
                this.updateQuantity(id, quantity);
            }
        });
    }

    // Mở giỏ hàng
    openCart() {
        this.cartSidebar.classList.add('active');
    }

    // Đóng giỏ hàng
    closeCart() {
        this.cartSidebar.classList.remove('active');
    }

    // Thanh toán
    checkout() {
        if (this.cart.length === 0) {
            this.showNotification('Giỏ hàng của bạn đang trống!');
            return;
        }
        
        // Mở modal thanh toán
        checkoutModal.show(this.cart);
        this.closeCart();
    }

    // Hiển thị thông báo
    showNotification(message) {
        alert(message);
    }
}