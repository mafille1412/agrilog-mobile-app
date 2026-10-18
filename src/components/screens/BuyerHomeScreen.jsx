import React from 'react';
import { 
  Scale, 
  Leaf, 
  Plus, 
  Scan, 
  ArrowRight, 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  Package, 
  User 
} from 'lucide-react';

export default function BuyerHomeScreen({ onNavigate, onSelectOrder }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Top Header */}
      <div style={{
        padding: '12px 20px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        borderBottom: '1px solid #F3F4F6'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '9px',
            background: '#1A4329',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 0-5-5H4a5 5 0 0 1 5 5v0a5 5 0 0 0 3 0" />
              <path d="M12 13a5 5 0 0 1 5-5h3a5 5 0 0 0-5 5v0a5 5 0 0 1-3 0" />
            </svg>
          </div>
          <span style={{ fontSize: '18px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
            AgriLog
          </span>
          <span style={{
            background: '#E2EFE7',
            color: '#1A4329',
            fontSize: '9.5px',
            fontWeight: '800',
            padding: '2.5px 7px',
            borderRadius: '20px',
            letterSpacing: '0.04em'
          }}>
            DOANH NGHIỆP
          </span>
        </div>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            background: '#FFFFFF'
          }}>
            <Bell size={16} color="#374151" />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '6px',
              height: '6px',
              background: '#2563EB',
              borderRadius: '50%'
            }} />
          </div>

          <div 
            onClick={() => onNavigate('account')}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: '#1A4329',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '11px',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(26, 67, 41, 0.2)'
            }}
            title="Quản lý tài khoản & Đăng xuất"
          >
            GE
          </div>
        </div>
      </div>

      {/* Scrollable Screen Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 24px' }}>
        
        {/* Title Section matching user image */}
        <div style={{ marginBottom: '14px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>
            Tổng quan thu mua
          </h1>
          <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '3px', marginBottom: 0 }}>
            GreenGrid Energy · Tháng 10/2026
          </p>
        </div>

        {/* Dual Stat Cards matching user image */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
          
          {/* Card 1: Tổng lượng đã mua */}
          <div style={{
            background: '#EFF8F2',
            borderRadius: '16px',
            padding: '14px 14px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #E1EFE6'
          }}>
            <div>
              <div style={{ color: '#1A4329', marginBottom: '8px' }}>
                <Scale size={20} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: '12px', color: '#374151', fontWeight: '600' }}>
                Tổng lượng đã mua
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontSize: '26px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
                  1.240
                </span>
                <span style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: '500' }}>
                  tấn khô
                </span>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#15803D', fontWeight: '600', marginTop: '6px' }}>
              +18% so với tháng trước
            </div>
          </div>

          {/* Card 2: CO2 giảm thải */}
          <div style={{
            background: '#F0F6FF',
            borderRadius: '16px',
            padding: '14px 14px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #DFECFE'
          }}>
            <div>
              <div style={{ color: '#2563EB', marginBottom: '8px' }}>
                <Leaf size={20} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: '12px', color: '#374151', fontWeight: '600' }}>
                CO₂ giảm thải
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontSize: '26px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
                  148
                </span>
                <span style={{ fontSize: '12.5px', color: '#6B7280', fontWeight: '500' }}>
                  tấn
                </span>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#2563EB', fontWeight: '600', marginTop: '6px' }}>
              CO₂e ước tính
            </div>
          </div>

        </div>

        {/* Dual Action Buttons: + Tạo yêu cầu & Quét QR */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          
          <button
            onClick={() => onNavigate('create_request')}
            style={{
              height: '46px',
              background: '#1A4329',
              color: '#FFFFFF',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 3px 8px rgba(26, 67, 41, 0.2)',
              transition: 'all 0.15s ease'
            }}
          >
            <Plus size={18} strokeWidth={2.5} /> Tạo yêu cầu
          </button>

          <button
            onClick={() => onNavigate('qr_scanner')}
            style={{
              height: '46px',
              background: '#FFFFFF',
              color: '#111827',
              borderRadius: '12px',
              border: '1.5px solid #E5E7EB',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              transition: 'all 0.15s ease'
            }}
          >
            <Scan size={18} strokeWidth={2.2} /> Quét QR
          </button>

        </div>

        {/* Section 1: Yêu cầu đang mở */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', margin: 0 }}>
              Yêu cầu đang mở
            </h2>
            <button
              onClick={() => onNavigate('buyer_requests')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: '700',
                color: '#111827',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: 0
              }}
            >
              Xem tất cả →
            </button>
          </div>

          {/* Request Card: Rơm rạ */}
          <div
            onClick={() => onNavigate('buyer_order_detail')}
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              padding: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {/* Header: Name + Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', margin: 0 }}>
                Rơm rạ
              </h3>
              <span style={{
                background: '#EFF6FF',
                color: '#2563EB',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: '12px'
              }}>
                Đang tìm nguồn
              </span>
            </div>

            {/* Subtitle */}
            <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
              REQ-1048 · Nhà máy Đồng Tháp
            </div>

            {/* Progress label & percent */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', marginBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#111827' }}>
                Đã cam kết 180 / 250 tấn khô
              </span>
              <span style={{ fontWeight: '700', color: '#111827' }}>
                72%
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{
              height: '6px',
              background: '#E5E7EB',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '72%',
                height: '100%',
                background: '#1A4329',
                borderRadius: '4px'
              }} />
            </div>

            {/* Footer: Deadline + Chi tiết */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#6B7280' }}>
              <span>Hạn giao 25/10/2026</span>
              <span style={{ fontWeight: '700', color: '#111827', display: 'flex', alignItems: 'center', gap: '2px' }}>
                Chi tiết →
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Đơn hàng đang giao */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', margin: 0 }}>
              Đơn hàng đang giao
            </h2>
            <button
              onClick={() => onNavigate('buyer_orders')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: '700',
                color: '#111827',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: 0
              }}
            >
              Xem tất cả →
            </button>
          </div>

          {/* Delivery Order Card: COM-0001 HTX Tân Bình */}
          <div
            onClick={() => onNavigate('buyer_order_detail')}
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              padding: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {/* Header: COM-0001 + Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
              <span style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                COM-0001
              </span>
              <span style={{
                background: '#EFF6FF',
                color: '#2563EB',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: '12px'
              }}>
                Đang thực hiện
              </span>
            </div>

            {/* Cooperative Name */}
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', margin: '2px 0 3px' }}>
              HTX Tân Bình
            </h3>

            {/* Commitment quantity */}
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1A4329', marginBottom: '4px' }}>
              Cam kết 20 tấn khô
            </div>

            {/* Sub details */}
            <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
              REQ-1048 · Rơm rạ · Nhà máy Đồng Tháp
            </div>

            {/* Progress label & percent */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', marginBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#111827' }}>
                Đã xuất 17,6 / 20 tấn khô
              </span>
              <span style={{ fontWeight: '700', color: '#111827' }}>
                88%
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{
              height: '6px',
              background: '#E5E7EB',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                width: '88%',
                height: '100%',
                background: '#1A4329',
                borderRadius: '4px'
              }} />
            </div>

            {/* Delivery Note */}
            <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '10px' }}>
              Đang vận chuyển · Chưa xác nhận nhận hàng
            </div>

            {/* Expected arrival */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
              marginBottom: '10px',
              paddingBottom: '10px',
              borderBottom: '1px solid #F3F4F6'
            }}>
              <span style={{ color: '#6B7280' }}>Dự kiến đến</span>
              <span style={{ fontWeight: '700', color: '#111827' }}>24/10/2026 · 14:30</span>
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '13px', fontWeight: '700', color: '#1A4329' }}>
              Xem đơn hàng →
            </div>
          </div>
        </div>

        {/* Section 3: ĐIỂM NHẬN HIỆN TẠI */}
        <div style={{
          background: '#F9FAFB',
          border: '1px solid #E5E7EB',
          borderRadius: '14px',
          padding: '12px 16px'
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: '800', color: '#6B7280', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            ĐIỂM NHẬN HIỆN TẠI
          </div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#1A4329', marginTop: '3px' }}>
            Nhà máy Đồng Tháp
          </div>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div style={{
        height: '60px',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 10px 2px',
        flexShrink: 0
      }}>
        {/* Tab 1: Trang chủ (Active) */}
        <button
          onClick={() => onNavigate('buyer_home')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            background: '#E2EFE7',
            color: '#1A4329',
            padding: '3px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LayoutGrid size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#1A4329', fontWeight: '800' }}>
            Trang chủ
          </span>
        </button>

        {/* Tab 2: Yêu cầu */}
        <button
          onClick={() => onNavigate('buyer_requests')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={19} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Yêu cầu
          </span>
        </button>

        {/* Tab 3: Đơn hàng */}
        <button
          onClick={() => onNavigate('buyer_orders')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Package size={19} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Đơn hàng
          </span>
        </button>

        {/* Tab 4: Tài khoản */}
        <button
          onClick={() => onNavigate('account')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={19} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tài khoản
          </span>
        </button>
      </div>

    </div>
  );
}
