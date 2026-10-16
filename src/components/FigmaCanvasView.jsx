import React, { useState } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  Sparkles,
  Smartphone
} from 'lucide-react';

export default function FigmaCanvasView({ onSelectScreen, currentScreen }) {
  const [zoom, setZoom] = useState(1);

  const screens = [
    { id: 'welcome', title: '1. Chào mừng & Chọn vai trò', stage: 'Onboarding', tag: 'Welcome' },
    { id: 'role_select', title: '2. Phân loại đối tượng', stage: 'Onboarding', tag: 'Role' },
    { id: 'register_buyer', title: '3. Đăng ký Doanh nghiệp', stage: 'Onboarding', tag: 'Buyer' },
    { id: 'register_agent', title: '4. Đăng ký Đại lý/HTX', stage: 'Onboarding', tag: 'Agent' },
    { id: 'verification_pending', title: '5. Xác nhận & Sandbox', stage: 'Onboarding', tag: 'Verify' },
    { id: 'buyer_home', title: '6. Trang chủ & Bảng giá', stage: 'Nhu cầu', tag: 'Dashboard' },
    { id: 'create_request', title: '7. Tạo yêu cầu thu mua', stage: 'Nhu cầu', tag: 'Create Req' },
    { id: 'matching', title: '8. Ghép nối AI & Lộ trình', stage: 'Logistics', tag: 'AI Match' },
    { id: 'agent_home', title: '9. Trang chủ Đại lý (Nhận đơn mở)', stage: 'Đại lý', tag: 'Agent Home' },
    { id: 'agent_order_detail', title: '10. Chi tiết đơn & Cam kết đáp ứng', stage: 'Đại lý', tag: 'Commit' },
    { id: 'agent_commit_success', title: '11. Cam kết đã xác nhận & Lịch xe', stage: 'Đại lý', tag: 'Confirmed' },
    { id: 'nir_testing', title: '12. Kiểm định độ ẩm thiết bị IoT', stage: 'Kiểm định', tag: 'IoT Sensor' },
    { id: 'batch_qr', title: '13. Cấp mã Batch ID & Tem QR', stage: 'Truy xuất', tag: 'Batch QR' },
    { id: 'logistics_tracking', title: '14. Xe Doanh nghiệp / AgriLog đến bãi', stage: 'Vận chuyển', tag: 'Fleet GPS' },
    { id: 'weighbridge', title: '15. Cân điện tử & Định giá khô', stage: 'Nghiệm thu', tag: 'Weighbridge' },
    { id: 'escrow_settlement', title: '16. Quyết toán Escrow tự động', stage: 'Thanh toán', tag: 'Settlement' },
    { id: 'agent_completed_order', title: '17. Đại lý - Đóng đơn & Đã giải ngân', stage: 'Đại lý', tag: 'Settled' },
    { id: 'esg_report', title: '18. Báo cáo MRV Carbon & ESG', stage: 'Báo cáo', tag: 'ESG Report' },
    { id: 'account', title: '19. Quản lý tài khoản & Đăng xuất', stage: 'Tài khoản', tag: 'Account' }
  ];

  return (
    <div className="figma-canvas-view">
      {/* Top Floating Control Bar */}
      <div className="canvas-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '800', color: '#10B981' }}>
            <Layers size={18} /> SƠ ĐỒ TOÀN CẢNH LUỒNG PROTOTYPE AGRILOG
          </div>
          <span style={{ fontSize: '11px', color: '#9CA3AF' }}>
            (15 màn hình liên kết tương tác thời gian thực theo đúng Figma Prototype UI)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setZoom(Math.max(0.6, zoom - 0.1))}
            className="btn-secondary-nav"
            title="Thu nhỏ"
          >
            <ZoomOut size={15} />
          </button>
          <span style={{ fontSize: '12px', fontWeight: '700', minWidth: '45px', textAlign: 'center' }}>
            {Math.round(zoom * 100)}%
          </span>
          <button 
            onClick={() => setZoom(Math.min(1.4, zoom + 0.1))}
            className="btn-secondary-nav"
            title="Phóng to"
          >
            <ZoomIn size={15} />
          </button>
          <button 
            onClick={() => setZoom(1)}
            className="btn-secondary-nav"
            title="Mặc định 100%"
          >
            <Maximize2 size={15} />
          </button>
        </div>
      </div>

      {/* Screen Canvas Grid */}
      <div 
        className="flow-grid-container"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          transition: 'transform 0.15s ease'
        }}
      >
        {screens.map((scr, idx) => {
          const isCurrent = currentScreen === scr.id;
          return (
            <div 
              key={scr.id}
              onClick={() => onSelectScreen(scr.id)}
              className="flow-screen-card"
              style={{
                borderColor: isCurrent ? '#10B981' : 'rgba(255,255,255,0.15)',
                boxShadow: isCurrent ? '0 0 0 3px #10B981, 0 16px 36px rgba(16, 185, 129, 0.4)' : undefined
              }}
            >
              <div className="flow-card-header" style={{ background: isCurrent ? '#047857' : '#155724' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {scr.title}
                </span>
                <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>
                  {scr.tag}
                </span>
              </div>

              <div style={{
                padding: '20px 16px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF'
              }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#059669',
                    background: '#ECFDF5',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}>
                    Giai đoạn: {scr.stage}
                  </div>

                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>
                    {scr.title.split('. ')[1]}
                  </h3>

                  <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.4' }}>
                    {scr.id === 'welcome' && 'Trang khởi động giới thiệu sứ mệnh kinh tế tuần hoàn và 4 vai trò tác nhân.'}
                    {scr.id === 'role_select' && 'Lựa chọn Doanh nghiệp thu mua hoặc Đại lý/HTX, hỗ trợ chế độ Sandbox dùng thử.'}
                    {scr.id === 'register_buyer' && 'Biểu mẫu thông tin pháp lý doanh nghiệp, địa chỉ nhà máy tiếp nhận tại ĐBSCL.'}
                    {scr.id === 'register_agent' && 'Đại lý đăng ký bãi gom, công suất tháng và yêu cầu mạng lưới máy cuộn lưu động.'}
                    {scr.id === 'verification_pending' && 'Thông báo nhận hồ sơ, quy trình xác minh 3 bước minh bạch.'}
                    {scr.id === 'buyer_home' && 'Bảng điều khiển doanh nghiệp, chỉ số thị trường và giá tham chiếu sinh khối khô.'}
                    {scr.id === 'create_request' && 'Đăng nhu cầu thu mua, chọn loại phụ phẩm, khối lượng và tính toán dự toán tự động.'}
                    {scr.id === 'matching' && 'AI kết hợp đa nguồn cung và tối ưu tuyến vận chuyển 1 chuyến ghép.'}
                    {scr.id === 'agent_home' && 'Giao diện đại lý cam kết đơn hàng, đặt lịch máy cuộn rơm tăng tỷ trọng.'}
                    {scr.id === 'nir_testing' && 'Thiết bị IoT AgriLog đo độ ẩm tại nguồn, truyền Bluetooth/4G, dữ liệu chỉ thêm không sửa.'}
                    {scr.id === 'batch_qr' && 'Khởi tạo nhãn QR và Batch ID neo dữ liệu lên Hyperledger Fabric + Polygon.'}
                    {scr.id === 'logistics_tracking' && 'Giám sát hành trình xe tải 40ft, cảm biến nhiệt độ & độ ẩm thùng xe.'}
                    {scr.id === 'weighbridge' && 'Phiếu cân điện tử tại cổng nhà máy và áp dụng Thuật toán Định giá Sinh khối khô.'}
                    {scr.id === 'escrow_settlement' && 'Tài khoản Escrow giải ngân tự động, thu 3% phí sàn và thanh toán cho đại lý.'}
                    {scr.id === 'esg_report' && 'Xuất báo cáo phát thải CO2e chuẩn IPCC 2006 phục vụ kiểm toán ESG quốc tế.'}
                    {scr.id === 'account' && 'Xem thông tin doanh nghiệp, đại lý, điểm tín nhiệm, cài đặt và tính năng đăng xuất tài khoản.'}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #F3F4F6',
                  paddingTop: '12px',
                  marginTop: '12px'
                }}>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>Màn hình #{idx + 1}</span>
                  <button 
                    style={{
                      background: isCurrent ? '#10B981' : '#155724',
                      color: isCurrent ? '#064E3B' : 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Smartphone size={13} /> Chạy màn hình này
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
