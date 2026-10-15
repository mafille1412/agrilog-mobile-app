import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export default function VerificationPendingScreen({ onNavigate, currentRole }) {
  const proceedToHome = () => {
    if (currentRole === 'agent') {
      onNavigate('agent_home');
    } else {
      onNavigate('buyer_home');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Top Figma Header */}
      <div className="figma-screen-header">
        <div style={{ width: '36px' }} />
        <div className="figma-header-title">
          Xác nhận tài khoản
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '24px 16px', textAlign: 'center' }}>
        
        {/* Big Check Circle Icon in Figma */}
        <div style={{ marginTop: '24px', marginBottom: '20px' }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 8px 20px rgba(21, 87, 36, 0.2)'
          }}>
            <CheckCircle2 size={40} />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
            Đã nhận hồ sơ
          </h2>
          <p style={{ fontSize: '13px', color: '#6B7280', maxWidth: '280px', margin: '0 auto', lineHeight: '1.4' }}>
            Hồ sơ của bạn đang được đội ngũ AgriLog xử lý và tiến hành xác minh thông tin
          </p>
        </div>

        {/* Verification Stages Card */}
        <div className="figma-card" style={{ textAlign: 'left', padding: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                ✓
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827' }}>Tiếp nhận hồ sơ</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Đã gửi thành công lên hệ thống</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                ⋯
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#D97706' }}>Xác minh địa bàn & kho bãi</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Dự kiến hoàn tất trong 24 giờ</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F3F4F6', color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                3
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#9CA3AF' }}>Kích hoạt tài khoản</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Sẵn sàng thực hiện giao dịch</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button in Figma */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={proceedToHome} className="figma-btn-primary">
            Vào trang chủ
          </button>
        </div>

      </div>

    </div>
  );
}
