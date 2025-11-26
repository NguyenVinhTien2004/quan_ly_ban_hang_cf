// Sử dụng dữ liệu từ file data.js
const products = PRODUCTS_DATA;

// Biến toàn cục - lưu trữ trạng thái của ứng dụng
let currentProduct = null;  // Sản phẩm hiện tại đang xem trong modal
let cartManager;            // Instance của CartManager

// DOM Elements - lấy các phần tử HTML để thao tác
const productModal = document.getElementById('product-modal');     // Modal hiển thị chi tiết sản phẩm
const searchInput = document.querySelector('.search-input');       // Ô tìm kiếm
const filterButtons = document.querySelectorAll('.filter-btn');    // Các nút lọc sản phẩm

// Hàm mở giỏ hàng khi bấm nút "Đặt hàng" ở header
function openCartForOrder() {
    if (!cartManager || cartManager.cart.length === 0) {
        Utils.showNotification('Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng!');
        // Cuộn xuống phần sản phẩm
        Utils.smoothScrollTo('#products');
        return;
    }
    
    // Mở giỏ hàng nếu có sản phẩm
    cartManager.openCart();
}

// Hàm mở modal chi tiết sản phẩm
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    currentProduct = product;
    
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = Utils.formatPrice(product.price);
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('modal-product-description').textContent = product.description;
    
    // Reset số lượng về 1
    document.querySelector('.quantity-input').value = 1;
    
    productModal.style.display = 'flex';
}

// Hàm lọc sản phẩm
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Hàm tìm kiếm sản phẩm
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sự kiện khi trang được tải - chạy khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    // Render sản phẩm từ data
    renderProducts();
    
    // Khởi tạo CartManager
    cartManager = new CartManager();
    cartManager.updateCart();
    
    // Smooth scrolling cho các liên kết nội bộ 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            Utils.smoothScrollTo(targetId);
        });
    });
    
    // Thay đổi header khi scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // Xử lý form đăng ký nhận tin
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (!Utils.validateEmail(email)) {
            Utils.showNotification('Vui lòng nhập email hợp lệ!');
            return;
        }
        
        Utils.showNotification('Cảm ơn bạn đã đăng ký nhận tin với email: ' + email);
        this.reset();
    });
    
    // Sự kiện cho nút "Thêm vào giỏ" trong modal
    document.querySelector('.add-to-cart-modal').addEventListener('click', function() {
        if (currentProduct) {
            const quantity = parseInt(document.querySelector('.quantity-input').value);
            cartManager.addToCart(currentProduct.id, quantity);
            productModal.style.display = 'none';
        }
    });
    
    // Sự kiện cho nút đóng modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        productModal.style.display = 'none';
    });
    
    // Đóng modal khi click bên ngoài
    window.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Sự kiện cho nút điều chỉnh số lượng trong modal
    document.querySelector('.quantity-btn.minus').addEventListener('click', function() {
        const input = document.querySelector('.quantity-input');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
    
    document.querySelector('.quantity-btn.plus').addEventListener('click', function() {
        const input = document.querySelector('.quantity-input');
        input.value = parseInt(input.value) + 1;
    });
    
    // Sự kiện cho biểu tượng giỏ hàng
    document.getElementById('cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        cartManager.openCart();
    });
    
    // Sự kiện cho nút đóng giỏ hàng
    document.querySelector('.close-cart').addEventListener('click', function() {
        cartManager.closeCart();
    });
    
    // Sự kiện cho nút thanh toán
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        cartManager.checkout();
    });
    
    // Sự kiện cho bộ lọc sản phẩm
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Xóa class active khỏi tất cả các nút
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm class active cho nút được click
            this.classList.add('active');
            
            // Lọc sản phẩm
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Sự kiện cho ô tìm kiếm với debounce
    searchInput.addEventListener('input', Utils.debounce(function() {
        searchProducts(this.value);
    }, 300));
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Đóng menu khi click vào link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }
    
    // Khởi tạo các tính năng bổ sung
    Utils.lazyLoadImages();
    Utils.animateOnScroll();
});