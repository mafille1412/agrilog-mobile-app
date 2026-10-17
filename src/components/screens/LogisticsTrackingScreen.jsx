import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Building2, 
  Sparkles, 
  Phone, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function LogisticsTrackingScreen({ onNavigate }) {
  // 2 Lựa chọn điều phối xe của Doanh nghiệp theo yêu cầu:
  // 1. 'enterprise_fleet': Doanh nghiệp tự điều phối đội xe riêng
  // 2. 'agrilog_assisted': Nhờ sự hỗ trợ từ phía AgriLog Logistics (ghép chuyến đa điểm)
  const [dispatchOption, setDispatchOption] = useState('enterprise_fleet');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('batch_qr')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Điều phối vận chuyển
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Notice: Fleet Dispatch Belongs to Enterprise */}
        <div style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '12px',
          padding: '12px 14px',
          fontSize: '11.5px',
          color: '#1E40AF',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          lineHeight: '1.45'
        }}>
          <Building2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Trách nhiệm điều phối:</strong> Việc điều phối xe thuộc về <strong>Doanh nghiệp mua</strong>. Doanh nghiệp có thể tự điều phối xe riêng hoặc nhờ AgriLog hỗ trợ ghép chuyến.
          </div>
        </div>

        {/* 2 Dispatch Options Tabs */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '12px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>
            Phương thức điều phối của Doanh nghiệp:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button
              onClick={() => setDispatchOption('enterprise_fleet')}
              style={{
                padding: '10px 8px',
                borderRadius: '10px',
                border: dispatchOption === 'enterprise_fleet' ? '2px solid #155724' : '1px solid #E5E7EB',
                background: dispatchOption === 'enterprise_fleet' ? '#F0FDF4' : '#FFFFFF',
                color: dispatchOption === 'enterprise_fleet' ? '#155724' : '#4B5563',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'center',
                lineHeight: '1.3'
              }}
            >
              <div style={{ fontSize: '16px', marginBottom: '2px' }}>🏢</div>
              Lựa chọn 1:<br /><strong>Xe riêng Doanh nghiệp</strong>
            </button>

            <button
              onClick={() => setDispatchOption('agrilog_assisted')}
              style={{
                padding: '10px 8px',
                borderRadius: '10px',
                border: dispatchOption === 'agrilog_assisted' ? '2px solid #155724' : '1px solid #E5E7EB',
                background: dispatchOption === 'agrilog_assisted' ? '#F0FDF4' : '#FFFFFF',
                color: dispatchOption === 'agrilog_assisted' ? '#155724' : '#4B5563',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'center',
                lineHeight: '1.3'
              }}
            >
              <div style={{ fontSize: '16px', marginBottom: '2px' }}>🌱</div>
              Lựa chọn 2:<br /><strong>AgriLog hỗ trợ ghép xe</strong>
            </button>
          </div>
        </div>

        {/* OPTION 1 CONTENT: Enterprise Own Fleet */}
        {dispatchOption === 'enterprise_fleet' && (
          <div>
            {/* Info badge */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                  Đội xe Nhà máy Điện Sinh khối Cần Thơ
                </span>
                <span style={{
                  background: '#ECFDF5',
                  color: '#047857',
                  border: '1px solid #A7F3D0',
                  fontSize: '10px',
                  fontWeight: '800',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>
                  Xe nội bộ
                </span>
              </div>

              <div style={{ fontSize: '11.5px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div>• Biển số xe: <strong>67C-129.45</strong> (Xe tải 15 tấn thùng chuyên dụng)</div>
                <div>• Tài xế phụ trách: <strong>Nguyễn Văn Bé</strong> (0918.456.789)</div>
                <div>• Giờ xuất phát từ nhà máy: <strong>07:00 · 16/10/2026</strong></div>
                <div>• Dự kiến tới bãi bốc hàng: <strong>08:30 · 16/10/2026</strong></div>
                <div>• Tải trọng nhận hàng: <strong>15.0 tấn rơm cuộn</strong></div>
              </div>
            </div>

            {/* Direct Route Card */}
            <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
              <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
                Lộ trình xe Doanh nghiệp điều phối:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', paddingLeft: '20px' }}>
                <div style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  bottom: '12px',
                  width: '2px',
                  background: '#155724'
                }} />

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#111827' }}>
                    1. Xuất bến: Nhà máy Cần Thơ (KCN Trà Nóc)
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Xe khởi hành lúc 07:00</div>
                </div>

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#155724' }}>
                    2. Điểm lấy hàng: Kho bãi HTX Tân Bình (Thoại Sơn)
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#047857' }}>
                    Xe đang trên QL91 (Cách điểm gom 12 km - dự kiến tới 08:30)
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#111827' }}>
                    3. Về trạm cân: Cổng số 2 · Nhà máy Điện Sinh khối
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Cân tải trọng tươi & nghiệm thu độ ẩm</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OPTION 2 CONTENT: AgriLog Assisted Fleet */}
        {dispatchOption === 'agrilog_assisted' && (
          <div>
            {/* Savings Green Box */}
            <div style={{
              background: '#EAF5EC',
              border: '1px solid #C3E6CB',
              borderRadius: '12px',
              padding: '12px 14px',
              color: '#155724',
              marginBottom: '12px'
            }}>
              <div style={{ fontSize: '12.5px', fontWeight: '800', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} />
                AgriLog Logistics hỗ trợ ghép chuyến đa điểm
              </div>
              <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
                Thuật toán AgriLog tự động ghép nối xe tải 50 tấn gom chung 2 HTX lân cận, giúp doanh nghiệp tiết kiệm 18.5% cước phí và giảm 64.8 kg CO₂.
              </div>
            </div>

            {/* Partner Truck Info */}
            <div className="figma-card" style={{ marginBottom: '12px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                  Xe đối tác AgriLog: 68C-148.92
                </span>
                <span className="badge-amber">Đang gom hàng</span>
              </div>

              <div style={{ fontSize: '11.5px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>• Tài xế đối tác: <strong>Lê Văn Hoàng</strong> (0918.776.321)</div>
                <div>• Loại phương tiện: <strong>Đầu kéo rơ-moóc thùng cao 40ft</strong></div>
                <div>• Tải trọng thực: <strong>50 tấn / 50 tấn</strong> (Đã ghép 2 bãi gom)</div>
              </div>
            </div>

            {/* Multi-point Route */}
            <div className="figma-card" style={{ marginBottom: '14px', padding: '12px 14px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
                Lộ trình ghép đa điểm:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', paddingLeft: '20px' }}>
                <div style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  bottom: '12px',
                  width: '2px',
                  background: '#155724'
                }} />

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#111827' }}>Điểm 1: HTX Tân Bình (Thoại Sơn)</div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Đã bốc 30 tấn rơm cuộn đã quét QR</div>
                </div>

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#111827' }}>Điểm 2: Cơ sở Út Triệu (Hòn Đất)</div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Đã ghép thêm 20 tấn rơm cuộn</div>
                </div>

                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#155724' }}>Đích: Nhà máy Điện Sinh khối Cần Thơ</div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Dự kiến cập cảng tiếp nhận lúc 12:00</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
          <button onClick={() => onNavigate('weighbridge')} className="figma-btn-primary">
            Đến trạm cân & Nghiệm thu tại nhà máy →
          </button>
        </div>

      </div>

    </div>
  );
}
