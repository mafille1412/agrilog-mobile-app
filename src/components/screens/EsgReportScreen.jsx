import React from 'react';
import { ArrowLeft, Award, Download, Home } from 'lucide-react';

export default function EsgReportScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('escrow_settlement')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Báo cáo MRV Carbon & ESG
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Certificate Card in Figma */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '24px 16px', marginBottom: '14px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Award size={32} />
          </div>

          <div style={{ fontSize: '11px', color: '#155724', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            CHỨNG NHẬN GIẢM PHÁT THẢI
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#111827', margin: '4px 0' }}>
            5.95 TẤN CO₂e
          </div>
          <p style={{ fontSize: '12px', color: '#6B7280', maxWidth: '280px', margin: '0 auto', lineHeight: '1.4' }}>
            Giảm phát thải trực tiếp từ việc thay thế hành vi đốt 50 tấn rơm rạ ngoài đồng vụ Đông Xuân
          </p>

          <div style={{ display: 'inline-block', marginTop: '10px', background: '#EAF5EC', color: '#155724', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
            Chuẩn IPCC 2006: 0.119 tCO₂e / tấn
          </div>
        </div>

        {/* Audit Compliance Card */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px', marginBottom: '10px' }}>
            Dữ liệu kiểm toán chuỗi giá trị:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Doanh nghiệp:</span>
              <strong style={{ color: '#111827' }}>Nhà máy Erex An Giang</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Vùng thu gom:</span>
              <strong style={{ color: '#111827' }}>Thoại Sơn & Hòn Đất</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mã lô hàng:</span>
              <strong style={{ color: '#155724', fontFamily: 'monospace' }}>AGL-2026-KG0912</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Khả năng phục vụ:</span>
              <strong style={{ color: '#155724' }}>Báo cáo ESG, EUDR & CBAM</strong>
            </div>
          </div>
        </div>

        {/* CTA Buttons in Figma */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '10px' }}>
          <button 
            onClick={() => onNavigate('buyer_home')}
            className="figma-btn-primary"
          >
            <Home size={17} /> Về trang chủ
          </button>

          <button 
            onClick={() => alert('Đã xuất Báo cáo Kiểm toán Carbon AgriLog (PDF)!')}
            className="figma-btn-secondary"
          >
            <Download size={15} /> Tải chứng nhận PDF
          </button>
        </div>

      </div>

    </div>
  );
}
