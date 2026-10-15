import React, { useState } from 'react';
import { 
  Tractor, 
  Calendar, 
  MapPin, 
  Microscope, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles,
  AlertCircle,
  Truck,
  Plus
} from 'lucide-react';

export default function AgentHomeScreen({ onNavigate }) {
  const [committed, setCommitted] = useState(false);
  const [balerRequested, setBalerRequested] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: '#B45309',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Tractor size={20} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '800' }}>HTX Nông nghiệp Tân Bình</div>
            <div style={{ fontSize: '10px', color: '#FEF3C7' }}>Thoại Sơn · An Giang (Đại lý cấp 1)</div>
          </div>
        </div>

        <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.25)', padding: '3px 8px', borderRadius: '12px', fontWeight: '700' }}>
          Năm 1: Miễn phí
        </span>
      </div>

      <div className="phone-screen" style={{ padding: '14px' }}>
        
        {/* Urgent Match Order Card */}
        <div style={{
          background: 'white',
          border: '2px solid #D97706',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 4px 14px rgba(217, 119, 6, 0.15)',
          marginBottom: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <span style={{ fontSize: '10px', background: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: '10px', fontWeight: '800' }}>
                ĐƠN HÀNG GHÉP MỚI
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
                Cung ứng 30 tấn Rơm rạ cuộn
              </h3>
            </div>
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#B45309' }}>
              49.500.000 đ
            </div>
          </div>

          <div style={{ fontSize: '12px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
            <div>🏢 Bên mua: <strong>Nhà máy Điện Sinh Khối Erex An Giang</strong></div>
            <div>📍 Điểm giao: KCN Bình Hòa, Châu Thành (Cách 14.2 km)</div>
            <div>💧 Yêu cầu kỹ thuật: Độ ẩm ≤ 15%, tạp chất ≤ 2%</div>
            <div>⏳ Hạn giao hàng: <strong>18/10/2026</strong> (3 ngày nữa)</div>
          </div>

          {!committed ? (
            <button 
              onClick={() => setCommitted(true)}
              style={{
                width: '100%',
                background: '#D97706',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '12px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <CheckCircle2 size={16} /> Xác nhận cam kết cung cấp
            </button>
          ) : (
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '10px', borderRadius: '10px', color: '#065F46', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#059669" /> Đã cam kết thành công! Sẵn sàng lấy mẫu NIR.
            </div>
          )}
        </div>

        {/* Mobile Baler Service (Mạng lưới máy cuộn rơm lưu động) */}
        <div style={{
          background: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '14px',
          padding: '14px',
          marginBottom: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Tractor size={16} color="#D97706" /> Mạng lưới máy cuộn lưu động
            </h4>
            <span style={{ fontSize: '10px', color: '#059669', background: '#DCFCE7', padding: '2px 6px', borderRadius: '6px', fontWeight: '700' }}>
              Nén 200 kg/m³
            </span>
          </div>

          <p style={{ fontSize: '11px', color: '#6B7280', lineHeight: '1.4', marginBottom: '10px' }}>
            Nén mật độ rơm rạ từ 40 kg/m³ lên 195 kg/m³ ngay tại ruộng Thoại Sơn giúp chở được gấp 5 lần khối lượng trên mỗi chuyến xe.
          </p>

          <button 
            onClick={() => setBalerRequested(!balerRequested)}
            style={{
              width: '100%',
              background: balerRequested ? '#F3F4F6' : '#FFFBEB',
              color: balerRequested ? '#374151' : '#92400E',
              border: '1px solid #FCD34D',
              borderRadius: '8px',
              padding: '8px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {balerRequested ? '✓ Đã điều 1 máy cuộn Yanmar YH-850 tới ruộng' : '+ Đặt lịch máy cuộn rơm tự hành'}
          </button>
        </div>

        {/* NIR Field Testing Trigger */}
        <div style={{
          background: 'linear-gradient(135deg, #064E3B, #047857)',
          borderRadius: '16px',
          padding: '16px',
          color: 'white',
          boxShadow: '0 4px 14px rgba(6, 78, 59, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Microscope size={20} color="#34D399" />
            <h4 style={{ fontSize: '14px', fontWeight: '800' }}>Kiểm định chất lượng quang phổ NIR</h4>
          </div>
          <p style={{ fontSize: '12px', color: '#D1FAE5', lineHeight: '1.4', marginBottom: '14px' }}>
            Kỹ thuật viên AgriLog với đầu dò mũi giáo Spear Probe 1.2m đã có mặt tại bãi tập kết để đo 3 điểm và khởi tạo mã Batch ID.
          </p>
          <button 
            onClick={() => onNavigate('nir_testing')}
            style={{
              width: '100%',
              background: '#FFFFFF',
              color: '#064E3B',
              border: 'none',
              borderRadius: '10px',
              padding: '12px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            Mở trạm đo kiểm quang phổ NIR <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
