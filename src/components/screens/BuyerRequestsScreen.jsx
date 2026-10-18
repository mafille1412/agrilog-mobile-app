import React, { useState } from 'react';
import { 
  Plus, 
  ArrowRight, 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  PackageCheck, 
  User,
  Filter,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function BuyerRequestsScreen({ onNavigate, onSelectOrder }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'searching' | 'matched'

  const allRequests = [
    {
      id: 'REQ-1048',
      name: 'Rơm rạ cuộn',
      factory: 'Nhà máy Điện Sinh khối Cần Thơ',
      currentTons: 180,
      totalTons: 250,
      percent: 72,
      deadline: '14/10/2026',
      unit: 'tấn',
      status: 'searching',
      statusText: 'Đang tìm nguồn',
      location: 'Cần Thơ · Hậu Giang',
      maxMoisture: '≤ 15%'
    },
    {
      id: 'REQ-1043',
      name: 'Trấu nghiền',
      factory: 'Nhà máy Điện Sinh khối Thoại Sơn',
      currentTons: 90,
      totalTons: 120,
      percent: 75,
      deadline: '16/10/2026',
      unit: 'tấn',
      status: 'searching',
      statusText: 'Đang tìm nguồn',
      location: 'Thoại Sơn, An Giang',
      maxMoisture: '≤ 14%'
    },
    {
      id: 'REQ-1039',
      name: 'Bã mía nén',
      factory: 'Nhà máy Phân bón Hữu cơ An Giang',
      currentTons: 60,
      totalTons: 100,
      percent: 60,
      deadline: '18/10/2026',
      unit: 'tấn',
      status: 'matched',
      statusText: 'Đã khớp lệnh',
      location: 'Châu Thành, An Giang',
      maxMoisture: '≤ 16%'
    }
  ];

  const filteredRequests = allRequests.filter(req => {
    if (filter === 'searching') return req.status === 'searching';
    if (filter === 'matched') return req.status === 'matched';
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
            Yêu cầu thu mua
          </h1>
          <p style={{ fontSize: '12.5px', color: '#6B7280', marginTop: '3px' }}>
            Quản lý và theo dõi các đợt phát lệnh thu mua sinh khối
          </p>
        </div>

        {/* Filter Tabs (Figma Screen Row 1 Col 2) */}
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
            Tất cả ({allRequests.length})
          </button>

          <button
            onClick={() => setFilter('searching')}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filter === 'searching' ? '1px solid #2563EB' : '1px solid #E5E7EB',
              background: filter === 'searching' ? '#EFF6FF' : '#FFFFFF',
              color: filter === 'searching' ? '#1D4ED8' : '#4B5563'
            }}
          >
            Đang tìm (2)
          </button>

          <button
            onClick={() => setFilter('matched')}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filter === 'matched' ? '1px solid #10B981' : '1px solid #E5E7EB',
              background: filter === 'matched' ? '#ECFDF5' : '#FFFFFF',
              color: filter === 'matched' ? '#047857' : '#4B5563'
            }}
          >
            Đã khớp (1)
          </button>
        </div>

        {/* Requests List */}
        {filteredRequests.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {filteredRequests.map(req => (
              <div
                key={req.id}
                onClick={() => {
                  if (req.status === 'matched') {
                    onNavigate('matching');
                  } else {
                    onNavigate('matching');
                  }
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  padding: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'transform 0.15s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', margin: 0 }}>
                      {req.name}
                    </h3>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>• {req.id}</span>
                  </div>
                  <span style={{
                    background: req.status === 'matched' ? '#ECFDF5' : '#EFF6FF',
                    color: req.status === 'matched' ? '#047857' : '#1D4ED8',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 9px',
                    borderRadius: '12px'
                  }}>
                    {req.statusText}
                  </span>
                </div>

                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '10px' }}>
                  {req.factory}
                </div>

                {/* Progress bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '5px' }}>
                  <span style={{ fontWeight: '700', color: '#111827' }}>
                    Đã có {req.currentTons} / {req.totalTons} {req.unit}
                  </span>
                  <span style={{ fontWeight: '700', color: '#1A4329' }}>
                    {req.percent}%
                  </span>
                </div>

                <div style={{
                  height: '7px',
                  background: '#E5E7EB',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: `${req.percent}%`,
                    height: '100%',
                    background: '#1A4329',
                    borderRadius: '4px'
                  }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#6B7280' }}>
                  <span>Hạn giao: <strong>{req.deadline}</strong></span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#1A4329', fontWeight: '700' }}>
                    <span>Khớp lệnh AI</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State (Figma Screen Row 1 Col 3) */
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px dashed #D1D5DB',
            padding: '36px 20px',
            textAlign: 'center',
            marginBottom: '16px'
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
              <ClipboardList size={26} />
            </div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>
              Chưa có yêu cầu nào
            </h4>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: '0 auto 16px', maxWidth: '240px' }}>
              Tạo yêu cầu thu mua mới để hệ thống tự động tìm và kết nối các đại lý thu gom gần nhất.
            </p>
          </div>
        )}

        {/* CTA Button: + Tạo yêu cầu thu mua */}
        <button
          onClick={() => onNavigate('create_request')}
          style={{
            width: '100%',
            height: '48px',
            background: '#1A4329',
            color: '#FFFFFF',
            borderRadius: '12px',
            border: 'none',
            fontSize: '14.5px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(26, 67, 41, 0.25)'
          }}
        >
          <Plus size={18} strokeWidth={2.4} />
          Tạo yêu cầu mới
        </button>

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

        {/* Tab 2: Yêu cầu (Active) */}
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
          <div style={{
            background: '#E2EFE7',
            color: '#1A4329',
            padding: '4px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ClipboardList size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#1A4329', fontWeight: '800' }}>
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
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PackageCheck size={20} color="#6B7280" strokeWidth={1.8} />
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
