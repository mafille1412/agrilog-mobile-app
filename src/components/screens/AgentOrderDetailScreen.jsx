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

export default function AgentOrderDetailScreen({ onNavigate, onBack }) {
  const [commitWeight, setCommitWeight] = useState(20);
  const [deliveryDate, setDeliveryDate] = useState('16/10/2026');
  const [depotLocation, setDepotLocation] = useState('Kho bãi HTX Tân Bình, Thoại Sơn, An Giang');
  const [notes, setNotes] = useState('Rơm cuộn bánh xích Yanmar, nén chặt đạt chuẩn tỷ trọng');
  const [requestBaler, setRequestBaler] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const pricePerTon = 1500000; // 1.500.000 đ / tấn khô
  const isWeightValid = commitWeight >= 3 && commitWeight <= 70;
  const estimatedRevenue = commitWeight * pricePerTon;
  const depositAmount = estimatedRevenue * 0.3; // 30% cọc
  const remainingAmount = estimatedRevenue - depositAmount;

  const handleCommitSubmit = (e) => {
    e.preventDefault();
    if (!isWeightValid) return;
    onNavigate('agent_commit_success');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('agent_home') : onNavigate('agent_home')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Chi tiết đơn hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Urgent Countdown Alert (Exact Figma Screen 5) */}
        <div style={{
          background: '#FFFBEB',
          border: '1px solid #FDE68A',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
          fontSize: '12px',
          color: '#B45309',
          fontWeight: '700'
        }}>
          <span style={{ fontSize: '15px' }}>⏰</span>
          <span>Đơn hàng sắp hết hạn nhận cam kết — còn 2 giờ</span>
        </div>

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
            Nhà máy Điện Sinh khối Cần Thơ · KCN Trà Nóc, TP. Cần Thơ
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
            Doanh nghiệp thanh toán trực tiếp qua Escrow theo từng mốc
          </div>
        </div>

        {/* Commitment Form (Exact Figma Screen 4, 6, 7, 8) */}
        <form onSubmit={handleCommitSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Weight Input with Validation States (Figma Screen 6) */}
          <div>
            <label className="figma-input-label">Khối lượng cam kết cung cấp (tấn) *</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                step="0.5"
                className="figma-input"
                style={{
                  borderColor: isWeightValid ? '#E5E7EB' : '#EF4444',
                  background: isWeightValid ? '#FFFFFF' : '#FEF2F2'
                }}
                value={commitWeight}
                onChange={(e) => setCommitWeight(Number(e.target.value))}
                required
              />
              <span style={{ position: 'absolute', right: '12px', top: '13px', fontSize: '13px', color: '#6B7280', fontWeight: '600' }}>
                tấn khô
              </span>
            </div>
            
            {!isWeightValid ? (
              <div style={{ marginTop: '5px' }}>
                <div style={{ fontSize: '11px', color: '#DC2626', fontWeight: '700' }}>
                  ⚠️ Khối lượng cam kết tối thiểu phải từ 3 tấn trở lên
                </div>
                <div style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  fontSize: '11px',
                  color: '#1D4ED8',
                  marginTop: '5px'
                }}>
                  ℹ️ Gom chung với HTX lân cận? Hệ thống sẽ tự động ghép chuyến.
                </div>
              </div>
            ) : (
              <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '3px' }}>
                Tối thiểu 3 tấn · Tối đa 70 tấn theo chỉ tiêu mở
              </div>
            )}
          </div>

          {/* Delivery Date */}
          <div>
            <label className="figma-input-label">Ngày dự kiến giao hàng *</label>
            <input 
              type="text"
              className="figma-input"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              placeholder="16/10/2026"
              required
            />
            <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '3px' }}>
              Trước hoặc đúng hạn giao hàng của doanh nghiệp (16/10/2026)
            </div>
          </div>

          {/* Depot Location */}
          <div>
            <label className="figma-input-label">Điểm tập kết hàng *</label>
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

          {/* Logistics Dispatch Info (Trách nhiệm của Doanh nghiệp / 2 Lựa chọn) */}
          <div style={{
            background: '#F0F9FF',
            border: '1px solid #BAE6FD',
            borderRadius: '12px',
            padding: '12px 14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369A1', fontWeight: '800', fontSize: '12.5px', marginBottom: '4px' }}>
              <Truck size={17} />
              <span>Điều phối vận chuyển (Thuộc trách nhiệm Doanh nghiệp)</span>
            </div>
            <div style={{ fontSize: '11px', color: '#334155', lineHeight: '1.45' }}>
              Việc điều phối xe hoàn toàn thuộc về Doanh nghiệp mua với <strong>2 lựa chọn</strong>:
              <div style={{ marginTop: '4px', paddingLeft: '4px' }}>
                • <strong>Lựa chọn 1:</strong> Doanh nghiệp tự điều phối đội xe riêng đến lấy hàng tại bãi.<br />
                • <strong>Lựa chọn 2:</strong> Nhờ sự hỗ trợ từ AgriLog Logistics để tối ưu hóa ghép chuyến đa điểm.
              </div>
              <div style={{ marginTop: '4px', color: '#0369A1' }}>
                HTX chỉ cần chuẩn bị sẵn rơm tại kho bãi và đối soát mã QR IoT khi xe tới.
              </div>
            </div>
            <div style={{ marginTop: '6px', fontSize: '11px', color: '#0284C7', fontWeight: '700' }}>
              ⏱ Dự kiến xe tải 15 tấn của Doanh nghiệp tới bãi: <strong>08:30 · 16/10/2026</strong>
            </div>
          </div>

          <div>
            <label className="figma-input-label">Ghi chú thêm về lô hàng (tùy chọn)</label>
            <input 
              type="text"
              className="figma-input"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Revenue Calculation Box (Exact Figma Screen 4 & 5) */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '12px',
            padding: '12px 14px',
            fontSize: '11.5px'
          }}>
            <div style={{ fontSize: '11px', color: '#166534', fontWeight: '600' }}>
              Doanh thu ước tính:
            </div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#155724', margin: '2px 0 4px' }}>
              {isWeightValid ? estimatedRevenue.toLocaleString('vi-VN') : '---'} đ
            </div>
            
            <div style={{ fontSize: '11px', color: '#4B5563', lineHeight: '1.5', borderTop: '1px solid #DCFCE7', paddingTop: '6px', marginTop: '4px' }}>
              <div>• Tạm ứng cọc ký quỹ (30%): <strong>{isWeightValid ? depositAmount.toLocaleString('vi-VN') : '---'} đ</strong></div>
              <div>• Thanh toán còn lại (70%): <strong>{isWeightValid ? remainingAmount.toLocaleString('vi-VN') : '---'} đ</strong></div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '3px' }}>
                * Tiền cọc được khóa vào tài khoản ký quỹ Escrow và giải ngân ngay khi xe lấy hàng xác nhận mã QR.
              </div>
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
              Tôi cam kết cung ứng đúng khối lượng và phẩm chất (độ ẩm ≤ 15%) theo thỏa thuận. Chấp nhận đối soát tự động qua thiết bị IoT.
            </span>
          </label>

          {/* Submit Button (Figma Screen 4 & 5) */}
          <div style={{ marginTop: '6px', paddingBottom: '12px' }}>
            <button 
              type="submit" 
              className="figma-btn-primary"
              disabled={!agreed || !isWeightValid}
              style={{ opacity: agreed && isWeightValid ? 1 : 0.5 }}
            >
              Xác nhận cam kết
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

        <button onClick={() => onNavigate('agent_batches')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Lô hàng</span>
        </button>

        <button onClick={() => onNavigate('agent_completed_order')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Đã giao</span>
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
