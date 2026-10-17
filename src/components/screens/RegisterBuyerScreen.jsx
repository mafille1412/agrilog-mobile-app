import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function RegisterBuyerScreen({ onNavigate, onBack }) {
  const [name, setName] = useState('Nhà máy Điện Sinh Khối Cần Thơ');
  const [taxCode, setTaxCode] = useState('1602058912');
  const [address, setAddress] = useState('KCN Trà Nóc, Quận Bình Thủy, TP. Cần Thơ');
  const [repName, setRepName] = useState('Trần Đình Nam');
  const [phone, setPhone] = useState('0918.456.789');
  const [demand, setDemand] = useState('3500');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('verification_pending');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('role_select') : onNavigate('role_select')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Thông tin doanh nghiệp
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          
          <div className="figma-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label className="figma-input-label">Tên doanh nghiệp *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Mã số thuế *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={taxCode} 
                onChange={(e) => setTaxCode(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Địa chỉ nhà máy tiếp nhận hàng *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="figma-input-label">Tên người đại diện *</label>
              <input 
                type="text" 
                className="figma-input" 
                value={repName} 
                onChange={(e) => setRepName(e.target.value)} 
                required 
              />
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
              <label className="figma-input-label">Nhu cầu thu mua dự kiến (tấn khô/tháng)</label>
              <input 
                type="number" 
                className="figma-input" 
                value={demand} 
                onChange={(e) => setDemand(e.target.value)} 
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
