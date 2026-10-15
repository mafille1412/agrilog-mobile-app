import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function WeighbridgeScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('logistics_tracking')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Giao nhận & Đối soát
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Success Icon in Figma */}
        <div style={{ textAlign: 'center', margin: '14px 0 16px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <CheckCircle2 size={32} />
          </div>

          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>
            Giao hàng thành công
          </h2>
          <p style={{ fontSize: '12px', color: '#6B7280' }}>
            Đã hoàn tất cân điện tử và nghiệm thu tại cổng nhà máy
          </p>
        </div>

        {/* Detailed Settlement Breakdown Card in Figma */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px', marginBottom: '10px' }}>
            Biên bản nghiệm thu lô hàng
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mã lô hàng:</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>AGL-2026-KG0912</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Khối lượng tươi thực tế:</span>
              <strong style={{ color: '#111827' }}>50.000 kg (50 tấn)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Độ ẩm đo tại cổng:</span>
              <strong style={{ color: '#155724' }}>14.2% (Đạt)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Quy đổi sinh khối khô:</span>
              <strong style={{ color: '#111827' }}>42.900 kg khô</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Đơn giá sinh khối khô:</span>
              <strong style={{ color: '#111827' }}>1.650.000 đ / tấn</strong>
            </div>

            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '8px', marginTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#155724' }}>TỔNG THANH TOÁN:</span>
              <span style={{ fontSize: '18px', fontWeight: '800', color: '#155724' }}>
                82.500.000 đ
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={() => onNavigate('escrow_settlement')} className="figma-btn-primary">
            Xác nhận đối soát & Giải ngân
          </button>
        </div>

      </div>

    </div>
  );
}
