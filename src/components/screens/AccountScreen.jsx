import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Building2, 
  Tractor, 
  ShieldCheck, 
  FileText, 
  Bell, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  FileCheck 
} from 'lucide-react';

export default function AccountScreen({ onNavigate, currentRole, onLogout }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const isBuyer = currentRole === 'buyer';

  const profile = isBuyer ? {
    name: 'GreenGrid Energy Joint Stock Co.',
    subName: 'Nhà máy Điện Sinh Khối Erex An Giang',
    roleTag: 'Doanh nghiệp thu mua (Buyer)',
    taxCode: '1602058912',
    phone: '0918.456.789',
    email: 'procurement@greengrid.vn',
    address: 'KCN Bình Hòa, Huyện Châu Thành, An Giang',
    rating: '98.5/100',
    tier: 'Hạng Kim Cương',
    totalPurchased: '1.240 tấn',
    co2Reduced: '1.860 tấn',
    activeOrders: 3
  } : {
    name: 'HTX Nông Nghiệp Tân Bình',
    subName: 'Cơ sở thu gom & Ép cuộn sinh khối',
    roleTag: 'Đại lý thu gom cấp 1 (Agent)',
    taxCode: '1801239988',
    phone: '0913.789.012',
    email: 'htxtanbinh@agrilog.vn',
    address: 'Xã Vọng Thê, Huyện Thoại Sơn, An Giang',
    rating: '99.0/100',
    tier: 'Hạng Bạch Kim',
    totalPurchased: '950 tấn/tháng',
    co2Reduced: '1.420 tấn',
    activeOrders: 2
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    if (onLogout) {
      onLogout();
    } else {
      onNavigate('welcome');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Figma Screen Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onNavigate(isBuyer ? 'buyer_home' : 'agent_home')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Quản lý tài khoản
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Profile Card */}
        <div style={{
          background: isBuyer ? 'linear-gradient(135deg, #155724, #0B3D18)' : 'linear-gradient(135deg, #B45309, #78350F)',
          borderRadius: '16px',
          padding: '18px 16px',
          color: 'white',
          marginBottom: '16px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#FFFFFF',
              color: isBuyer ? '#155724' : '#B45309',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '20px',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              {isBuyer ? <Building2 size={26} /> : <Tractor size={26} />}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '800', lineHeight: '1.2' }}>
                  {profile.name}
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#D1FAE5', marginTop: '2px', opacity: 0.9 }}>
                {profile.subName}
              </div>
              <div style={{ marginTop: '6px' }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.02em'
                }}>
                  {profile.roleTag}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.18)',
            borderRadius: '12px',
            padding: '10px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '10px', color: '#A7F3D0', opacity: 0.85 }}>Điểm tín nhiệm</div>
              <div style={{ fontSize: '13px', fontWeight: '800', marginTop: '2px', color: '#34D399' }}>
                {profile.rating}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: '#A7F3D0', opacity: 0.85 }}>Xếp hạng</div>
              <div style={{ fontSize: '13px', fontWeight: '800', marginTop: '2px' }}>
                {profile.tier}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: '#A7F3D0', opacity: 0.85 }}>Đơn active</div>
              <div style={{ fontSize: '13px', fontWeight: '800', marginTop: '2px' }}>
                {profile.activeOrders} đơn
              </div>
            </div>
          </div>
        </div>

        {/* Account Details Box */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ fontSize: '12px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
            Thông tin định danh pháp lý
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11.5px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Mã số thuế / Đăng ký:</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>{profile.taxCode}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Số điện thoại:</span>
              <strong style={{ color: '#111827' }}>{profile.phone}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
              <span style={{ color: '#6B7280' }}>Email liên hệ:</span>
              <strong style={{ color: '#111827' }}>{profile.email}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6B7280', flexShrink: 0 }}>Địa chỉ trụ sở:</span>
              <strong style={{ color: '#111827', textAlign: 'right', marginLeft: '10px' }}>{profile.address}</strong>
            </div>
          </div>
        </div>

        {/* Feature Menu List */}
        <div className="figma-card" style={{ marginBottom: '16px', padding: '6px 12px' }}>
          
          <div 
            onClick={() => onNavigate('esg_report')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid #F3F4F6',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ECFDF5', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileCheck size={18} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827' }}>Báo cáo MRV Carbon & ESG</div>
                <div style={{ fontSize: '10px', color: '#6B7280' }}>Chứng nhận giảm phát thải chuẩn IPCC 2006</div>
              </div>
            </div>
            <ChevronRight size={16} color="#9CA3AF" />
          </div>

          <div 
            onClick={() => onNavigate('batch_qr')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid #F3F4F6',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFF6FF', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827' }}>Truy xuất Batch ID & Mã QR</div>
                <div style={{ fontSize: '10px', color: '#6B7280' }}>Hồ sơ lô hàng bất biến & dữ liệu IoT</div>
              </div>
            </div>
            <ChevronRight size={16} color="#9CA3AF" />
          </div>

          <div 
            onClick={() => onNavigate('logistics_tracking')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings size={18} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827' }}>Theo dõi vận tải & AI Fleet</div>
                <div style={{ fontSize: '10px', color: '#6B7280' }}>Lộ trình gom đa điểm & cảm biến thùng xe</div>
              </div>
            </div>
            <ChevronRight size={16} color="#9CA3AF" />
          </div>

        </div>

        {/* LOGOUT BUTTON */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', paddingBottom: '16px' }}>
          <button 
            onClick={() => setShowLogoutConfirm(true)}
            style={{
              width: '100%',
              background: '#FEE2E2',
              color: '#DC2626',
              border: '1px solid #FECACA',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background 0.2s'
            }}
          >
            <LogOut size={18} />
            Đăng xuất khỏi hệ thống
          </button>
        </div>

      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '340px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#FEE2E2',
              color: '#DC2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <LogOut size={26} />
            </div>

            <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>
              Xác nhận đăng xuất?
            </h3>
            
            <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.4', marginBottom: '20px' }}>
              Bạn sẽ trở về màn hình đăng nhập. Bạn có thể đăng nhập lại bất kỳ lúc nào hoặc chọn tài khoản khác.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                style={{
                  flex: 1,
                  background: '#F3F4F6',
                  color: '#4B5563',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Hủy bỏ
              </button>

              <button 
                onClick={handleConfirmLogout}
                style={{
                  flex: 1,
                  background: '#DC2626',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
