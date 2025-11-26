# Mocha Delight - Website Cà Phê

Website bán cà phê trực tuyến với giao diện hiện đại và tính năng giỏ hàng đầy đủ.

## Cấu trúc thư mục

```
quan_li_ban_hang_cf/
├── index.html              # File HTML chính
├── css/
│   └── styles.css          # File CSS chính chứa tất cả styles
├── js/
│   ├── data.js            # Dữ liệu sản phẩm, cửa hàng, tin tức
│   ├── utils.js           # Các hàm tiện ích
│   ├── cart.js            # Class quản lý giỏ hàng
│   └── main.js            # File JavaScript chính
├── images/                 # Thư mục chứa hình ảnh (nếu có)
└── README.md              # File hướng dẫn
```

## Tính năng

### Frontend
- ✅ Giao diện responsive
- ✅ Hiệu ứng hover và animation
- ✅ Modal chi tiết sản phẩm
- ✅ Giỏ hàng sidebar
- ✅ Tìm kiếm sản phẩm
- ✅ Lọc sản phẩm theo danh mục
- ✅ Smooth scrolling
- ✅ Form đăng ký nhận tin

### JavaScript Modules
- **data.js**: Chứa dữ liệu tĩnh (sản phẩm, cửa hàng, tin tức)
- **utils.js**: Các hàm tiện ích (format giá, validate email, debounce, etc.)
- **cart.js**: Class CartManager quản lý giỏ hàng
- **main.js**: Logic chính của website

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Hoặc chạy với live server để có trải nghiệm tốt hơn

## Tính năng nổi bật

### Quản lý giỏ hàng
- Thêm/xóa sản phẩm
- Cập nhật số lượng
- Tính tổng tiền tự động
- Lưu trữ trong memory (có thể mở rộng với localStorage)

### Tìm kiếm và lọc
- Tìm kiếm theo tên sản phẩm
- Lọc theo danh mục (Tất cả, Cà phê, Đặc biệt, Đá xay)
- Debounce cho tìm kiếm để tối ưu performance

### Giao diện người dùng
- Design responsive cho mobile/tablet/desktop
- Smooth scrolling giữa các section
- Modal popup cho chi tiết sản phẩm
- Sidebar giỏ hàng trượt từ bên phải

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: Logic frontend không sử dụng framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Mở rộng

Có thể dễ dàng mở rộng với:
- Backend API (Node.js, PHP, Python)
- Database (MySQL, MongoDB)
- Payment gateway
- User authentication
- Admin panel
- Real-time notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading images
- Debounced search
- Optimized CSS với CSS Variables
- Minimal JavaScript dependencies