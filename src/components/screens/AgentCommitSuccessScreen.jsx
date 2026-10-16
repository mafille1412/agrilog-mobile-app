import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  QrCode, 
  Truck, 
  Cpu, 
  ShieldCheck, 
  LayoutGrid, 
  ClipboardList, 
  User 
} from 'lucide-react';

export default function AgentCommitSuccessScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Cam kết cung ứng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body (Exact Figma Screen 9) */}
      <div className="figma-screen-viewport" style={{ padding: '24px 16px', textAlign: 'center' }}>
        
        {/* Big Check Circle */}
        <div style={{ marginTop: '10px', marginBottom: '18px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px',
            boxShadow: '0 8px 20px rgba(21, 87, 36, 0.25)'
          }}>
            <CheckCircle2 size={38} />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
            Cam kết đã được xác nhận
          </h2>
          <p style={{ fontSize: '13px', color: '#6B7280', maxWidth: '300px', margin: '0 auto', lineHeight: '1.4' }}>
            Đơn hàng đã được ghi nhận vào hệ thống điều phối ghép chuyến tự động của AgriLog.
          </p>
        </div>

        {/* Commitment Summary Card (Figma Screen 9) */}
        <div className="figma-card" style={{ textAlign: 'left', padding: '16px', marginBottom: '14px' }}>
          <div style={{ fontSize: '12px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
            Thông tin cam kết cung cấp
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Mã cam kết:</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>CK-REQ-1048-TB01</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Khối lượng cam kết:</span>
              <strong style={{ color: '#111827' }}>20 tấn rơm cuộn</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Đơn giá thu mua:</span>
              <strong style={{ color: '#155724' }}>1.500.000 đ / tấn khô</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Hạn giao hàng:</span>
              <strong style={{ color: '#111827' }}>16/10/2026</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6B7280' }}>Địa điểm bãi gom:</span>
              <strong style={{ color: '#111827', textAlign: 'right', maxWidth: '180px' }}>Kho bãi HTX Tân Bình</strong>
            </div>
          </div>
        </div>

        {/* Blue Info Box */}
        <div style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '12px',
          padding: '12px 14px',
          fontSize: '11.5px',
          color: '#1E40AF',
          textAlign: 'left',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <Truck size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Đội xe do <strong>Doanh nghiệp mua (hoặc AgriLog Logistics)</strong> điều phối dự kiến tới bãi tập kết lấy hàng lúc <strong>08:30 ngày 16/10/2026</strong>. Đại lý vui lòng hoàn thành đo độ ẩm IoT trước giờ xe đến.
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={() => onNavigate('nir_testing')}
            className="figma-btn-primary"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Cpu size={18} />
            Đo độ ẩm IoT & Tạo mã QR lô hàng
          </button>

          <button 
            onClick={() => onNavigate('logistics_tracking')}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              color: '#374151',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Truck size={16} />
            Xem lộ trình xe ghép đa điểm
          </button>

          <button 
            onClick={() => onNavigate('agent_home')}
            style={{
              background: 'none',
              border: 'none',
              color: '#155724',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Quay về trang chủ Đại lý
          </button>
        </div>

      </div>

      {/* Bottom Nav */}
      <div style={{
        height: '64px',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
        flexShrink: 0
      }}>
        <button onClick={() => onNavigate('agent_home')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Trang chủ</span>
        </button>

        <button onClick={() => onNavigate('agent_order_detail')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ background: '#EAF5EC', color: '#155724', padding: '4px 16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#155724', fontWeight: '800' }}>Đơn hàng</span>
        </button>

        <button onClick={() => onNavigate('logistics_tracking')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Phương tiện</span>
        </button>

        <button onClick={() => onNavigate('account')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Cá nhân</span>
        </button>
      </div>

    </div>
  );
}
