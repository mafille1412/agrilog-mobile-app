import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Truck, 
  Building2, 
  Sparkles,
  Info,
  Clock,
  Layers
} from 'lucide-react';

export default function MatchingScreen({ onNavigate, onBack, currentRole }) {
  // 2 Lựa chọn điều phối xe cho Doanh nghiệp:
  // 'self': Doanh nghiệp tự điều phối đội xe
  // 'agrilog_connect': Nhờ AgriLog hỗ trợ liên kết với các đội xe đối tác (AgriLog không trực tiếp điều xe)
  const [transportMode, setTransportMode] = useState('self');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('create_request') : onNavigate('create_request')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Xác nhận yêu cầu thu mua
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Thông tin tóm tắt yêu cầu vừa tạo (không hiển thị đại lý vì mới tạo đơn) */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <span style={{ fontSize: '11.5px', color: '#6B7280', fontWeight: '700', letterSpacing: '0.02em' }}>
                MÃ ĐƠN: #REQ-1048
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', margin: '2px 0 0' }}>
                Rơm rạ cuộn
              </h3>
            </div>
            <span style={{
              background: '#EFF6FF',
              color: '#2563EB',
              fontSize: '11px',
              fontWeight: '700',
              padding: '4px 10px',
              borderRadius: '12px'
            }}>
              Đang mở nhận đơn
            </span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '10px', 
            margin: '12px 0', 
            padding: '12px', 
            background: '#F9FAFB', 
            borderRadius: '10px',
            border: '1px solid #F3F4F6'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Khối lượng cần thu:</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#1A4329', marginTop: '2px' }}>
                50 tấn khô
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Tiêu chuẩn độ ẩm:</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', marginTop: '4px' }}>
                ≤ 15.0%
              </div>
            </div>
            <div style={{ gridColumn: 'span 2', borderTop: '1px solid #E5E7EB', paddingTop: '8px', marginTop: '2px' }}>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Điểm nhận hàng:</div>
              <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#1F2937', marginTop: '2px' }}>
                Nhà máy Đồng Tháp · KCN Bình Hòa, An Giang
              </div>
            </div>
          </div>

          {/* Trạng thái phát thông báo bình thường */}
          <div style={{
            fontSize: '11.5px',
            color: '#155724',
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            padding: '9px 12px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            lineHeight: '1.4'
          }}>
            <Clock size={16} color="#155724" style={{ flexShrink: 0 }} />
            <span>
              Yêu cầu sẽ được công khai trên hệ thống sàn AgriLog để các Đại lý & HTX trong khu vực nhận đơn và cam kết số lượng.
            </span>
          </div>
        </div>

        {/* Transportation & Fleet Dispatch Section (Doanh nghiệp lựa chọn) */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={17} color="#155724" />
              Phương án vận chuyển & điều phối xe
            </div>
          </div>
          
          <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '10px' }}>
            Doanh nghiệp chịu trách nhiệm điều phối xe. Chọn phương án lấy hàng:
          </div>

          {/* 2 Options Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
            
            {/* Option 1: Doanh nghiệp tự điều phối */}
            <div 
              onClick={() => setTransportMode('self')}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                border: transportMode === 'self' ? '2px solid #155724' : '1px solid #E5E7EB',
                background: transportMode === 'self' ? '#F0FDF4' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              <input 
                type="radio" 
                name="transport_mode" 
                checked={transportMode === 'self'} 
                onChange={() => setTransportMode('self')}
                style={{ accentColor: '#155724', marginTop: '3px' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: transportMode === 'self' ? '#155724' : '#111827' }}>
                  Doanh nghiệp tự điều phối đội xe
                </div>
                <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '2px', lineHeight: '1.4' }}>
                  Nhà máy tự cử đội xe nội bộ đến điểm thu gom lấy hàng sau khi đại lý xác nhận cam kết sản lượng.
                </div>
              </div>
            </div>

            {/* Option 2: Nhờ AgriLog hỗ trợ liên kết với các đội xe đối tác */}
            <div 
              onClick={() => setTransportMode('agrilog_connect')}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                border: transportMode === 'agrilog_connect' ? '2px solid #155724' : '1px solid #E5E7EB',
                background: transportMode === 'agrilog_connect' ? '#F0FDF4' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              <input 
                type="radio" 
                name="transport_mode" 
                checked={transportMode === 'agrilog_connect'} 
                onChange={() => setTransportMode('agrilog_connect')}
                style={{ accentColor: '#155724', marginTop: '3px' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: transportMode === 'agrilog_connect' ? '#155724' : '#111827', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Nhờ AgriLog hỗ trợ liên kết với các đội xe
                  <span style={{ background: '#DCFCE7', color: '#155724', fontSize: '9px', fontWeight: '800', padding: '1px 6px', borderRadius: '4px' }}>
                    Kết nối đối tác
                  </span>
                </div>
                <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '2px', lineHeight: '1.4' }}>
                  AgriLog không trực tiếp điều xe mà hỗ trợ liên kết với mạng lưới các đội xe đối tác vận tải sinh khối chuyên dụng để tối ưu lộ trình ghép chuyến đa điểm.
                </div>
              </div>
            </div>

          </div>

          {/* Conditional Detail Box based on selected mode */}
          {transportMode === 'self' ? (
            <div style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '8px 10px',
              fontSize: '11px',
              color: '#4B5563',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Building2 size={16} color="#4B5563" style={{ flexShrink: 0 }} />
              <span>
                Doanh nghiệp chủ động kế hoạch xe tải, xuất phát từ nhà máy đến các điểm thu gom khi có đại lý cam kết.
              </span>
            </div>
          ) : (
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '8px',
              padding: '8px 10px',
              fontSize: '11px',
              color: '#15803D'
            }}>
              <div style={{ fontWeight: '700', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} /> Hỗ trợ ghép xe qua mạng lưới đối tác liên kết:
              </div>
              <div style={{ lineHeight: '1.4' }}>
                Hệ thống sẽ kết nối với đội xe tải chuyên dụng gần nhất để ghép chuyến thu gom khi đại lý nhận đơn, giúp tối ưu cước phí và giảm phát thải CO₂.
              </div>
            </div>
          )}

        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
          <button 
            onClick={() => onNavigate('buyer_order_detail')}
            className="figma-btn-primary"
          >
            Xác nhận đăng yêu cầu & Vào chi tiết →
          </button>
        </div>

      </div>

    </div>
  );
}
