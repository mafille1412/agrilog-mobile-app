import React from 'react';
import { 
  Scale, 
  Leaf, 
  Plus, 
  ArrowRight, 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  Truck, 
  User 
} from 'lucide-react';

export default function BuyerHomeScreen({ onNavigate, onSelectOrder }) {
  const orders = [
    {
      id: 'REQ-1048',
      name: 'Rơm rạ',
      factory: 'Nhà máy Điện Sinh khối Cần Thơ',
      currentTons: 180,
      totalTons: 250,
      percent: 72,
      deadline: '14/10/2026',
      unit: 'tấn',
      status: 'Tìm nguồn'
    },
    {
      id: 'REQ-1043',
      name: 'Trấu',
      factory: 'Nhà máy Điện Sinh khối Thoại Sơn',
      currentTons: 90,
      totalTons: 120,
      percent: 75,
      deadline: '16/10/2026',
      unit: 'tấn',
      status: 'Tìm nguồn'
    },
    {
      id: 'REQ-1039',
      name: 'Bã mía',
      factory: 'Nhà máy Phân bón Hữu cơ An Giang',
      currentTons: 60,
      totalTons: 100,
      percent: 60,
      deadline: '18/10/2026',
      unit: 'tấn',
      status: 'Tìm nguồn'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Top Header matching Figma exactly */}
      <div style={{
        padding: '14px 20px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF'
      }}>
        {/* Logo + Brand + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Logo icon: rounded square with sprout */}
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: '#1A4329',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 0-5-5H4a5 5 0 0 1 5 5v0a5 5 0 0 0 3 0" />
              <path d="M12 13a5 5 0 0 1 5-5h3a5 5 0 0 0-5 5v0a5 5 0 0 1-3 0" />
            </svg>
          </div>

          <span style={{ fontSize: '19px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
            AgriLog
          </span>

          <span style={{
            background: '#E2EFE7',
            color: '#1A4329',
            fontSize: '9.5px',
            fontWeight: '800',
            padding: '3px 8px',
            borderRadius: '20px',
            letterSpacing: '0.04em'
          }}>
            DOANH NGHIỆP
          </span>
        </div>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Bell notification button */}
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            background: '#FFFFFF'
          }}>
            <Bell size={17} color="#374151" />
            <span style={{
              position: 'absolute',
              top: '7px',
              right: '7px',
              width: '6px',
              height: '6px',
              background: '#2563EB',
              borderRadius: '50%'
            }} />
          </div>

          {/* Profile Avatar -> Account Screen */}
          <div 
            onClick={() => onNavigate('account')}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#1A4329',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(26, 67, 41, 0.2)'
            }}
            title="Quản lý tài khoản & Đăng xuất"
          >
            CT
          </div>
        </div>
      </div>

      {/* Scrollable Screen Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 20px' }}>
        
        {/* Title Section */}
        <div style={{ marginBottom: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
            Tổng quan thu mua
          </h1>
          <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>
            Công ty Năng lượng Sinh khối Cần Thơ · Tháng 10/2026
          </p>
        </div>

        {/* Dual KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '22px' }}>
          
          {/* Left KPI: Tổng lượng đã mua */}
          <div style={{
            background: '#E9F5ED',
            borderRadius: '16px',
            padding: '14px 14px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '120px'
          }}>
            <div>
              <div style={{ color: '#1A4329', marginBottom: '8px' }}>
                <Scale size={20} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: '11.5px', color: '#111827', fontWeight: '700' }}>
                Tổng lượng đã mua
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                  1.240
                </span>
                <span style={{ fontSize: '13px', color: '#4B5563', fontWeight: '600' }}>
                  tấn
                </span>
              </div>
            </div>
            <div style={{ fontSize: '10.5px', color: '#15803D', fontWeight: '600', marginTop: '6px' }}>
              +18% so với tháng trước
            </div>
          </div>

          {/* Right KPI: CO2 giảm thải */}
          <div style={{
            background: '#EDF4FF',
            borderRadius: '16px',
            padding: '14px 14px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '120px'
          }}>
            <div>
              <div style={{ color: '#2563EB', marginBottom: '8px' }}>
                <Leaf size={20} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: '11.5px', color: '#111827', fontWeight: '700' }}>
                CO₂ giảm thải
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                  1.860
                </span>
                <span style={{ fontSize: '13px', color: '#4B5563', fontWeight: '600' }}>
                  tấn
                </span>
              </div>
            </div>
            <div style={{ fontSize: '10.5px', color: '#2563EB', fontWeight: '600', marginTop: '6px' }}>
              CO₂e giảm thải ước tính
            </div>
          </div>

        </div>

        {/* Section Heading: Yêu cầu đang mở */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
            Yêu cầu đang mở
          </h2>
          <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: '600', cursor: 'pointer' }}>
            Xem tất cả (3)
          </span>
        </div>

        {/* Order Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => {
                if (onSelectOrder) onSelectOrder(order);
                onNavigate('matching');
              }}
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
              {/* Header row: Name + Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                  {order.name}
                </h3>
                <span style={{
                  background: '#EBF3FE',
                  color: '#2563EB',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 10px',
                  borderRadius: '12px'
                }}>
                  {order.status}
                </span>
              </div>

              {/* Subtitle */}
              <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
                {order.id} · {order.factory}
              </div>

              {/* Progress label & percent */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', marginBottom: '6px' }}>
                <span style={{ fontWeight: '700', color: '#111827' }}>
                  Đã có {order.currentTons} / {order.totalTons} {order.unit}
                </span>
                <span style={{ fontWeight: '700', color: '#15803D' }}>
                  {order.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{
                height: '7px',
                background: '#E5E7EB',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: `${order.percent}%`,
                  height: '100%',
                  background: '#1A4329',
                  borderRadius: '4px'
                }} />
              </div>

              {/* Footer: Deadline + Arrow */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#6B7280' }}>
                <span>Giao trước {order.deadline}</span>
                <ArrowRight size={15} color="#9CA3AF" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button: + Tạo yêu cầu thu mua */}
        <button
          onClick={() => onNavigate('create_request')}
          style={{
            width: '100%',
            height: '50px',
            background: '#1A4329',
            color: '#FFFFFF',
            borderRadius: '12px',
            border: 'none',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(26, 67, 41, 0.25)',
            marginBottom: '10px'
          }}
        >
          <Plus size={18} strokeWidth={2.5} /> Tạo yêu cầu thu mua
        </button>

      </div>

      {/* Bottom Navigation Bar matching Figma exactly */}
      <div style={{
        height: '62px',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 10px 4px',
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
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            background: '#E2EFE7',
            color: '#1A4329',
            padding: '4px 16px',
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
          onClick={() => onNavigate('create_request')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Yêu cầu
          </span>
        </button>

        {/* Tab 3: Vận chuyển */}
        <button
          onClick={() => onNavigate('logistics_tracking')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Vận chuyển
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
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tài khoản
          </span>
        </button>
      </div>

    </div>
  );
}
