import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Info, 
  CheckCircle2, 
  Truck, 
  Scale, 
  ShieldCheck, 
  DollarSign, 
  LayoutGrid, 
  ClipboardList, 
  User 
} from 'lucide-react';

export default function AgentOrderDetailScreen({ onNavigate }) {
  const [commitWeight, setCommitWeight] = useState(20);
  const [deliveryDate, setDeliveryDate] = useState('16/10/2026');
  const [depotLocation, setDepotLocation] = useState('Kho bãi HTX Tân Bình, Thoại Sơn, An Giang');
  const [notes, setNotes] = useState('Rơm cuộn bánh xích Yanmar, nén chặt đạt chuẩn tỷ trọng');
  const [agreed, setAgreed] = useState(true);

  const pricePerTon = 1500000; // 1.500.000 đ / tấn khô
  const estimatedRevenue = commitWeight * pricePerTon;
  const depositAmount = estimatedRevenue * 0.3; // 30% cọc
  const remainingAmount = estimatedRevenue - depositAmount;

  const handleCommitSubmit = (e) => {
    e.preventDefault();
    onNavigate('agent_commit_success');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Chi tiết đơn hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Order Details Card (Exact Figma Screen 3) */}
        <div className="figma-card" style={{ marginBottom: '12px', padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
              REQ-1048 · Rơm rạ
            </span>
            <span style={{
              background: '#ECFDF5',
              color: '#047857',
              border: '1px solid #A7F3D0',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '800'
            }}>
              Đang mở khớp lệnh
            </span>
          </div>

          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '10px' }}>
            GreenGrid Energy · Nhà máy Sangrur, KCN Cần Thơ
          </div>

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
                70 tấn
              </div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>Còn thiếu</div>
            </div>

            <div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
                ≤ 15%
              </div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>Độ ẩm tối đa</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#6B7280', borderTop: '1px solid #F3F4F6', paddingTop: '8px' }}>
            <span>Hạn giao: 16/10/2026</span>
            <span>Khoảng cách: 14 km</span>
          </div>
        </div>

        {/* Guaranteed Price Card (Figma Screen 3 & 4) */}
        <div style={{
          background: 'linear-gradient(135deg, #155724, #0B3D18)',
          borderRadius: '14px',
          padding: '12px 16px',
          color: 'white',
          marginBottom: '12px',
          boxShadow: '0 4px 12px rgba(21, 87, 36, 0.15)'
        }}>
          <div style={{ fontSize: '11px', color: '#A7F3D0', fontWeight: '600' }}>
            Giá thu mua cam kết (Bảo chứng qua sàn):
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', marginTop: '2px' }}>
            1.500.000 đ <span style={{ fontSize: '13px', fontWeight: '500', opacity: 0.9 }}>/ tấn khô</span>
          </div>
          <div style={{ fontSize: '10.5px', color: '#D1FAE5', marginTop: '2px' }}>
            Doanh nghiệp thanh toán trực tiếp theo từng mốc hợp đồng
          </div>
        </div>

        {/* Commitment Form (Exact Figma Screen 4) */}
        <form onSubmit={handleCommitSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          <div>
            <label className="figma-input-label">Khối lượng cam kết cung cấp (tấn) *</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                min="3"
                max="70"
                step="1"
                className="figma-input"
                value={commitWeight}
                onChange={(e) => setCommitWeight(Number(e.target.value))}
                required
              />
              <span style={{ position: 'absolute', right: '12px', top: '13px', fontSize: '13px', color: '#6B7280', fontWeight: '600' }}>
                tấn
              </span>
            </div>
            <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '3px' }}>
              Quy định sàn: Mỗi đại lý cung cấp tối thiểu 3 tấn
            </div>
          </div>

          <div>
            <label className="figma-input-label">Ngày sẵn sàng giao hàng *</label>
            <input 
              type="text"
              className="figma-input"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              placeholder="DD/MM/YYYY"
              required
            />
          </div>

          <div>
            <label className="figma-input-label">Vị trí kho bãi tập kết hàng *</label>
            <select 
              className="figma-input"
              value={depotLocation}
              onChange={(e) => setDepotLocation(e.target.value)}
              style={{ background: '#FFFFFF' }}
            >
              <option value="Kho bãi HTX Tân Bình, Thoại Sơn, An Giang">
                Kho bãi HTX Tân Bình, Thoại Sơn, An Giang
              </option>
              <option value="Cánh đồng xã Vọng Thê, Thoại Sơn">
                Cánh đồng xã Vọng Thê, Thoại Sơn
              </option>
            </select>
          </div>

          <div>
            <label className="figma-input-label">Quy cách đóng gói & bảo quản</label>
            <input 
              type="text"
              className="figma-input"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Revenue Calculation Box (Exact Figma Screen 4) */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '12px',
            padding: '12px 14px',
            fontSize: '11.5px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ color: '#166534', fontWeight: '600' }}>Dự toán doanh thu nhận được:</span>
              <strong style={{ fontSize: '16px', color: '#155724' }}>
                {estimatedRevenue.toLocaleString('vi-VN')} đ
              </strong>
            </div>
            
            <div style={{ fontSize: '10.5px', color: '#4B5563', lineHeight: '1.4', borderTop: '1px solid #DCFCE7', paddingTop: '6px', marginTop: '4px' }}>
              <div>• Tạm ứng cọc trực tiếp: <strong>{depositAmount.toLocaleString('vi-VN')} đ (30%)</strong></div>
              <div>• Phần còn lại: <strong>{remainingAmount.toLocaleString('vi-VN')} đ</strong> (thanh toán sau khi cân điện tử và đối soát QR)</div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '11px', color: '#4B5563', cursor: 'pointer', marginTop: '2px' }}>
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)} 
              required
              style={{ accentColor: '#155724', marginTop: '2px' }} 
            />
            <span>
              Tôi cam kết phụ phẩm đạt tiêu chuẩn độ ẩm ≤ 15% (kiểm định bằng thiết bị IoT AgriLog) và sẵn sàng giao đúng thời gian cam kết.
            </span>
          </label>

          {/* Submit Button (Figma Screen 4) */}
          <div style={{ marginTop: '6px', paddingBottom: '12px' }}>
            <button 
              type="submit" 
              className="figma-btn-primary"
              disabled={!agreed}
              style={{ opacity: agreed ? 1 : 0.6 }}
            >
              Xác nhận cam kết cung ứng
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

        <button onClick={() => onNavigate('agent_order_detail')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
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
