import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Truck, 
  Building2, 
  Link2, 
  Sparkles,
  Info
} from 'lucide-react';

export default function MatchingScreen({ onNavigate, onBack, currentRole }) {
  const [selected, setSelected] = useState([1, 2]);
  // 2 Lựa chọn điều phối xe cho Doanh nghiệp:
  // 'self': Doanh nghiệp tự điều phối đội xe
  // 'agrilog_connect': Nhờ AgriLog hỗ trợ liên kết với các đội xe đối tác (AgriLog không trực tiếp điều xe)
  const [transportMode, setTransportMode] = useState('self');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('create_request') : onNavigate('create_request')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Khớp lệnh & đại lý đề xuất
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Green Top Banner in Figma */}
        <div style={{
          background: '#155724',
          color: 'white',
          borderRadius: '12px',
          padding: '14px 16px',
          marginBottom: '14px'
        }}>
          <div style={{ fontSize: '14px', fontWeight: '800', marginBottom: '4px' }}>
            Đã tìm thấy 2 đại lý phù hợp nhất
          </div>
          <div style={{ fontSize: '12px', color: '#D1FAE5' }}>
            Tổng sản lượng: 50 tấn · Đảm bảo giao đúng tiến độ
          </div>
        </div>

        {/* List of Matched Dealers in Figma */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          
          {/* Dealer 1 */}
          <div className="figma-card" style={{ border: '2px solid #155724' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  HTX Nông nghiệp Tân Bình
                </h4>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} color="#155724" /> Thoại Sơn, An Giang · Cách 14.2 km
                </div>
              </div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={14} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', borderTop: '1px solid #F3F4F6', paddingTop: '8px', marginTop: '6px' }}>
              <span>Cung cấp: <strong>30 tấn</strong></span>
              <span>Độ ẩm TB: <strong style={{ color: '#155724' }}>13.8%</strong></span>
              <span className="badge-green">IoT Đạt chuẩn</span>
            </div>
          </div>

          {/* Dealer 2 */}
          <div className="figma-card" style={{ border: '2px solid #155724' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Cơ sở Thu gom Út Triệu
                </h4>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} color="#155724" /> Hòn Đất, Kiên Giang · Cách 38.5 km
                </div>
              </div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={14} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', borderTop: '1px solid #F3F4F6', paddingTop: '8px', marginTop: '6px' }}>
              <span>Cung cấp: <strong>20 tấn</strong></span>
              <span>Độ ẩm TB: <strong style={{ color: '#155724' }}>14.5%</strong></span>
              <span className="badge-green">IoT Đạt chuẩn</span>
            </div>
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
                  Nhà máy tự cử đội xe nội bộ đến 2 điểm thu gom lấy hàng. Đại lý sẽ đối soát mã QR IoT khi xe của doanh nghiệp tới bãi.
                </div>
              </div>
            </div>

            {/* Option 2: Nhờ AgriLog hỗ trợ liên kết các đội xe đối tác */}
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
                Doanh nghiệp chủ động kế hoạch xe tải, xuất phát từ nhà máy đến kho HTX Tân Bình và cơ sở Út Triệu.
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
                <Sparkles size={14} /> Lộ trình ghép xe 1 chuyến qua mạng lưới liên kết:
              </div>
              <div style={{ lineHeight: '1.4' }}>
                Đội xe đối tác liên kết sẽ ghé HTX Tân Bình (30t) → Ghép Cơ sở Út Triệu (20t) → Giao Nhà máy. Tiết kiệm <strong>18.5% chi phí cước xe</strong>.
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
            Xác nhận & Vào chi tiết đơn hàng →
          </button>
        </div>

      </div>

    </div>
  );
}
