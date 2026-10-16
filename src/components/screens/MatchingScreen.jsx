import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, MapPin, Truck } from 'lucide-react';

export default function MatchingScreen({ onNavigate }) {
  const [selected, setSelected] = useState([1, 2]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('create_request')}>
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
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
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
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
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

        {/* Combined Multi-stop Route Box */}
        <div className="figma-card" style={{ background: '#F0FDF4', borderColor: '#BBF7D0', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', color: '#166534', marginBottom: '6px' }}>
            <Truck size={16} /> Lộ trình ghép xe 1 chuyến
          </div>
          <p style={{ fontSize: '12px', color: '#15803D', lineHeight: '1.4' }}>
            Ghé HTX Tân Bình (30 tấn) → Ghép Cơ sở Út Triệu (20 tấn) → Giao Nhà máy Điện Sinh khối Cần Thơ. Tiết kiệm <strong>18.5% chi phí cước xe</strong>.
          </p>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button 
            onClick={() => onNavigate('batch_qr')}
            className="figma-btn-primary"
          >
            Xác nhận ghép đơn
          </button>
        </div>

      </div>

    </div>
  );
}
