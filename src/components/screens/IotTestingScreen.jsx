import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin, Cpu, Wifi, Battery, RefreshCw, Radio, Check } from 'lucide-react';
import { INITIAL_BATCH_DETAILS } from '../../data/agrilogData';

export default function IotTestingScreen({ onNavigate, onBack }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleReTest = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('agent_batches') : onNavigate('agent_batches')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Kiểm định chất lượng bằng IoT
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* IoT Device Connectivity Status Card */}
        <div style={{
          background: 'linear-gradient(135deg, #064E3B, #065F46)',
          borderRadius: '16px',
          padding: '16px',
          color: 'white',
          marginBottom: '14px',
          boxShadow: '0 4px 12px rgba(6, 78, 59, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={18} color="#34D399" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '800' }}>Thiết bị đo độ ẩm IoT AgriLog</div>
                <div style={{ fontSize: '10px', color: '#A7F3D0' }}>Model: AgriLog Sensor Pro v2.0</div>
              </div>
            </div>
            <div style={{
              background: '#047857',
              padding: '4px 8px',
              borderRadius: '20px',
              fontSize: '10px',
              fontWeight: '700',
              color: '#34D399',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
              Đã kết nối
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.15)',
            borderRadius: '10px',
            padding: '8px 10px',
            fontSize: '10px'
          }}>
            <div>
              <div style={{ color: '#A7F3D0' }}>Kết nối:</div>
              <div style={{ fontWeight: '700', marginTop: '1px' }}>Bluetooth 5.0</div>
            </div>
            <div>
              <div style={{ color: '#A7F3D0' }}>Pin thiết bị:</div>
              <div style={{ fontWeight: '700', marginTop: '1px', color: '#34D399' }}>94% · Đạt</div>
            </div>
            <div>
              <div style={{ color: '#A7F3D0' }}>Hiệu chuẩn:</div>
              <div style={{ fontWeight: '700', marginTop: '1px' }}>ISO/IEC 17025</div>
            </div>
          </div>
        </div>

        {/* Pass Badge Card */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '16px', marginBottom: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px'
          }}>
            <CheckCircle2 size={26} />
          </div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#155724' }}>
            ĐẠT CHUẨN ĐỘ ẨM HỢP ĐỒNG (PASS)
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
            Mã lô: {INITIAL_BATCH_DETAILS.batchId} · Cảm biến IoT 3 điểm
          </div>
        </div>

        {/* 4 Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
          
          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Độ ẩm đo IoT</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#155724', marginTop: '4px' }}>
              14.2%
            </div>
            <div style={{ fontSize: '10px', color: '#059669', marginTop: '2px' }}>
              Tiêu chuẩn hợp đồng: ≤ 15.0%
            </div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Sinh khối khô ước tính</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
              85.8%
            </div>
            <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>
              Chất khô thực tế sau sấy
            </div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Nhiệt độ cảm biến</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
              31.8°C
            </div>
            <div style={{ fontSize: '10px', color: '#059669', marginTop: '2px' }}>
              Đã bù trừ nhiệt môi trường
            </div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Tạp chất đất cát</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
              1.8%
            </div>
            <div style={{ fontSize: '10px', color: '#059669', marginTop: '2px' }}>
              Tiêu chuẩn: ≤ 2.0%
            </div>
          </div>

        </div>

        {/* 3-Point Probe Sampling Details */}
        <div className="figma-card" style={{ marginBottom: '14px', padding: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#111827' }}>
              Kết quả đo cảm biến 3 điểm lấy mẫu
            </div>
            <button 
              onClick={handleReTest}
              style={{
                background: 'none',
                border: 'none',
                color: '#155724',
                fontSize: '11px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={12} className={isScanning ? 'animate-spin' : ''} />
              Đo lại
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {INITIAL_BATCH_DETAILS.measurements.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#1F2937' }}>{m.point}</div>
                  <div style={{ fontSize: '10px', color: '#6B7280' }}>Nhiệt độ: {m.temp} · Thời gian: {m.timeSec}s</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#155724' }}>{m.moisture}%</div>
                  <div style={{ fontSize: '9px', color: '#059669', fontWeight: '600' }}>✓ Đạt</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Integrity & Origin Proof */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
            Thông số định danh & Chống gian lận
          </div>
          <div style={{ fontSize: '11px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#059669" />
              <span>Tọa độ GPS: <strong>10.2294° N, 105.1432° E (Cánh đồng Thoại Sơn)</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#1E40AF" />
              <span>Cơ chế bảo vệ: <strong>Dữ liệu chỉ thêm (Append-Only), không thể chỉnh sửa</strong></span>
            </div>
            <div style={{
              background: '#EFF6FF',
              border: '1px dashed #93C5FD',
              borderRadius: '6px',
              padding: '6px 8px',
              fontSize: '10px',
              fontFamily: 'monospace',
              color: '#1E40AF',
              wordBreak: 'break-all'
            }}>
              SHA-256: 0x9d4e76a54b3c21dfa8349bb7e5c467a1c890f5a7d32c914e6b18fa9074c5321a
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => onNavigate('agent_batches')} className="figma-btn-primary">
            Lưu kết quả kiểm định & Xem các lô hàng
          </button>
          <button 
            onClick={() => onNavigate('batch_qr')}
            style={{
              background: '#FFFFFF',
              border: '1px solid #155724',
              color: '#155724',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '12.5px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Tạo & Xem tem QR định danh lô hàng ›
          </button>
        </div>

      </div>

    </div>
  );
}
