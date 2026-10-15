# AgriLog – Nền Tảng Số Hóa Chuỗi Cung Ứng Phụ Phẩm Nông Nghiệp
> **Dự án dự thi VSIC 2026** · Đội thi: **Acrylic (Trường Đại học Ngân hàng TP.HCM)**  
> Bản mô phỏng tương tác liên kết hoàn chỉnh từ hệ thống thiết kế tĩnh Figma Prototype UI.

---

## 🌟 Tổng Quan Dự Án
AgriLog đóng vai trò là **Hệ điều hành số & Trọng tài chất lượng trung lập (Neutral Operating System & Quality Clearinghouse)** trong logistics và thương mại phụ phẩm sinh khối nông nghiệp (rơm rạ, trấu, bã mía, lõi ngô) tại khu vực Đồng bằng sông Cửu Long (ĐBSCL).

### 4 Đột Phá Cốt Lõi (USP):
1. **Kiểm định chất lượng sâu bằng đầu dò quang phổ cận hồng ngoại (NIR Spear Probe 1.2m)**: Đo 3 điểm (đáy, giữa, mặt trên) kết hợp nắp sapphire chống bụi và thuật toán bù nhiệt độ môi trường ngoài trời ĐBSCL.
2. **Thuật toán định giá theo Sinh khối khô (Dry Biomass Pricing Algorithm)**: Bóc tách lượng nước (30-50%), doanh nghiệp thanh toán đúng sản lượng chất khô thực tế theo quy chuẩn.
3. **AI Logistics Engine & Mạng lưới máy cuộn lưu động**: Nén mật độ rơm từ 40 kg/m³ lên 195 kg/m³, tối ưu lộ trình ghép xe đa điểm giúp giảm 38% số xe chạy rỗng và tiết kiệm 18.5% chi phí cước.
4. **Hộ chiếu số Batch ID & Báo cáo Carbon MRV**: Gắn nhãn QR mã hóa neo trên Blockchain (Hyperledger Fabric + Polygon), hỗ trợ chứng nhận giảm phát thải theo chuẩn IPCC 2006 (0.119 tấn CO2e/tấn rơm không đốt), sẵn sàng phục vụ báo cáo ESG, EUDR và CBAM.

---

## 📱 Hệ Thống Màn Hình Prototype (15 Màn hình liên kết tương tác)

| STT | Màn hình | Vai trò & Mục đích | Tương tác chính |
|:---:|:---|:---|:---|
| **1** | **Chào mừng & Khởi động** (`welcome`) | Giới thiệu sứ mệnh, logo nhận diện & 4 vai trò tham gia | Chọn nhanh vai trò Doanh nghiệp / Đại lý / KTV NIR / Logistics |
| **2** | **Phân vai đăng ký** (`role_select`) | Bước 1/3: Chọn Doanh nghiệp mua hoặc Đại lý thu gom | Hỗ trợ nút "Bỏ qua xác minh (Chế độ Sandbox)" |
| **3** | **Đăng ký Doanh nghiệp** (`register_buyer`) | Bước 2/3: Khai báo pháp nhân, MST, lĩnh vực (Sinh khối, Phân bón, VLXD) | Nhập địa chỉ nhà máy tiếp nhận tại ĐBSCL |
| **4** | **Đăng ký Đại lý/HTX** (`register_agent`) | Khai báo điểm tập kết kho bãi, năng lực tháng, số máy cuộn rơm | Tùy chọn yêu cầu hỗ trợ mạng lưới máy cuộn lưu động |
| **5** | **Xác nhận hồ sơ** (`verification_pending`) | Quy trình 3 bước minh bạch (Gửi hồ sơ → Xác minh KYB → Kích hoạt) | Bắt đầu trải nghiệm ngay |
| **6** | **Trang chủ Doanh nghiệp** (`buyer_home`) | Dashboard tổng hợp, ticker giá tham chiếu thị trường ĐBSCL | Lọc đơn theo trạng thái (Đang tìm nguồn, Đo NIR, Vận chuyển, Đối soát) |
| **7** | **Tạo yêu cầu thu mua** (`create_request`) | Đăng nhu cầu: Chọn phụ phẩm, khối lượng, trần độ ẩm, hạn giao | Tự động tính toán dự toán ngân sách & phí sàn 3% GMV |
| **8** | **Khớp lệnh AI Logistics** (`matching`) | Ghép nối 2 đại lý lân cận để gom đủ tải trọng 1 chuyến xe 40ft | Bản đồ lộ trình đa điểm, biểu đồ giảm 38% xe rỗng |
| **9** | **Trang chủ Đại lý/HTX** (`agent_home`) | HTX nhận đơn hàng ghép, xác nhận cam kết nguồn cung | Đặt lịch máy cuộn rơm Yanmar nén 200kg/m³ |
| **10** | **Trạm đo kiểm phổ NIR** (`nir_testing`) | Mô phỏng cắm mũi giáo Spear Probe 3 điểm (15s/điểm) | Cảm biến GPS lock, AI phát hiện dị thường phổ, bù nhiệt độ |
| **11** | **Mã Batch ID & QR** (`batch_qr`) | Cấp nhãn QR động, lưu vết TxHash trên Blockchain | Xem nhãn in chịu nhiệt, mô phỏng quét mã QR thực tế |
| **12** | **Điều phối & Giám sát IoT** (`logistics_tracking`) | Theo dõi xe 68C-148.92 qua 4 điểm dừng | Giám sát IoT nhiệt độ (31.8°C) và độ ẩm thùng xe (14.1%) |
| **13** | **Cân điện tử & Nghiệm thu** (`weighbridge`) | Phiếu cân điện tử (Gross - Tare = 50 tấn Net) tại cổng nhà máy | Áp dụng công thức Sinh khối khô, ký biên bản điện tử |
| **14** | **Đối soát & Escrow** (`escrow_settlement`) | Hợp đồng Escrow giải ngân tự động, phân bổ minh bạch dòng tiền | Hiệu ứng pháo hoa chúc mừng, xuất chứng từ đối soát |
| **15** | **Báo cáo Carbon & ESG** (`esg_report`) | Chứng nhận cắt giảm 5.95 tấn CO2e chuẩn IPCC 2006 | Xuất báo cáo kiểm toán phục vụ thị trường xuất khẩu |

---

## 💻 4 Chế Độ Trải Nghiệm Trong Ứng Dụng
1. 📱 **Ứng dụng Mô phỏng (Mobile Simulator)**: Giao diện chuẩn iPhone 16 Pro với Dynamic Island, thanh trạng thái, điều hướng mượt mà và thanh hướng dẫn 8 bước bên trái.
2. 🗺️ **Sơ đồ Luồng Figma (Figma Canvas View)**: Toàn bộ 15 màn hình được xếp trên khung canvas trực quan, có thể phóng to, thu nhỏ và nhấp chọn màn hình bất kỳ để chuyển nhanh.
3. 🌐 **Cổng Quét QR Công Khai (Public Traceability Web Portal)**: Trang web xác thực nguồn gốc mà đối tác hoặc cơ quan kiểm toán thấy khi quét mã QR trên từng kiện rơm rạ.
4. 🏆 **VSIC Pitch Deck Companion**: Bảng số liệu kinh doanh dành cho Ban Giám Khảo & Nhà Đầu Tư (TAM 45.040 tỷ, SAM 15.764 tỷ, SOM, P&L 5 năm, điểm hòa vốn Năm 2, 5 dòng doanh thu).

---

## 🚀 Hướng Dẫn Chạy Dự Án
```bash
# 1. Cài đặt thư viện (đã cài sẵn)
npm install

# 2. Khởi động môi trường phát triển
npm run dev

# Ứng dụng chạy trực tiếp tại: http://localhost:3000/
```
