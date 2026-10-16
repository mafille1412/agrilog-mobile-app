import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Cpu, 
  Info, 
  CheckCircle2, 
  LayoutGrid, 
  ClipboardList, 
  Truck, 
  User 
} from 'lucide-react';

export default function AgentCreateBatchScreen({ onNavigate }) {
  const [byproduct, setByproduct] = useState('straw');
  const [weight, setWeight] = useState('20.0');
  const [moisture, setMoisture] = useState('14.2');
  const [harvestDate, setHarvestDate] = useState('16/10/2026');
  const [location, setLocation] = useState('Cánh đồng mẫu lớn xã Vọng Thê, Thoại Sơn, An Giang');
  const [notes, setNotes] = useState('Rơm cuộn máy Yanmar bánh xích, nén chặt đạt chuẩn 195 kg/m³');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('nir_testing');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Tạo lô hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Top Summary Card (Exact Figma Screen 2) */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
              Lô hàng mới
            </span>
            <span style={{
              background: '#FEF3C7',
              color: '#92400E',
              border: '1px solid #FDE68A',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '800'
            }}>
              Bản nháp
            </span>
          </div>

          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
            Phụ phẩm thu gom: <strong>Rơm lúa cuộn vụ Đông Xuân</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F3F4F6', paddingTop: '8px', fontSize: '12px' }}>
            <span>Khối lượng ước tính: <strong>{weight} tấn</strong></span>
            <span>Độ ẩm đo IoT: <strong style={{ color: '#155724' }}>{moisture}%</strong></span>
          </div>
        </div>

        {/* Form Inputs (Exact Figma Screen 2) */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          <div>
            <label className="figma-input-label">Vị trí thu gom *</label>
            <div style={{ position: 'relative' }}>
              <select 
                className="figma-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ paddingRight: '28px', background: '#FFFFFF' }}
              >
                <option value="Cánh đồng mẫu lớn xã Vọng Thê, Thoại Sơn, An Giang">
                  Cánh đồng xã Vọng Thê, Thoại Sơn, An Giang
                </option>
                <option value="Kho bãi tập kết HTX Tân Bình, Thoại Sơn">
                  Kho bãi tập kết HTX Tân Bình, Thoại Sơn
                </option>
                <option value="Cánh đồng Hòn Đất, Kiên Giang">
                  Cánh đồng Hòn Đất, Kiên Giang
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="figma-input-label">Ngày sẵn sàng giao *</label>
            <input 
              type="text"
              className="figma-input"
              value={harvestDate}
              onChange={(e) => setHarvestDate(e.target.value)}
              placeholder="DD/MM/YYYY"
              required
            />
          </div>

          <div>
            <label className="figma-input-label">Khối lượng ước tính (tấn) *</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                step="0.5"
                className="figma-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="20.0"
                required
              />
              <span style={{ position: 'absolute', right: '12px', top: '13px', fontSize: '13px', color: '#6B7280', fontWeight: '600' }}>
                tấn
              </span>
            </div>
          </div>

          <div>
            <label className="figma-input-label">Độ ẩm đo bằng thiết bị IoT (%) *</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                step="0.1"
                className="figma-input"
                value={moisture}
                onChange={(e) => setMoisture(e.target.value)}
                placeholder="14.2"
                required
              />
              <span style={{ position: 'absolute', right: '12px', top: '13px', fontSize: '13px', color: '#155724', fontWeight: '700' }}>
                %
              </span>
            </div>
          </div>

          {/* IoT Connected Card (Figma Screen 2) */}
          <div style={{
            background: '#ECFDF5',
            border: '1px solid #A7F3D0',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11.5px',
            color: '#065F46'
          }}>
            <Cpu size={16} color="#059669" style={{ flexShrink: 0 }} />
            <span>
              Thiết bị đo độ ẩm IoT: <strong>Đã kết nối BLE (AgriLog Sensor Pro v2.0 · Pin 94%)</strong>
            </span>
          </div>

          {/* Blue Info Card (Figma Screen 2) */}
          <div style={{
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '11.5px',
            color: '#1E40AF'
          }}>
            <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              Lô hàng sẽ được tự động khớp lệnh với các đơn hàng của doanh nghiệp có nhu cầu gần nhất trong khu vực.
            </span>
          </div>

          <div>
            <label className="figma-input-label">Ghi chú quy cách & phương tiện</label>
            <input 
              type="text"
              className="figma-input"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Rơm cuộn nén chặt..."
            />
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '10px', paddingBottom: '10px' }}>
            <button type="submit" className="figma-btn-primary">
              Đăng ký lô hàng & Đo kiểm IoT
            </button>
          </div>

        </form>

      </div>

      {/* Bottom Nav */}
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
        <button onClick={() => onNavigate('agent_home')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Trang chủ</span>
        </button>

        <button onClick={() => onNavigate('agent_create_batch')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ background: '#EAF5EC', color: '#155724', padding: '4px 16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#155724', fontWeight: '800' }}>Đơn hàng</span>
        </button>

        <button onClick={() => onNavigate('logistics_tracking')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Phương tiện</span>
        </button>

        <button onClick={() => onNavigate('account')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Cá nhân</span>
        </button>
      </div>

    </div>
  );
}
