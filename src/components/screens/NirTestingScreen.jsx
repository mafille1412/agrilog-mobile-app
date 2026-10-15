import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function NirTestingScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('buyer_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Chi tiết lô hàng & kết quả NIR
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Pass Badge Card in Figma */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '20px 16px', marginBottom: '14px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px'
          }}>
            <CheckCircle2 size={30} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
            ĐẠT CHUẨN (PASS)
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
            Mã lô: AGL-2026-KG0912-ST01 · Đo sâu 3 điểm
          </div>
        </div>

        {/* 4 Metrics Grid in Figma */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
          
          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Độ ẩm NIR</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#155724', marginTop: '4px' }}>
              14.2%
            </div>
            <div style={{ fontSize: '10px', color: '#059669', marginTop: '2px' }}>Tiêu chuẩn: ≤ 15.0%</div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Sinh khối khô</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
              85.8%
            </div>
            <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>Chất khô thực tế</div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Tạp chất đất cát</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginTop: '4px' }}>
              1.8%
            </div>
            <div style={{ fontSize: '10px', color: '#059669', marginTop: '2px' }}>Tiêu chuẩn: ≤ 2.0%</div>
          </div>

          <div className="figma-card">
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Nhiệt trị</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#D97706', marginTop: '4px' }}>
              3,650
            </div>
            <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>kcal/kg (Lò sinh khối)</div>
          </div>

        </div>

        {/* Device & Location Box */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>
            Thông số đo lường thực địa
          </div>
          <div style={{ fontSize: '11px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div>🔬 Thiết bị: <strong>NIR Spear Probe (Mũi giáo 1.2m - nắp Sapphire)</strong></div>
            <div>📍 Tọa độ GPS: <strong>10.2294° N, 105.1432° E (Thoại Sơn)</strong></div>
            <div>🛡️ Chống gian lận: <strong>Khóa GPS hợp lệ & AI dị thường phổ đạt chuẩn</strong></div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={() => onNavigate('batch_qr')} className="figma-btn-primary">
            Xác nhận lô hàng & Cấp Batch ID
          </button>
        </div>

      </div>

    </div>
  );
}
