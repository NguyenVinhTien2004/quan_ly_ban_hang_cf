// Modal thanh toán
class CheckoutModal {
    constructor() {
        this.modal = null;
        this.selectedPaymentMethod = '';
        this.selectedBank = null;
        this.cart = [];
        this.banks = [
            { code: 'VCB', name: 'Vietcombank', shortName: 'VCB' },
            { code: 'BIDV', name: 'BIDV', shortName: 'BIDV' },
            { code: 'AGB', name: 'Agribank', shortName: 'AGB' },
            { code: 'TCB', name: 'Techcombank', shortName: 'TCB' },
            { code: 'MB', name: 'MB Bank', shortName: 'MB' },
            { code: 'VPB', name: 'VPBank', shortName: 'VPB' },
            { code: 'STB', name: 'Sacombank', shortName: 'STB' },
            { code: 'ACB', name: 'ACB', shortName: 'ACB' }
        ];
    }

    createModal() {
        const modal = document.createElement('div');
        modal.id = 'checkout-modal';
        modal.className = 'modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 20px;
        `;

        modal.innerHTML = `
            <div class="checkout-modal-content" style="
                background: white;
                border-radius: 10px;
                width: 100%;
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            ">
                <div class="modal-header" style="
                    padding: 20px 30px;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 1;
                ">
                    <h2 style="color: var(--primary); margin: 0;">
                        <i class="fas fa-shopping-bag"></i> Thanh toán đơn hàng
                    </h2>
                    <span class="close-checkout" style="
                        font-size: 24px;
                        cursor: pointer;
                        color: #999;
                        padding: 5px;
                    ">&times;</span>
                </div>

                <div class="modal-body" style="
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 30px;
                    padding: 30px;
                ">
                    <!-- Form thanh toán -->
                    <div class="checkout-form">
                        <form id="checkoutModalForm" novalidate>
                            <div class="section-title" style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid var(--light);">
                                <h3 style="color: var(--primary); margin: 0;">
                                    <i class="fas fa-user"></i> Thông tin khách hàng
                                </h3>
                            </div>
                            
                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                                <div class="form-group">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--dark); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Họ và tên *</label>
                                    <input type="text" id="modalFullName" class="form-control" required placeholder="Nhập họ và tên" style="
                                        width: 100%;
                                        padding: 15px 18px;
                                        border: 2px solid #e1e5e9;
                                        border-radius: 12px;
                                        font-size: 15px;
                                        background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    ">
                                </div>
                                <div class="form-group">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--dark); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Số điện thoại *</label>
                                    <input type="tel" id="modalPhone" class="form-control" required placeholder="Nhập số điện thoại" style="
                                        width: 100%;
                                        padding: 15px 18px;
                                        border: 2px solid #e1e5e9;
                                        border-radius: 12px;
                                        font-size: 15px;
                                        background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    ">
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--dark); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email *</label>
                                <input type="email" id="modalEmail" class="form-control" required placeholder="Nhập email" style="
                                    width: 100%;
                                    padding: 15px 18px;
                                    border: 2px solid #e1e5e9;
                                    border-radius: 12px;
                                    font-size: 15px;
                                    background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                ">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--dark); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Địa chỉ giao hàng *</label>
                                <textarea id="modalAddress" class="form-control" rows="2" required placeholder="Nhập địa chỉ giao hàng chi tiết" style="
                                    width: 100%;
                                    padding: 15px 18px;
                                    border: 2px solid #e1e5e9;
                                    border-radius: 12px;
                                    font-size: 15px;
                                    background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    resize: vertical;
                                    min-height: 80px;
                                "></textarea>
                            </div>
                            
                            <div class="section-title" style="margin: 25px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid var(--light);">
                                <h3 style="color: var(--primary); margin: 0;">
                                    <i class="fas fa-credit-card"></i> Phương thức thanh toán
                                </h3>
                            </div>
                            
                            <div class="payment-methods" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                                <div class="payment-method" data-method="cash" style="
                                    border: 2px solid #ddd;
                                    border-radius: 12px;
                                    padding: 20px 15px;
                                    text-align: center;
                                    cursor: pointer;
                                    transition: all 0.3s;
                                    background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    position: relative;
                                ">
                                    <i class="fas fa-money-bill-wave" style="font-size: 28px; margin-bottom: 12px; color: var(--primary);"></i>
                                    <span style="display: block; font-weight: 600; font-size: 15px;">Tiền mặt</span>
                                    <small style="display: block; color: #666; margin-top: 5px; font-size: 12px;">Thanh toán khi nhận hàng</small>
                                </div>
                                <div class="payment-method" data-method="banking" style="
                                    border: 2px solid #ddd;
                                    border-radius: 12px;
                                    padding: 20px 15px;
                                    text-align: center;
                                    cursor: pointer;
                                    transition: all 0.3s;
                                    background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    position: relative;
                                ">
                                    <i class="fas fa-university" style="font-size: 28px; margin-bottom: 12px; color: var(--primary);"></i>
                                    <span style="display: block; font-weight: 600; font-size: 15px;">Chuyển khoản</span>
                                    <small style="display: block; color: #666; margin-top: 5px; font-size: 12px;">Chuyển khoản ngân hàng</small>
                                </div>
                            </div>
                            
                            <!-- Cash Info -->
                            <div class="cash-info" id="modalCashInfo" style="
                                display: none;
                                background: #e8f5e8;
                                padding: 20px;
                                border-radius: 8px;
                                margin-bottom: 20px;
                                border-left: 4px solid #28a745;
                            ">
                                <h4 style="color: #28a745; margin-bottom: 15px;">
                                    <i class="fas fa-money-bill-wave"></i> Thanh toán tiền mặt
                                </h4>
                                <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #d4edda;">
                                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                        <i class="fas fa-truck" style="color: #28a745; margin-right: 10px;"></i>
                                        <span style="font-weight: 500;">Thanh toán khi nhận hàng (COD)</span>
                                    </div>
                                    <div style="font-size: 14px; color: #666; line-height: 1.6;">
                                        <p style="margin-bottom: 8px; font-weight: 500;">Ưu điểm:</p>
                                        <p style="margin-bottom: 12px; padding-left: 10px;">An tâm tuyệt đối, bạn chỉ thanh toán sau khi nhận được sản phẩm như mong đợi.</p>
                                        <p style="margin-bottom: 8px; font-weight: 500;">Quy trình:</p>
                                        <p style="margin-bottom: 6px; padding-left: 10px;">• Đặt hàng thành công mà không cần trả trước.</p>
                                        <p style="margin-bottom: 6px; padding-left: 10px;">• Nhân viên của chúng tôi sẽ giao hàng tận nơi.</p>
                                        <p style="margin-bottom: 6px; padding-left: 10px;">• Bạn vui lòng chuẩn bị số tiền mặt <strong id="cashAmount" style="color: var(--primary);">0 ₫</strong> để thanh toán khi nhận hàng.</p>
                                        <p style="margin-bottom: 0; padding-left: 10px;">• Phí giao hàng: Đã bao gồm (hoặc ghi rõ nếu có phí riêng).</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Banking Info -->
                            <div class="banking-info" id="modalBankingInfo" style="
                                display: none;
                                background: #f8f9fa;
                                padding: 20px;
                                border-radius: 8px;
                                margin-bottom: 20px;
                                border-left: 4px solid var(--primary);
                            ">
                                <h4 style="color: var(--primary); margin-bottom: 15px;">
                                    <i class="fas fa-university"></i> Thông tin chuyển khoản
                                </h4>
                                
                                <div class="form-group" style="margin-bottom: 15px;">
                                    <label>Chọn ngân hàng *</label>
                                    <div class="bank-list" id="modalBankList" style="
                                        display: grid;
                                        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                                        gap: 10px;
                                        margin-top: 10px;
                                    "></div>
                                </div>
                                
                                <div class="customer-bank-info" style="background: #fff; padding: 15px; border-radius: 6px; margin: 15px 0;">
                                    <h5 style="margin-bottom: 10px;">Thông tin tài khoản của bạn</h5>
                                    <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                                        <input type="text" id="modalCustomerAccountHolder" class="form-control" placeholder="Chủ tài khoản *" style="
                                            width: 100%;
                                            padding: 12px 15px;
                                            border: 2px solid #e1e5e9;
                                            border-radius: 10px;
                                            font-size: 14px;
                                            background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
                                        ">
                                        <input type="text" id="modalCustomerAccountNumber" class="form-control" placeholder="Số tài khoản *" style="
                                            width: 100%;
                                            padding: 12px 15px;
                                            border: 2px solid #e1e5e9;
                                            border-radius: 10px;
                                            font-size: 14px;
                                            background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
                                        ">
                                    </div>
                                    <input type="text" id="modalCustomerBranch" class="form-control" placeholder="Chi nhánh *" style="
                                        width: 100%;
                                        padding: 12px 15px;
                                        border: 2px solid #e1e5e9;
                                        border-radius: 10px;
                                        font-size: 14px;
                                        background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
                                        margin-bottom: 10px;
                                    ">
                                </div>
                                
                                <div class="shop-account-info" style="background: var(--light); padding: 15px; border-radius: 6px;">
                                    <h5 style="margin-bottom: 10px;">Chuyển khoản đến tài khoản shop</h5>
                                    <div style="font-size: 14px; line-height: 1.6;">
                                        <div><strong>Chủ TK:</strong> CÔNG TY TNHH MOCHA DELIGHT</div>
                                        <div><strong>Số TK:</strong> 1903 5678 9012 3456</div>
                                        <div><strong>Chi nhánh:</strong> Hồ Chí Minh</div>
                                        <div><strong>Số tiền:</strong> <span id="modalTransferAmount">0 ₫</span></div>
                                        <div><strong>Nội dung:</strong> <span id="modalTransferNote">MochaDelight [SĐT] [Số tiền]</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--dark); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Ghi chú đơn hàng</label>
                                <textarea id="modalNotes" class="form-control" rows="2" placeholder="Ghi chú cho đơn hàng (tùy chọn)" style="
                                    width: 100%;
                                    padding: 15px 18px;
                                    border: 2px solid #e1e5e9;
                                    border-radius: 12px;
                                    font-size: 15px;
                                    background: linear-gradient(145deg, #ffffff, #f8f9fa);
                                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                                    resize: vertical;
                                    min-height: 70px;
                                "></textarea>
                            </div>
                            
                            <button type="submit" class="btn" style="
                                width: 100%;
                                padding: 15px;
                                background-color: var(--primary);
                                color: white;
                                border: none;
                                border-radius: 8px;
                                font-size: 16px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: background-color 0.3s;
                            ">
                                <i class="fas fa-shopping-bag"></i> Hoàn tất đơn hàng
                            </button>
                        </form>
                    </div>
                    
                    <!-- Tóm tắt đơn hàng -->
                    <div class="order-summary" style="
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 8px;
                        height: fit-content;
                    ">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">
                            <i class="fas fa-receipt"></i> Đơn hàng của bạn
                        </h3>
                        
                        <div id="modalOrderItems"></div>
                        
                        <div class="order-totals" style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #ddd;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span>Tạm tính:</span>
                                <span id="modalSubtotal">0 ₫</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span>Phí vận chuyển:</span>
                                <span id="modalShippingFee">0 ₫</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span>Giảm giá:</span>
                                <span id="modalDiscount">0 ₫</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 600; color: var(--primary); margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                                <span>Tổng cộng:</span>
                                <span id="modalTotalAmount">0 ₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.modal = modal;
        this.setupEvents();
        return modal;
    }

    setupEvents() {
        // Đóng modal
        this.modal.querySelector('.close-checkout').addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        // Phương thức thanh toán
        this.modal.querySelectorAll('.payment-method').forEach(method => {
            method.addEventListener('click', (e) => {
                // Reset tất cả phương thức
                this.modal.querySelectorAll('.payment-method').forEach(m => {
                    m.classList.remove('selected');
                    m.style.borderColor = '#ddd';
                    m.style.backgroundColor = 'white';
                });
                
                // Chọn phương thức hiện tại
                method.classList.add('selected');
                method.style.borderColor = 'var(--primary)';
                method.style.backgroundColor = 'rgba(139, 69, 19, 0.05)';
                
                this.selectedPaymentMethod = method.getAttribute('data-method');
                console.log('Selected payment method:', this.selectedPaymentMethod); // Debug
                
                const bankingInfo = this.modal.querySelector('#modalBankingInfo');
                const cashInfo = this.modal.querySelector('#modalCashInfo');
                
                if (this.selectedPaymentMethod === 'banking') {
                    bankingInfo.style.display = 'block';
                    cashInfo.style.display = 'none';
                    this.populateBankList();
                    // Enable required cho banking inputs
                    this.setBankingInputsRequired(true);
                    console.log('Banking info displayed'); // Debug
                } else if (this.selectedPaymentMethod === 'cash') {
                    bankingInfo.style.display = 'none';
                    cashInfo.style.display = 'block';
                    this.selectedBank = null;
                    // Disable required cho banking inputs
                    this.setBankingInputsRequired(false);
                    this.updateCashAmount();
                    console.log('Cash info displayed'); // Debug
                } else {
                    bankingInfo.style.display = 'none';
                    cashInfo.style.display = 'none';
                    this.selectedBank = null;
                    this.setBankingInputsRequired(false);
                }
            });
        });

        // Form submit
        this.modal.querySelector('#checkoutModalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });

        // Cập nhật nội dung chuyển khoản khi nhập SĐT
        this.modal.querySelector('#modalPhone').addEventListener('input', () => {
            this.updateTransferNote();
        });
        
        // Thêm hiệu ứng cho các input
        this.setupInputEffects();
    }
    
    setupInputEffects() {
        const inputs = this.modal.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Focus effect
            input.addEventListener('focus', () => {
                input.style.borderColor = 'var(--primary)';
                input.style.background = '#ffffff';
                input.style.boxShadow = '0 0 0 4px rgba(139, 69, 19, 0.1), 0 4px 20px rgba(139, 69, 19, 0.15)';
                input.style.transform = 'translateY(-2px)';
            });
            
            // Blur effect
            input.addEventListener('blur', () => {
                input.style.borderColor = '#e1e5e9';
                input.style.background = 'linear-gradient(145deg, #ffffff, #f8f9fa)';
                input.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                input.style.transform = 'translateY(0)';
            });
            
            // Hover effect
            input.addEventListener('mouseenter', () => {
                if (document.activeElement !== input) {
                    input.style.borderColor = 'var(--accent)';
                    input.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }
            });
            
            input.addEventListener('mouseleave', () => {
                if (document.activeElement !== input) {
                    input.style.borderColor = '#e1e5e9';
                    input.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                }
            });
        });
    }

    populateBankList() {
        const bankList = this.modal.querySelector('#modalBankList');
        bankList.innerHTML = '';
        
        this.banks.forEach(bank => {
            const bankOption = document.createElement('div');
            bankOption.className = 'bank-option';
            bankOption.style.cssText = `
                display: flex;
                align-items: center;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 12px;
            `;
            bankOption.innerHTML = `
                <div style="
                    width: 25px;
                    height: 25px;
                    margin-right: 8px;
                    background: #e9ecef;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 10px;
                    color: var(--primary);
                ">${bank.shortName}</div>
                <div style="font-weight: 500;">${bank.name}</div>
            `;
            
            bankOption.addEventListener('click', () => {
                this.modal.querySelectorAll('.bank-option').forEach(opt => {
                    opt.style.borderColor = '#ddd';
                    opt.style.backgroundColor = 'white';
                });
                bankOption.style.borderColor = 'var(--primary)';
                bankOption.style.backgroundColor = 'rgba(139, 69, 19, 0.05)';
                this.selectedBank = bank;
                console.log('Selected bank:', bank.name); // Debug
            });
            
            bankList.appendChild(bankOption);
        });
    }

    updateTransferNote() {
        const phone = this.modal.querySelector('#modalPhone').value || 'SĐT';
        const totalAmount = this.modal.querySelector('#modalTotalAmount').textContent;
        const transferNote = this.modal.querySelector('#modalTransferNote');
        
        if (totalAmount !== '0 ₫') {
            const note = `MochaDelight ${phone} ${totalAmount.replace(/\s/g, '')}`;
            transferNote.textContent = note;
        }
    }
    
    updateCashAmount() {
        const totalAmount = this.modal.querySelector('#modalTotalAmount').textContent;
        const cashAmount = this.modal.querySelector('#cashAmount');
        
        if (cashAmount && totalAmount !== '0 ₫') {
            cashAmount.textContent = totalAmount;
        }
    }
    
    setBankingInputsRequired(required) {
        const bankingInputs = [
            '#modalCustomerAccountHolder',
            '#modalCustomerAccountNumber', 
            '#modalCustomerBranch'
        ];
        
        bankingInputs.forEach(selector => {
            const input = this.modal.querySelector(selector);
            if (input) {
                if (required) {
                    input.setAttribute('required', '');
                } else {
                    input.removeAttribute('required');
                }
            }
        });
    }
    
    showSuccessModal(orderCode) {
        const successModal = document.createElement('div');
        successModal.className = 'success-modal';
        successModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        `;
        
        const totalAmount = this.modal.querySelector('#modalTotalAmount').textContent;
        
        let contentHTML = '';
        
        if (this.selectedPaymentMethod === 'banking') {
            const transferNote = this.modal.querySelector('#modalTransferNote').textContent;
            contentHTML = `
                <div class="success-content" style="
                    background: white;
                    border-radius: 16px;
                    padding: 40px;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    position: relative;
                    animation: slideUp 0.4s ease;
                ">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #28a745, #20c997);
                        border-radius: 50%;
                        margin: 0 auto 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: checkmark 0.6s ease 0.2s both;
                    ">
                        <i class="fas fa-check" style="color: white; font-size: 32px;"></i>
                    </div>
                    
                    <h2 style="color: #28a745; margin-bottom: 15px; font-size: 24px;">
                        Đặt hàng thành công!
                    </h2>
                    
                    <div style="
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 12px;
                        margin: 20px 0;
                        border-left: 4px solid var(--primary);
                    ">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="font-weight: 500;">Mã đơn hàng:</span>
                            <span style="font-weight: 600; color: var(--primary);">${orderCode}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="font-weight: 500;">Tổng tiền:</span>
                            <span style="font-weight: 600; color: var(--primary);">${totalAmount}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 500;">Phương thức:</span>
                            <span style="font-weight: 600; color: #007bff;">Chuyển khoản</span>
                        </div>
                    </div>
                    
                    <div style="
                        background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
                        padding: 20px;
                        border-radius: 12px;
                        margin: 20px 0;
                        border: 1px solid #e1e5e9;
                    ">
                        <h4 style="color: #1976d2; margin-bottom: 15px; display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-university" style="margin-right: 8px;"></i>
                            Thông tin chuyển khoản
                        </h4>
                        <div style="text-align: left; font-size: 14px; line-height: 1.8;">
                            <div style="margin-bottom: 8px;">
                                <strong>Ngân hàng:</strong> ${this.selectedBank.name}
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Số tài khoản:</strong> 
                                <span style="background: #fff; padding: 4px 8px; border-radius: 4px; font-family: monospace;">1903 5678 9012 3456</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Chủ tài khoản:</strong> CÔNG TY TNHH MOCHA DELIGHT
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Số tiền:</strong> 
                                <span style="background: #fff3cd; padding: 4px 8px; border-radius: 4px; color: #856404; font-weight: 600;">${totalAmount}</span>
                            </div>
                            <div>
                                <strong>Nội dung CK:</strong> 
                                <span style="background: #d1ecf1; padding: 4px 8px; border-radius: 4px; color: #0c5460; font-family: monospace; font-size: 13px;">${transferNote}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="
                        background: #fff3cd;
                        border: 1px solid #ffeaa7;
                        border-radius: 8px;
                        padding: 15px;
                        margin: 20px 0;
                        color: #856404;
                    ">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        <strong>Lưu ý:</strong> Sau khi chuyển khoản, vui lòng liên hệ <strong>0123.456.789</strong> để xác nhận đơn hàng.
                    </div>
                    
                    <button onclick="this.parentElement.parentElement.remove(); checkoutModal.clearCartAndClose();" style="
                        background: linear-gradient(135deg, var(--primary), var(--secondary));
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                        box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(139, 69, 19, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(139, 69, 19, 0.3)';">
                        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                        Đã hiểu
                    </button>
                </div>
            `;
        } else {
            contentHTML = `
                <div class="success-content" style="
                    background: white;
                    border-radius: 16px;
                    padding: 40px;
                    max-width: 450px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    position: relative;
                    animation: slideUp 0.4s ease;
                ">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #28a745, #20c997);
                        border-radius: 50%;
                        margin: 0 auto 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: checkmark 0.6s ease 0.2s both;
                    ">
                        <i class="fas fa-check" style="color: white; font-size: 32px;"></i>
                    </div>
                    
                    <h2 style="color: #28a745; margin-bottom: 15px; font-size: 24px;">
                        Đặt hàng thành công!
                    </h2>
                    
                    <div style="
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 12px;
                        margin: 20px 0;
                        border-left: 4px solid var(--primary);
                    ">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="font-weight: 500;">Mã đơn hàng:</span>
                            <span style="font-weight: 600; color: var(--primary);">${orderCode}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="font-weight: 500;">Tổng tiền:</span>
                            <span style="font-weight: 600; color: var(--primary);">${totalAmount}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 500;">Phương thức:</span>
                            <span style="font-weight: 600; color: #28a745;">Tiền mặt (COD)</span>
                        </div>
                    </div>
                    
                    <div style="
                        background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
                        padding: 20px;
                        border-radius: 12px;
                        margin: 20px 0;
                        border: 1px solid #d4edda;
                    ">
                        <h4 style="color: #28a745; margin-bottom: 15px; display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-truck" style="margin-right: 8px;"></i>
                            Thông tin giao hàng
                        </h4>
                        <div style="text-align: left; font-size: 14px; line-height: 1.8; color: #155724;">
                            <div style="margin-bottom: 12px;">
                                <strong>Ưu điểm:</strong> An tâm tuyệt đối, bạn chỉ thanh toán sau khi nhận được sản phẩm như mong đợi.
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Quy trình:</strong>
                            </div>
                            <div style="margin-bottom: 8px; padding-left: 15px;">
                                • Đặt hàng thành công mà không cần trả trước.
                            </div>
                            <div style="margin-bottom: 8px; padding-left: 15px;">
                                • Nhân viên của chúng tôi sẽ giao hàng tận nơi.
                            </div>
                            <div style="margin-bottom: 8px; padding-left: 15px;">
                                • Bạn vui lòng chuẩn bị số tiền mặt <strong>${totalAmount}</strong> để thanh toán khi nhận hàng.
                            </div>
                            <div style="padding-left: 15px;">
                                • Phí giao hàng: Đã bao gồm (hoặc ghi rõ nếu có phí riêng).
                            </div>
                        </div>
                    </div>
                    
                    <div style="
                        background: #d1ecf1;
                        border: 1px solid #bee5eb;
                        border-radius: 8px;
                        padding: 15px;
                        margin: 20px 0;
                        color: #0c5460;
                    ">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
                    </div>
                    
                    <button onclick="this.parentElement.parentElement.remove(); checkoutModal.clearCartAndClose();" style="
                        background: linear-gradient(135deg, #28a745, #20c997);
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(40, 167, 69, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(40, 167, 69, 0.3)';">
                        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                        Đã hiểu
                    </button>
                </div>
            `;
        }
        
        successModal.innerHTML = contentHTML;
        
        // Thêm CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            @keyframes checkmark {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(successModal);
    }
    
    clearCartAndClose() {
        // Xóa giỏ hàng và đóng modal
        localStorage.removeItem('cart');
        cartManager.cart = [];
        cartManager.updateCart();
        this.close();
    }

    show(cart) {
        this.cart = cart;
        if (!this.modal) {
            this.createModal();
        }
        
        this.updateOrderSummary();
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    updateOrderSummary() {
        const orderItems = this.modal.querySelector('#modalOrderItems');
        const subtotalElement = this.modal.querySelector('#modalSubtotal');
        const shippingFeeElement = this.modal.querySelector('#modalShippingFee');
        const discountElement = this.modal.querySelector('#modalDiscount');
        const totalAmountElement = this.modal.querySelector('#modalTotalAmount');
        const transferAmountElement = this.modal.querySelector('#modalTransferAmount');
        
        if (this.cart.length === 0) {
            orderItems.innerHTML = '<p style="text-align: center; color: #666;">Giỏ hàng trống</p>';
            return;
        }
        
        // Tính tổng tiền
        let subtotal = 0;
        this.cart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        
        const shippingFee = subtotal > 200000 ? 0 : 30000;
        const discount = subtotal > 150000 ? subtotal * 0.1 : 0;
        const total = subtotal + shippingFee - discount;
        
        // Hiển thị sản phẩm
        orderItems.innerHTML = '';
        this.cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.style.cssText = `
                display: flex;
                align-items: center;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            `;
            orderItem.innerHTML = `
                <div style="
                    width: 40px;
                    height: 40px;
                    border-radius: 6px;
                    overflow: hidden;
                    margin-right: 10px;
                ">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 14px; margin-bottom: 2px;">${item.name}</div>
                    <div style="color: var(--primary); font-weight: 600; font-size: 13px;">${Utils.formatPrice(item.price)}</div>
                    <div style="color: #666; font-size: 12px;">SL: ${item.quantity}</div>
                </div>
            `;
            orderItems.appendChild(orderItem);
        });
        
        // Cập nhật tổng tiền
        subtotalElement.textContent = Utils.formatPrice(subtotal);
        shippingFeeElement.textContent = Utils.formatPrice(shippingFee);
        discountElement.textContent = Utils.formatPrice(discount);
        totalAmountElement.textContent = Utils.formatPrice(total);
        transferAmountElement.textContent = Utils.formatPrice(total);
        
        this.updateTransferNote();
        this.updateCashAmount();
    }

    processOrder() {
        console.log('Starting order process...'); // Debug
        
        // Kiểm tra thông tin cơ bản
        const fullName = this.modal.querySelector('#modalFullName').value.trim();
        const phone = this.modal.querySelector('#modalPhone').value.trim();
        const email = this.modal.querySelector('#modalEmail').value.trim();
        const address = this.modal.querySelector('#modalAddress').value.trim();
        
        console.log('Customer info:', { fullName, phone, email, address }); // Debug
        
        if (!fullName || !phone || !email || !address) {
            alert('Vui lòng điền đầy đủ thông tin khách hàng!');
            return;
        }
        
        console.log('Selected payment method:', this.selectedPaymentMethod); // Debug
        
        if (!this.selectedPaymentMethod) {
            alert('Vui lòng chọn phương thức thanh toán!');
            return;
        }
        
        // Chỉ kiểm tra thông tin ngân hàng khi chọn phương thức chuyển khoản
        if (this.selectedPaymentMethod === 'banking') {
            if (!this.selectedBank) {
                alert('Vui lòng chọn ngân hàng!');
                return;
            }
            
            const customerAccountHolder = this.modal.querySelector('#modalCustomerAccountHolder').value.trim();
            const customerAccountNumber = this.modal.querySelector('#modalCustomerAccountNumber').value.trim();
            const customerBranch = this.modal.querySelector('#modalCustomerBranch').value.trim();
            
            if (!customerAccountHolder || !customerAccountNumber || !customerBranch) {
                alert('Vui lòng điền đầy đủ thông tin tài khoản của bạn!');
                return;
            }
        }
        
        console.log('Processing order with payment method:', this.selectedPaymentMethod); // Debug
        
        // Hiển thị modal thông báo thành công
        const orderCode = 'MD' + Date.now().toString().slice(-6);
        this.showSuccessModal(orderCode);
        
        // Sẽ xóa giỏ hàng và đóng modal sau khi người dùng đóng success modal
    }
}

// Khởi tạo checkout modal
const checkoutModal = new CheckoutModal();