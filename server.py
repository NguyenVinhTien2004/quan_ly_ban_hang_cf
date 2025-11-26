#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import socket

# Cấu hình
PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Thêm CORS headers để cho phép truy cập từ các domain khác
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def get_local_ip():
    """Lấy địa chỉ IP local của máy"""
    try:
        # Kết nối đến một địa chỉ bên ngoài để lấy IP local
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

if __name__ == "__main__":
    # Lấy IP address
    local_ip = get_local_ip()
    
    # Tạo server
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("🚀 MOCHA DELIGHT SERVER ĐANG CHẠY")
        print("=" * 60)
        print(f"📱 Truy cập từ máy này:     http://localhost:{PORT}")
        print(f"🌐 Truy cập từ máy khác:   http://{local_ip}:{PORT}")
        print("=" * 60)
        print("📋 Hướng dẫn:")
        print("   • Máy khác cùng WiFi có thể truy cập bằng IP trên")
        print("   • Nhấn Ctrl+C để dừng server")
        print("=" * 60)
        
        try:
            # Mở browser tự động
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Chạy server
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server đã dừng!")