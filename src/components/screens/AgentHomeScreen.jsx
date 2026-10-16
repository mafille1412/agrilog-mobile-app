import React, { useState } from 'react';
import { 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  Truck, 
  User, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Radio, 
  MapPin, 
  Cpu, 
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function AgentHomeScreen({ onNavigate, onSelectOrder }) {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'orders' | 'fleet' | 'account'
  const [isReady, setIsReady] = useState(true);

  const demandOrders = [
    {
      id: 'REQ-1048',
      byproduct: 'Rơm rạ',
      badge: 'Phù hợp',
      enterprise: 'GreenGrid Energy',
      location: 'KCN Cần Thơ',
      needTons: '20 t',
      maxMoisture: '≤ 15%',
      deadline: '16/10/2026',
      distance: '14 km',
      unitPrice: '1.500.000 đ/tấn khô'
    },
    {
      id: 'REQ-1043',
      byproduct: 'Trấu',
      badge: 'Phù hợp',
      enterprise: 'Nhà máy Erex Thoại Sơn',
      location: 'Thoại Sơn, An Giang',
      needTons: '30 t',
      maxMoisture: '≤ 14%',
      deadline: '18/10/2026',
      distance: '8 km',
      unitPrice: '1.200.000 đ/tấn khô'
    },
    {
      id: 'REQ-1039',
      byproduct: 'Bã mía',
      badge: 'Mới đăng',
      enterprise: 'Cơ sở Chế biến Phân bón An Giang',
      location: 'Châu Thành, An Giang',
      needTons: '15 t',
      maxMoisture: '≤ 16%',
      deadline: '20/10/2026',
      distance: '22 km',
      unitPrice: '850.000 đ/tấn khô'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Top Header - Synchronized 100% with BuyerHomeScreen Figma */}
      <div style={{
        padding: '14px 20px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        borderBottom: '1px solid #F3F4F6'
      }}>
        {/* Brand + Logo + Role Badge */}
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
            ĐẠI LÝ
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
              background: '#155724',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(21, 87, 36, 0.2)'
            }}
            title="Quản lý tài khoản & Đăng xuất"
          >
            TB
          </div>
        </div>
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        
        {/* Greeting Section (Exact Figma Screen 1) */}
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em' }}>
            Chào buổi sáng, Harjit
          </h2>
          <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} color="#059669" />
            <span>HTX Tân Bình · Thoại Sơn, An Giang (Đại lý cấp 1)</span>
          </div>
        </div>

        {/* Ready to Receive Orders Banner (Dark Green Card in Figma Screen 1) */}
        <div 
          onClick={() => setIsReady(!isReady)}
          style={{
            background: isReady ? 'linear-gradient(135deg, #155724, #0B3D18)' : '#4B5563',
            borderRadius: '14px',
            padding: '14px 16px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(21, 87, 36, 0.18)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34D399'
            }}>
              <Radio size={18} className={isReady ? 'animate-pulse' : ''} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '800' }}>
                {isReady ? 'Sẵn sàng nhận đơn mới' : 'Đang tạm dừng nhận đơn'}
              </div>
              <div style={{ fontSize: '10.5px', color: '#A7F3D0', marginTop: '1px' }}>
                {isReady ? 'Hệ thống đang ghép đơn trong bán kính 40km' : 'Bấm để kích hoạt lại trạng thái nhận đơn'}
              </div>
            </div>
          </div>

          <div style={{
            background: isReady ? '#34D399' : '#9CA3AF',
            color: isReady ? '#064E3B' : '#FFFFFF',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '10px',
            fontWeight: '800'
          }}>
            {isReady ? 'BẬT' : 'TẮT'}
          </div>
        </div>

        {/* IoT Moisture Device Status Mini-card */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11.5px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="#059669" />
            <span style={{ color: '#374151', fontWeight: '600' }}>
              Thiết bị đo IoT: <strong style={{ color: '#059669' }}>Đã kết nối BLE (Pin 94%)</strong>
            </span>
          </div>
          <button 
            onClick={() => onNavigate('nir_testing')}
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#065F46',
              borderRadius: '8px',
              padding: '4px 8px',
              fontSize: '10.5px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Đo kiểm IoT →
          </button>
        </div>

        {/* Demand Orders List Section (Exact Figma Screen 1) */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
              Đơn cần ghép
            </h3>
            <span 
              onClick={() => onNavigate('agent_order_detail')}
              style={{ fontSize: '12px', color: '#155724', fontWeight: '700', cursor: 'pointer' }}
            >
              Xem tất cả
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {demandOrders.map((order) => (
              <div 
                key={order.id}
                onClick={() => onNavigate('agent_order_detail')}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'transform 0.15s, border-color 0.15s'
                }}
              >
                {/* Order Top: Name + Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
                    {order.byproduct}
                  </div>
                  <span style={{
                    background: '#ECFDF5',
                    color: '#047857',
                    border: '1px solid #A7F3D0',
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '12px'
                  }}>
                    {order.badge}
                  </span>
                </div>

                {/* Enterprise Name */}
                <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '10px' }}>
                  {order.enterprise} · {order.location}
                </div>

                {/* Two Metric Columns */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  background: '#F9FAFB',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  marginBottom: '10px'
                }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                      {order.needTons}
                    </div>
                    <div style={{ fontSize: '10px', color: '#6B7280' }}>Cần cấp</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
                      {order.maxMoisture}
                    </div>
                    <div style={{ fontSize: '10px', color: '#6B7280' }}>Độ ẩm yêu cầu</div>
                  </div>
                </div>

                {/* Footer of Card */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11px',
                  color: '#6B7280',
                  borderTop: '1px solid #F3F4F6',
                  paddingTop: '8px'
                }}>
                  <span>Hạn giao: {order.deadline} · {order.distance}</span>
                  <span style={{ color: '#155724', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Xem chi tiết ›
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big Create Batch CTA Button (Exact Figma Screen 1) */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', paddingBottom: '4px' }}>
          <button 
            onClick={() => onNavigate('agent_create_batch')}
            style={{
              width: '100%',
              background: '#155724',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(21, 87, 36, 0.25)'
            }}
          >
            <Plus size={18} strokeWidth={2.5} />
            Tạo lô hàng mới
          </button>
        </div>

      </div>

      {/* Bottom Navigation - 4 Tabs Synchronized Exactly with BuyerHomeScreen Figma */}
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
        {/* Tab 1: Trang chủ */}
        <button
          onClick={() => onNavigate('agent_home')}
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
            background: '#EAF5EC',
            color: '#155724',
            padding: '4px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LayoutGrid size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#155724', fontWeight: '800' }}>
            Trang chủ
          </span>
        </button>

        {/* Tab 2: Đơn hàng */}
        <button
          onClick={() => onNavigate('agent_order_detail')}
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
            Đơn hàng
          </span>
        </button>

        {/* Tab 3: Phương tiện */}
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
            Phương tiện
          </span>
        </button>

        {/* Tab 4: Cá nhân */}
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
            Cá nhân
          </span>
        </button>
      </div>

    </div>
  );
}
