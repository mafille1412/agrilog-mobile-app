import React from 'react';
import { ArrowLeft, CheckCircle2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EscrowSettlementScreen({ onNavigate }) {
  React.useEffect(() => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('weighbridge')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Quyết toán Escrow
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Settlement Status Card in Figma */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '20px 16px', marginBottom: '14px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px'
          }}>
            <CheckCircle2 size={30} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
            Đã giải ngân thành công
          </div>
          <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>
            Hợp đồng thông minh Escrow đã quyết toán tự động
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px', marginBottom: '10px' }}>
            Phân bổ thanh toán giao dịch:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Đại lý thu gom (HTX Tân Bình):</span>
              <strong style={{ color: '#111827' }}>82.500.000 đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Cước xe ghép đa điểm:</span>
              <strong style={{ color: '#111827' }}>2.150.000 đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Phí dịch vụ thiết bị IoT & kiểm định QR:</span>
              <strong style={{ color: '#155724' }}>300.000 đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Phí sàn AgriLog (3% GMV bên mua):</span>
              <strong style={{ color: '#155724' }}>2.475.000 đ</strong>
            </div>

            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '8px', marginTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#155724' }}>TỔNG TIỀN MUA:</span>
              <span style={{ fontSize: '17px', fontWeight: '800', color: '#155724' }}>
                85.375.000 đ
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={() => onNavigate('esg_report')} className="figma-btn-primary">
            Xem Báo cáo MRV Carbon & ESG
          </button>
        </div>

      </div>

    </div>
  );
}
