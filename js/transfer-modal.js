// Modal chuyển khoản
function createTransferModal() {
    const modal = document.createElement('div');
    modal.id = 'transfer-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <div class="modal-body" style="grid-template-columns: 1fr;">
                <h2 style="text-align: center; margin-bottom: 20px; color: var(--primary);">
                    <i class="fas fa-university"></i> Thông tin ngân hàng của bạn
                </h2>
                <p style="text-align: center; margin-bottom: 20px; color: #666; font-size: 14px;">
                    Vui lòng nhập thông tin ngân hàng của bạn để tiến hành chuyển khoản
                </p>
                
                <form id="transferForm">
                    <div class="form-group" style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Chủ tài khoản: *</label>
                        <input type="text" id="accountHolder" class="form-control" placeholder="Nhập tên chủ tài khoản" required>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Số tài khoản: *</label>
                        <input type="text" id="accountNumber" class="form-control" placeholder="Nhập số tài khoản" required>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Chi nhánh: *</label>
                        <input type="text" id="branch" class="form-control" placeholder="Nhập chi nhánh ngân hàng" required>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Số tiền chuyển khoản: *</label>
                        <input type="text" id="transferAmount" class="form-control" placeholder="Nhập số tiền" required style="font-weight: bold; color: var(--primary);">
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Nội dung chuyển khoản:</label>
                        <input type="text" id="transferNote" class="form-control" placeholder="Nhập nội dung chuyển khoản" required>
                        <small style="color: #666; font-size: 12px;">Ví dụ: Thanh toan don hang MD123456</small>
                    </div>
                    
                    <button type="submit" class="btn" style="width: 100%; margin-top: 10px;">
                        <i class="fas fa-arrow-right"></i> Tiếp tục thanh toán
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    return modal;
}

// Hiển thị modal chuyển khoản
function showTransferModal() {
    // Kiểm tra giỏ hàng
    if (!cartManager || cartManager.cart.length === 0) {
        Utils.showNotification('Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán!');
        return;
    }
    
    // Tạo modal nếu chưa có
    let modal = document.getElementById('transfer-modal');
    if (!modal) {
        modal = createTransferModal();
    }
    
    // Không tự động điền số tiền - để khách hàng tự nhập
    
    // Hiển thị modal
    modal.style.display = 'flex';
    
    // Xử lý đóng modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    // Đóng khi click bên ngoài
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
    
    // Xử lý form submit
    const form = document.getElementById('transferForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        
        const accountHolder = document.getElementById('accountHolder').value.trim();
        const accountNumber = document.getElementById('accountNumber').value.trim();
        const branch = document.getElementById('branch').value.trim();
        const transferAmount = document.getElementById('transferAmount').value.trim();
        const transferNote = document.getElementById('transferNote').value.trim();
        
        if (!accountHolder || !accountNumber || !branch || !transferAmount || !transferNote) {
            Utils.showNotification('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Lưu thông tin và chuyển đến trang ngân hàng
        localStorage.setItem('cart', JSON.stringify(cartManager.cart));
        localStorage.setItem('transferInfo', JSON.stringify({
            accountHolder,
            accountNumber,
            branch,
            transferAmount,
            transferNote
        }));
        
        // Chuyển đến trang ngân hàng
        window.location.href = 'nganhang.html';
    };
}

// CSS cho form
const style = document.createElement('style');
style.textContent = `
    .form-control {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        transition: border-color 0.3s;
    }
    
    .form-control:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.1);
    }
    
    .form-group label {
        color: var(--dark);
        font-size: 14px;
    }
`;
document.head.appendChild(style);