import React from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Leaf, 
  Microscope, 
  FileText, 
  ExternalLink,
  Award
} from 'lucide-react';
import { INITIAL_BATCH_DETAILS } from '../data/agrilogData';

export default function PublicTraceabilityView({ onClose }) {
  const b = INITIAL_BATCH_DETAILS;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F0FDF4',
      overflowY: 'auto',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '560px',
        width: '100%',
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        border: '1px solid #DCFCE7',
        overflow: 'hidden'
      }}>
        {/* Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #064E3B, #047857)',
          padding: '24px 20px',
          color: 'white',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ArrowLeft size={16} />
          </button>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(52, 211, 153, 0.2)',
              color: '#A7F3D0',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              marginBottom: '8px'
            }}>
              <ShieldCheck size={14} /> CỔNG TRUY XUẤT NGUỒN GỐC CÔNG KHAI
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Hộ Chiếu Sinh Khối Số AgriLog</h2>
            <p style={{ fontSize: '12px', color: '#D1FAE5', marginTop: '2px', fontFamily: 'monospace' }}>
              MÃ ĐỊNH DANH: {b.batchId}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Verified Badge */}
          <div style={{
            background: '#ECFDF5',
            border: '1px solid #A7F3D0',
            borderRadius: '16px',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#064E3B' }}>
                Lô hàng đã được kiểm định & xác thực
              </div>
              <div style={{ fontSize: '11px', color: '#047857' }}>
                Số liệu đo từ thiết bị IoT đo độ ẩm AgriLog và định vị GPS tại hiện trường
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Thông tin chuỗi hành trình:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
              <div style={{ background: '#F9FAFB', padding: '10px', borderRadius: '10px' }}>
                <span style={{ color: '#6B7280', fontSize: '11px' }}>Phụ phẩm:</span>
                <div style={{ fontWeight: '700', color: '#111827' }}>{b.byproductName}</div>
              </div>
              <div style={{ background: '#F9FAFB', padding: '10px', borderRadius: '10px' }}>
                <span style={{ color: '#6B7280', fontSize: '11px' }}>Vùng thu gom:</span>
                <div style={{ fontWeight: '700', color: '#111827' }}>Thoại Sơn, An Giang</div>
              </div>
              <div style={{ background: '#F9FAFB', padding: '10px', borderRadius: '10px' }}>
                <span style={{ color: '#6B7280', fontSize: '11px' }}>Tọa độ GPS:</span>
                <div style={{ fontWeight: '700', color: '#111827', fontFamily: 'monospace' }}>{b.gpsCoords}</div>
              </div>
              <div style={{ background: '#F9FAFB', padding: '10px', borderRadius: '10px' }}>
                <span style={{ color: '#6B7280', fontSize: '11px' }}>Thời gian thu hoạch:</span>
                <div style={{ fontWeight: '700', color: '#111827' }}>{b.harvestDate}</div>
              </div>
            </div>
          </div>

          {/* IoT Quality Specs */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Chỉ số kỹ thuật đo bằng thiết bị IoT AgriLog:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
              <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '10px 6px', borderRadius: '10px' }}>
                <span style={{ fontSize: '10px', color: '#047857' }}>Độ ẩm đo IoT</span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#064E3B' }}>{b.averageMoisture}%</div>
                <span style={{ fontSize: '9px', color: '#059669' }}>≤ 15.0% Đạt</span>
              </div>
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '10px 6px', borderRadius: '10px' }}>
                <span style={{ fontSize: '10px', color: '#1D4ED8' }}>Sinh khối khô</span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E40AF' }}>{b.dryMatterIndex}%</div>
                <span style={{ fontSize: '9px', color: '#2563EB' }}>42.9 tấn khô</span>
              </div>
              <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '10px 6px', borderRadius: '10px' }}>
                <span style={{ fontSize: '10px', color: '#B45309' }}>Nhiệt trị</span>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#92400E' }}>{b.grossCalorificValue}</div>
                <span style={{ fontSize: '9px', color: '#D97706' }}>kcal/kg</span>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '16px',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: '#15803D', fontWeight: '700' }}>TÁC ĐỘNG MÔI TRƯỜNG:</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#065F46' }}>
                Giảm 5.95 tấn CO₂e
              </div>
              <div style={{ fontSize: '10px', color: '#166534' }}>
                Theo tiêu chuẩn IPCC 2006 (0.119 tCO2e/tấn rơm không đốt)
              </div>
            </div>
            <Award size={36} color="#16a34a" />
          </div>

          {/* Blockchain Footprint */}
          <div style={{ background: '#111827', color: 'white', borderRadius: '12px', padding: '12px', fontSize: '11px', fontFamily: 'monospace' }}>
            <div style={{ color: '#9CA3AF', fontSize: '10px', marginBottom: '4px' }}>BLOCKCHAIN AUDIT TRAIL:</div>
            <div>Mạng: {b.blockchain.network}</div>
            <div style={{ wordBreak: 'break-all', color: '#34D399', marginTop: '2px' }}>Hash: {b.blockchain.txHash}</div>
          </div>

          <button 
            onClick={onClose}
            className="btn-primary-mobile"
          >
            Quay lại Ứng dụng Mô phỏng
          </button>
        </div>
      </div>
    </div>
  );
}
