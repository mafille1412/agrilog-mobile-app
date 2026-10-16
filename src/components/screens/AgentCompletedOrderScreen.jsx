import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  PackageCheck, 
  MapPin, 
  Calendar, 
  Scale, 
  Droplets, 
  DollarSign, 
  LayoutGrid, 
  ClipboardList, 
  Truck, 
  User, 
  ShieldCheck 
} from 'lucide-react';

export default function AgentCompletedOrderScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Chi tiết đơn hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body (Exact Figma Screen 12) */}
      <div className="figma-screen-viewport" style={{ padding: '24px 16px', textAlign: 'center' }}>
        
        {/* Completed Icon in Circle */}
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: '#ECFDF5',
            border: '2px solid #A7F3D0',
            color: '#059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px',
            boxShadow: '0 8px 24px rgba(5, 150, 105, 0.15)'
          }}>
            <PackageCheck size={38} strokeWidth={2.2} />
          </div>

          <span style={{
            background: '#ECFDF5',
            color: '#047857',
            border: '1px solid #A7F3D0',
            padding: '3px 12px',
            borderRadius: '16px',
            fontSize: '11px',
            fontWeight: '800',
            display: 'inline-block',
            marginBottom: '8px'
          }}>
            Đã xong · Hoàn tất
          </span>

          <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
            Đơn hàng đã đóng
          </h2>
          <p style={{ fontSize: '13px', color: '#6B7280', maxWidth: '300px', margin: '0 auto', lineHeight: '1.4' }}>
            Lô hàng đã được nghiệm thu và đối soát tự động thành công tại nhà máy GreenGrid Energy, KCN Cần Thơ.
          </p>
        </div>

        {/* Settlement Summary Card (Exact Figma Screen 12) */}
        <div className="figma-card" style={{ textAlign: 'left', padding: '16px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827' }}>
              Kết quả quyết toán Escrow
            </span>
            <span style={{ fontSize: '11px', color: '#155724', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <ShieldCheck size={14} /> Bảo chứng 100%
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '7px' }}>
              <span style={{ color: '#6B7280' }}>Mã lô hàng (Batch ID):</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>BCH-2026-DT0908</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '7px' }}>
              <span style={{ color: '#6B7280' }}>Khối lượng cân thực nhận:</span>
              <strong style={{ color: '#111827' }}>20.00 tấn</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '7px' }}>
              <span style={{ color: '#6B7280' }}>Độ ẩm bình quân IoT:</span>
              <strong style={{ color: '#059669' }}>14.2% (Đạt tiêu chuẩn ≤ 15%)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '7px' }}>
              <span style={{ color: '#6B7280' }}>Đơn giá thanh toán:</span>
              <strong style={{ color: '#111827' }}>1.500.000 đ / tấn</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '3px' }}>
              <span style={{ color: '#111827', fontWeight: '700' }}>Tổng tiền thực nhận:</span>
              <strong style={{ fontSize: '16px', color: '#155724' }}>30.000.000 đ</strong>
            </div>
          </div>

          {/* Green Status Note */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '10px',
            padding: '10px 12px',
            marginTop: '12px',
            fontSize: '11px',
            color: '#166534',
            lineHeight: '1.4'
          }}>
            ✓ Hợp đồng Escrow đã giải ngân toàn bộ 100% vào tài khoản HTX Nông nghiệp Tân Bình.
          </div>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', paddingBottom: '16px' }}>
          <button 
            onClick={() => onNavigate('agent_home')}
            className="figma-btn-primary"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            Về trang chủ Đại lý
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

        <button onClick={() => onNavigate('agent_home')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
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
