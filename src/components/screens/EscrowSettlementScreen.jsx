import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Award,
  FileText,
  Download,
  Building2,
  ShieldCheck,
  Check,
  FolderArchive,
  ExternalLink,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EscrowSettlementScreen({ onNavigate }) {
  // Giải ngân là quyền và trách nhiệm của Doanh nghiệp
  const [isDisbursed, setIsDisbursed] = useState(true);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [archiveSaved, setArchiveSaved] = useState(false);

  React.useEffect(() => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) { }
  }, []);

  const handleSaveArchive = () => {
    setArchiveSaved(true);
    setShowArchiveModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>

      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('weighbridge')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Quyết toán Escrow
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>

        {/* Enterprise Responsibility Notice */}
        <div style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '12px',
          padding: '10px 12px',
          fontSize: '11px',
          color: '#1E40AF',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Building2 size={17} style={{ flexShrink: 0 }} />
          <span>
            <strong>Quyền giải ngân của Doanh nghiệp:</strong> Sau khi nghiệm thu đạt chuẩn, Doanh nghiệp thực hiện lệnh giải ngân tiền từ tài khoản ký quỹ Escrow về tài khoản đại lý.
          </span>
        </div>

        {/* Settlement Status Card in Figma */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '16px', marginBottom: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#155724',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px',
            boxShadow: '0 4px 12px rgba(21, 87, 36, 0.2)'
          }}>
            <CheckCircle2 size={28} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
            Doanh nghiệp đã giải ngân thành công
          </div>
          <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px' }}>
            Hợp đồng thông minh Escrow đã quyết toán tự động về tài khoản HTX
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="figma-card" style={{ marginBottom: '12px', padding: '14px' }}>
          <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px', marginBottom: '8px' }}>
            Chi tiết phân bổ giải ngân:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: '#4B5563' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Đại lý thu gom (HTX Tân Bình):</span>
              <strong style={{ color: '#155724' }}>82.500.000 đ (Đã nhận)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Cước xe vận chuyển:</span>
              <strong style={{ color: '#111827' }}>2.150.000 đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Phí dịch vụ thiết bị IoT & tem QR:</span>
              <strong style={{ color: '#155724' }}>300.000 đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Phí giao dịch sàn AgriLog:</span>
              <strong style={{ color: '#155724' }}>2.475.000 đ</strong>
            </div>

            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '6px', marginTop: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '800', color: '#155724' }}>TỔNG TIỀN ĐÃ GIẢI NGÂN:</span>
              <span style={{ fontSize: '17px', fontWeight: '800', color: '#155724' }}>
                87.425.000 đ
              </span>
            </div>
          </div>
        </div>

        {/* REQUIREMENT 3: Button To Archive Reconciliation Documents */}
        <div style={{ marginBottom: '12px' }}>
          <button
            onClick={handleSaveArchive}
            style={{
              width: '100%',
              background: archiveSaved ? '#ECFDF5' : '#FFFFFF',
              border: archiveSaved ? '2px solid #059669' : '1.5px solid #155724',
              color: archiveSaved ? '#065F46' : '#155724',
              borderRadius: '12px',
              padding: '13px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.2s'
            }}
          >
            {archiveSaved ? (
              <>
                <CheckCircle2 size={18} color="#059669" />
                Đã lưu trữ chứng từ đối soát vào hệ thống
              </>
            ) : (
              <>
                <FileText size={18} color="#155724" />
                Lưu trữ chứng từ đối soát (Hóa đơn & Biên bản)
              </>
            )}
          </button>

          <div style={{ textAlign: 'center', marginTop: '4px', fontSize: '10.5px', color: '#6B7280' }}>
            Tự động đồng bộ biên bản trạm cân, kết quả IoT, e-Invoice & ủy nhiệm chi
          </div>
        </div>

        {/* Modal: View Archived Reconciliation Documents */}
        {showArchiveModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 1000
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '18px',
              width: '100%',
              maxWidth: '340px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FolderArchive size={18} color="#155724" />
                  Hồ sơ chứng từ đối soát
                </div>
                <button
                  onClick={() => setShowArchiveModal(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ fontSize: '11px', color: '#047857', background: '#ECFDF5', padding: '6px 10px', borderRadius: '8px', marginBottom: '10px', fontWeight: '600' }}>
                ✓ Đã lưu trữ an toàn trên AgriLog Cloud Vault & ERP Doanh nghiệp
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#374151', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px', background: '#F9FAFB', borderRadius: '6px' }}>
                  <span>📋</span>
                  <span><strong>BB-CAN-1048.pdf</strong> · Biên bản cân trạm điện tử</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px', background: '#F9FAFB', borderRadius: '6px' }}>
                  <span>🔬</span>
                  <span><strong>IOT-PASS-142.pdf</strong> · Kết quả đo độ ẩm IoT 14.2%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px', background: '#F9FAFB', borderRadius: '6px' }}>
                  <span>🧾</span>
                  <span><strong>HDDT-82500000.xml</strong> · Hóa đơn GTGT điện tử</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px', background: '#F9FAFB', borderRadius: '6px' }}>
                  <span>🏦</span>
                  <span><strong>UNC-ESCROW-981.pdf</strong> · Ủy nhiệm chi giải ngân</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px', background: '#F9FAFB', borderRadius: '6px' }}>
                  <span>⭐</span>
                  <span><strong>EVAL-AGENT-TB.pdf</strong> · Đánh giá đại lý 5/5 sao</span>
                </div>
              </div>

              <button
                onClick={() => setShowArchiveModal(false)}
                className="figma-btn-primary"
                style={{ width: '100%', padding: '10px', fontSize: '12px' }}
              >
                Đóng hồ sơ
              </button>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
          <button onClick={() => onNavigate('esg_report')} className="figma-btn-primary">
            Xem Báo cáo MRV Carbon & ESG →
          </button>
        </div>

      </div>

    </div>
  );
}
