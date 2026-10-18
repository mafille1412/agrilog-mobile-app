import React, { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';

export default function CreateRequestScreen({ onNavigate, onBack }) {
  const [biomassType, setBiomassType] = useState('straw');
  const [quantity, setQuantity] = useState('50');
  const [moisture, setMoisture] = useState('15');
  const [destination, setDestination] = useState('KCN Bình Hòa, Châu Thành, An Giang');
  const [impurity, setImpurity] = useState('2.0');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('matching');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('buyer_home') : onNavigate('buyer_home')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Yêu cầu thu mua
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          
          {/* Group 1: General Info */}
          <div className="figma-card">
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Thông tin yêu cầu
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label className="figma-input-label">Loại phụ phẩm *</label>
                <select 
                  className="figma-select"
                  value={biomassType}
                  onChange={(e) => setBiomassType(e.target.value)}
                >
                  <option value="straw">Rơm rạ cuộn</option>
                  <option value="bagasse">Bã mía sấy khô</option>
                </select>
              </div>

              <div>
                <label className="figma-input-label">Số lượng (tấn) *</label>
                <input 
                  type="number"
                  className="figma-input"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Nhập khối lượng"
                  required
                />
              </div>

              <div>
                <label className="figma-input-label">Độ ẩm mong muốn (%) *</label>
                <input 
                  type="text"
                  className="figma-input"
                  value={moisture}
                  onChange={(e) => setMoisture(e.target.value)}
                  placeholder="Ví dụ: ≤ 15%"
                  required
                />
              </div>

              <div>
                <label className="figma-input-label">Địa điểm nhận hàng *</label>
                <input 
                  type="text"
                  className="figma-input"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Nhập địa chỉ nhà máy tiếp nhận"
                  required
                />
              </div>
            </div>
          </div>

          {/* Group 2: Quality Specs */}
          <div className="figma-card">
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Tiêu chuẩn kỹ thuật
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label className="figma-input-label">Độ ẩm trần (≤ %)</label>
                <input 
                  type="text"
                  className="figma-input"
                  value={moisture}
                  readOnly
                  style={{ background: '#F9FAFB' }}
                />
              </div>
              <div>
                <label className="figma-input-label">Tạp chất (≤ %)</label>
                <input 
                  type="text"
                  className="figma-input"
                  value={impurity}
                  onChange={(e) => setImpurity(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Group 3: Logistics Fleet Dispatch by Enterprise */}
          <div className="figma-card">
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
              Phương án điều phối xe (Trách nhiệm Doanh nghiệp)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                background: '#FFFFFF'
              }}>
                <input 
                  type="radio" 
                  name="logisticsMode" 
                  defaultChecked 
                  style={{ accentColor: '#155724', marginTop: '2px' }} 
                />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>
                    Doanh nghiệp tự điều phối đội xe
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    Cử xe của nhà máy đến bãi thu gom của HTX theo lịch cam kết
                  </div>
                </div>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #A7F3D0',
                cursor: 'pointer',
                background: '#F0FDF4'
              }}>
                <input 
                  type="radio" 
                  name="logisticsMode" 
                  style={{ accentColor: '#155724', marginTop: '2px' }} 
                />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#155724' }}>
                    Nhờ AgriLog hỗ trợ điều phối xe ghép chuyến (Khuyên dùng)
                  </div>
                  <div style={{ fontSize: '11px', color: '#4B5563' }}>
                    Thuật toán AI ghép xe đa điểm giúp tiết kiệm 18.5% chi phí vận chuyển và giảm phát thải CO₂
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Alert Notice Box in Figma */}
          <div style={{
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '10px',
            padding: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '12px',
            color: '#1E40AF'
          }}>
            <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              Hệ thống sẽ tự động ghép nối các đại lý thu gom gần nhất, chất lượng từng lô hàng được kiểm định bằng thiết bị IoT và đối soát qua mã QR.
            </span>
          </div>

          {/* Bottom CTA Button */}
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
