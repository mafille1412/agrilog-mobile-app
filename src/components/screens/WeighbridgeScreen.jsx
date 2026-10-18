import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Award, 
  ThumbsUp, 
  MessageSquare,
  Building2
} from 'lucide-react';

export default function WeighbridgeScreen({ onNavigate, onBack }) {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('Rơm cuộn nén chặt, khô đều đạt độ ẩm 14.2%, tài xế quét mã QR IoT tại bãi nhanh chóng.');
  const [criteria, setCriteria] = useState({
    moisture: true,
    punctual: true,
    packaging: true,
    qrTraceable: true
  });
  const [isReviewed, setIsReviewed] = useState(false);

  const toggleCriteria = (key) => {
    setCriteria(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('buyer_order_detail') : onNavigate('buyer_order_detail')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Giao nhận & Đối soát
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Success Icon in Figma */}
        <div style={{ textAlign: 'center', margin: '10px 0 12px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px',
            boxShadow: '0 4px 14px rgba(21, 87, 36, 0.2)'
          }}>
            <CheckCircle2 size={30} />
          </div>

          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '2px' }}>
            Xác nhận giao hàng thành công
          </h2>
          <p style={{ fontSize: '11.5px', color: '#6B7280', margin: 0 }}>
            Doanh nghiệp đã hoàn tất cân điện tử và nghiệm thu tại cổng nhà máy
          </p>
        </div>

        {/* Detailed Settlement Breakdown Card in Figma */}
        <div className="figma-card" style={{ marginBottom: '12px', padding: '14px' }}>
          <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px', marginBottom: '8px' }}>
            Biên bản nghiệm thu tại trạm cân
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mã lô hàng:</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>AGL-2026-KG0912</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Đại lý cung ứng:</span>
              <strong style={{ color: '#111827' }}>HTX Nông nghiệp Tân Bình</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Khối lượng tươi thực tế:</span>
              <strong style={{ color: '#111827' }}>50.000 kg (50 tấn)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Độ ẩm đo tại cổng nhà máy:</span>
              <strong style={{ color: '#155724' }}>14.2% (Đạt tiêu chuẩn ≤ 15%)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Đơn giá thanh toán:</span>
              <strong style={{ color: '#111827' }}>1.650.000 đ / tấn</strong>
            </div>

            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '6px', marginTop: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '800', color: '#155724' }}>TỔNG TIỀN NGHIỆM THU:</span>
              <span style={{ fontSize: '17px', fontWeight: '800', color: '#155724' }}>
                82.500.000 đ
              </span>
            </div>
          </div>
        </div>

        {/* REQUIREMENT 2: Enterprise Rates Agent After Successful Delivery */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={16} color="#D97706" />
              Đánh giá Đại lý cung ứng
            </div>
            <span style={{
              background: '#FEF3C7',
              color: '#B45309',
              fontSize: '10px',
              fontWeight: '800',
              padding: '2px 8px',
              borderRadius: '10px'
            }}>
              HTX Tân Bình
            </span>
          </div>

          <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '10px' }}>
            Doanh nghiệp đánh giá chất lượng nguyên liệu và sự hợp tác của đại lý để cộng điểm uy tín B2B:
          </div>

          {/* Interactive 5-Star Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', background: '#F9FAFB', padding: '8px', borderRadius: '10px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  transition: 'transform 0.15s'
                }}
              >
                <Star
                  size={24}
                  fill={star <= rating ? '#F59E0B' : 'none'}
                  color={star <= rating ? '#F59E0B' : '#D1D5DB'}
                />
              </button>
            ))}
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#B45309', marginLeft: '6px' }}>
              {rating}/5 Sao
            </span>
          </div>

          {/* Criteria Checkboxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px', fontSize: '10.5px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#374151' }}>
              <input 
                type="checkbox" 
                checked={criteria.moisture} 
                onChange={() => toggleCriteria('moisture')}
                style={{ accentColor: '#155724' }} 
              />
              Độ ẩm đạt chuẩn ≤ 15%
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#374151' }}>
              <input 
                type="checkbox" 
                checked={criteria.punctual} 
                onChange={() => toggleCriteria('punctual')}
                style={{ accentColor: '#155724' }} 
              />
              Giao hàng đúng hẹn
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#374151' }}>
              <input 
                type="checkbox" 
                checked={criteria.packaging} 
                onChange={() => toggleCriteria('packaging')}
                style={{ accentColor: '#155724' }} 
              />
              Rơm nén đạt tỷ trọng
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#374151' }}>
              <input 
                type="checkbox" 
                checked={criteria.qrTraceable} 
                onChange={() => toggleCriteria('qrTraceable')}
                style={{ accentColor: '#155724' }} 
              />
              Đầy đủ tem QR IoT
            </label>
          </div>

          {/* Feedback Text Input */}
          <div>
            <div style={{ fontSize: '10.5px', color: '#6B7280', marginBottom: '3px', fontWeight: '600' }}>
              Nhận xét của Doanh nghiệp (tùy chọn):
            </div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={2}
              style={{
                width: '100%',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                padding: '6px 8px',
                fontSize: '11px',
                color: '#1F2937',
                fontFamily: 'inherit',
                resize: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Action Button: Enterprise Confirms & Proceeds to Escrow Release */}
        <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
          <button onClick={() => onNavigate('escrow_settlement')} className="figma-btn-primary">
            Xác nhận đánh giá & Chuyển sang Giải ngân Escrow →
          </button>
        </div>

      </div>

    </div>
  );
}
