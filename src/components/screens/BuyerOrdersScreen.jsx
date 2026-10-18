import React, { useState } from 'react';
import { 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  PackageCheck, 
  User,
  Filter,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Building2,
  ArrowRight
} from 'lucide-react';

export default function BuyerOrdersScreen({ onNavigate, onSelectOrder }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'processing' | 'completed'

  const allOrders = [
    {
      id: 'REQ-1048',
      name: 'Rơm rạ cuộn',
      factory: 'Nhà máy Điện Sinh khối Cần Thơ',
      totalTons: '50.0 tấn',
      unitPrice: '1.500.000 đ/tấn',
      totalValue: '75.000.000 đ',
      depositStatus: 'Cọc Escrow 30% đã bảo chứng (22.500.000 đ)',
      deadline: '16/10/2026',
      status: 'processing',
      statusText: 'Đang vận chuyển',
      coops: ['HTX Tân Bình (30t)', 'Cơ sở Út Triệu (20t)'],
      truck: 'Xe tải 68C-148.92 (Tài xế Lê Văn Hoàng)',
      eta: 'Dự kiến cập cảng tiếp nhận lúc 12:00'
    },
    {
      id: 'REQ-1043',
      name: 'Trấu nghiền',
      factory: 'Nhà máy Điện Sinh khối Thoại Sơn',
      totalTons: '30.0 tấn',
      unitPrice: '1.200.000 đ/tấn',
      totalValue: '36.000.000 đ',
      depositStatus: 'Đã quyết toán Escrow 100% (36.000.000 đ)',
      deadline: '12/10/2026',
      status: 'completed',
      statusText: 'Đã hoàn tất',
      coops: ['HTX Thoại Sơn (30t)'],
      truck: 'Xe tải 67C-129.45',
      eta: 'Đã nghiệm thu tại trạm cân'
    }
  ];

  const filteredOrders = allOrders.filter(ord => {
    if (filter === 'processing') return ord.status === 'processing';
    if (filter === 'completed') return ord.status === 'completed';
    return true;
  });

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
              cursor: 'pointer'
            }}
          >
            CT
          </div>
        </div>
      </div>

      {/* Screen Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px' }}>
        
        {/* Title */}
        <div style={{ marginBottom: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
            Đơn hàng
          </h1>
          <p style={{ fontSize: '12.5px', color: '#6B7280', marginTop: '3px' }}>
            Theo dõi tiến trình bốc hàng, vận chuyển và quyết toán Escrow
          </p>
        </div>

        {/* Filter Tabs (Figma Screen Row 1 Col 5) */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filter === 'all' ? '1px solid #1A4329' : '1px solid #E5E7EB',
              background: filter === 'all' ? '#1A4329' : '#FFFFFF',
              color: filter === 'all' ? '#FFFFFF' : '#4B5563'
            }}
          >
            Tất cả ({allOrders.length})
          </button>

          <button
            onClick={() => setFilter('processing')}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filter === 'processing' ? '1px solid #0284C7' : '1px solid #E5E7EB',
              background: filter === 'processing' ? '#F0F9FF' : '#FFFFFF',
              color: filter === 'processing' ? '#0369A1' : '#4B5563'
            }}
          >
            Đang xử lý (1)
          </button>

          <button
            onClick={() => setFilter('completed')}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filter === 'completed' ? '1px solid #10B981' : '1px solid #E5E7EB',
              background: filter === 'completed' ? '#ECFDF5' : '#FFFFFF',
              color: filter === 'completed' ? '#047857' : '#4B5563'
            }}
          >
            Hoàn tất (1)
          </button>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredOrders.map(order => (
              <div
                key={order.id}
                onClick={() => {
                  if (onSelectOrder) onSelectOrder(order);
                  onNavigate('buyer_order_detail');
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  padding: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease'
                }}
              >
                {/* Header row: ID + Status badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: '#1A4329' }}>
                      #{order.id}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
                      · {order.name}
                    </span>
                  </div>
                  <span style={{
                    background: order.status === 'processing' ? '#E0F2FE' : '#DCFCE7',
                    color: order.status === 'processing' ? '#0284C7' : '#15803D',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '3px 10px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {order.status === 'processing' ? <Truck size={12} /> : <CheckCircle2 size={12} />}
                    {order.statusText}
                  </span>
                </div>

                {/* Factory & Value */}
                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '10px' }}>
                  {order.factory}
                </div>

                {/* Key Metrics */}
                <div style={{
                  background: '#F9FAFB',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  marginBottom: '10px',
                  fontSize: '11.5px'
                }}>
                  <div>
                    <span style={{ color: '#6B7280' }}>Khối lượng: </span>
                    <strong style={{ color: '#111827' }}>{order.totalTons}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#6B7280' }}>Tổng tiền: </span>
                    <strong style={{ color: '#1A4329' }}>{order.totalValue}</strong>
                  </div>
                </div>

                {/* Matched Coops */}
                <div style={{ fontSize: '11.5px', color: '#4B5563', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={14} color="#155724" />
                  <span>Đại lý: <strong>{order.coops.join(' + ')}</strong></span>
                </div>

                {/* Escrow note */}
                <div style={{
                  fontSize: '11px',
                  color: '#15803D',
                  background: '#F0FDF4',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginBottom: '10px'
                }}>
                  <ShieldCheck size={14} />
                  <span>{order.depositStatus}</span>
                </div>

                {/* CTA row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #F3F4F6',
                  paddingTop: '10px',
                  fontSize: '12px',
                  color: '#1A4329',
                  fontWeight: '700'
                }}>
                  <span>Xem chi tiết 4 phân hệ (Lô hàng, Vận chuyển, Escrow)</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State (Figma Screen Row 1 Col 6) */
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px dashed #D1D5DB',
            padding: '36px 20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#F3F4F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#9CA3AF'
            }}>
              <PackageCheck size={26} />
            </div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>
              Chưa có đơn hàng nào
            </h4>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: '0 auto 16px', maxWidth: '240px' }}>
              Khi một yêu cầu thu mua được khớp lệnh thành công và xác nhận xe, đơn hàng sẽ hiển thị tại đây.
            </p>
            <button
              onClick={() => onNavigate('create_request')}
              className="figma-btn-primary"
              style={{ width: 'auto', padding: '10px 20px', margin: '0 auto' }}
            >
              Tạo yêu cầu ngay
            </button>
          </div>
        )}

      </div>

      {/* Bottom Navigation Bar */}
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
        {/* Tab 1: Tổng quan */}
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
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tổng quan
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

        {/* Tab 3: Đơn hàng (Active) */}
        <button
          onClick={() => onNavigate('buyer_orders')}
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
            <PackageCheck size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#1A4329', fontWeight: '800' }}>
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
