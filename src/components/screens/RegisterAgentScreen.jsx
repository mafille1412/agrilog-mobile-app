import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function RegisterAgentScreen({ onNavigate }) {
  const [coopName, setCoopName] = useState('HTX Nông nghiệp Tân Bình');
  const [repName, setRepName] = useState('Nguyễn Văn Được');
  const [cccd, setCccd] = useState('089094001234');
  const [phone, setPhone] = useState('0913.789.012');
  const [address, setAddress] = useState('Ấp Vọng Thê, Thoại Sơn, An Giang');
  const [capacity, setCapacity] = useState('1200');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('verification_pending');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('role_select')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Đăng ký đơn vị cung ứng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          
          <div className="figma-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label className="figma-input-label">Tên cơ sở / HTX thu gom *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={coopName} 
                onChange={(e) => setCoopName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Tên người đại diện pháp lý *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={repName} 
                onChange={(e) => setRepName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Số Căn cước công dân (CCCD / ĐDCN) *</label>
              <input 
                type="text" 
                maxLength={12}
                className="figma-input" 
                value={cccd} 
                onChange={(e) => setCccd(e.target.value)} 
                placeholder="Nhập 12 số CCCD người đại diện"
                required 
                style={{ letterSpacing: '0.04em', fontWeight: '600' }}
              />
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>
                Xác thực định danh chủ nhiệm HTX qua Cơ sở dữ liệu Quốc gia
              </div>
            </div>

            <div>
              <label className="figma-input-label">Số điện thoại liên hệ *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Địa bàn hoạt động / Bãi gom *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Năng lực cung ứng dự kiến (tấn/tháng)</label>
              <input 
                type="number" 
                className="figma-input" 
                value={capacity} 
                onChange={(e) => setCapacity(e.target.value)} 
              />
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
            <button type="submit" className="figma-btn-primary">
              Tiếp tục
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
