import React from 'react';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Sparkles, 
  Clock, 
  Phone 
} from 'lucide-react';

export default function LogisticsTrackingScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('batch_qr')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Tối ưu hóa logistics
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Savings Green Box in Figma */}
        <div style={{
          background: '#EAF5EC',
          border: '1px solid #C3E6CB',
          borderRadius: '12px',
          padding: '12px 14px',
          color: '#155724',
          marginBottom: '14px'
        }}>
          <div style={{ fontSize: '13px', fontWeight: '800', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} />
            Tiết kiệm 18.5% chi phí vận chuyển
          </div>
          <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
            Thuật toán ghép chuyến đa điểm giúp giảm 38% số chuyến xe chạy rỗng và cắt giảm 64.8 kg khí CO₂.
          </div>
        </div>

        {/* Vehicle Card */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
              Xe tải 68C-148.92
            </span>
            <span className="badge-amber">Đang vận chuyển</span>
          </div>

          <div style={{ fontSize: '12px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div>Tài xế: <strong>Lê Văn Hoàng</strong> (0918.776.321)</div>
            <div>Loại xe: <strong>Đầu kéo rơ-moóc thùng cao 40ft (chở rơm cuộn)</strong></div>
            <div>Tải trọng thực: <strong>50 tấn / 50 tấn</strong> (Đã ghép 2 bãi gom)</div>
          </div>
        </div>

        {/* Route Stops */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
            Lộ trình ghép điểm:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', paddingLeft: '20px' }}>
            <div style={{
              position: 'absolute',
              left: '6px',
              top: '6px',
              bottom: '12px',
              width: '2px',
              background: '#155724'
            }} />

            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>
                Điểm 1: HTX Tân Bình (Thoại Sơn)
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>
                Đã bốc 30 tấn rơm cuộn đã quét QR IoT
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>
                Điểm 2: Cơ sở Út Triệu (Hòn Đất)
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>
                Đã ghép thêm 20 tấn rơm cuộn
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#155724' }}>
                Đích: Nhà máy Điện Sinh khối Cần Thơ
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>
                Dự kiến cập cảng tiếp nhận lúc 12:00
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={() => onNavigate('weighbridge')} className="figma-btn-primary">
            Đến trạm cân & Giao hàng →
          </button>
        </div>

      </div>

    </div>
  );
}
