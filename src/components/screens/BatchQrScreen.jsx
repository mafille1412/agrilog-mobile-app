import React from 'react';
import { ArrowLeft, CheckCircle2, Circle, Truck, ExternalLink } from 'lucide-react';

export default function BatchQrScreen({ onNavigate, onOpenPublicPortal }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('matching')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Mã định danh lô hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Figma Big Centered QR Box */}
        <div className="figma-card" style={{ textAlign: 'center', padding: '24px 16px', marginBottom: '14px' }}>
          
          <div style={{
            width: '168px',
            height: '168px',
            margin: '0 auto 12px',
            padding: '10px',
            background: 'white',
            border: '2px solid #155724',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(21, 87, 36, 0.1)'
          }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <rect x="0" y="0" width="30" height="30" rx="3" fill="#155724" />
              <rect x="6" y="6" width="18" height="18" rx="2" fill="white" />
              <rect x="10" y="10" width="10" height="10" rx="1" fill="#155724" />
              
              <rect x="70" y="0" width="30" height="30" rx="3" fill="#155724" />
              <rect x="76" y="6" width="18" height="18" rx="2" fill="white" />
              <rect x="80" y="10" width="10" height="10" rx="1" fill="#155724" />
              
              <rect x="0" y="70" width="30" height="30" rx="3" fill="#155724" />
              <rect x="6" y="76" width="18" height="18" rx="2" fill="white" />
              <rect x="10" y="80" width="10" height="10" rx="1" fill="#155724" />
              
              <rect x="36" y="6" width="8" height="8" fill="#155724" />
              <rect x="48" y="12" width="12" height="6" fill="#155724" />
              <rect x="36" y="24" width="18" height="6" fill="#155724" />
              <rect x="8" y="38" width="14" height="8" fill="#155724" />
              <rect x="28" y="38" width="8" height="14" fill="#155724" />
              <rect x="42" y="42" width="16" height="16" rx="2" fill="#155724" />
              <rect x="64" y="38" width="12" height="8" fill="#155724" />
              <rect x="82" y="42" width="10" height="14" fill="#155724" />
              <rect x="12" y="54" width="10" height="10" fill="#155724" />
              <rect x="64" y="52" width="8" height="12" fill="#155724" />
              <rect x="78" y="60" width="14" height="6" fill="#155724" />
              <rect x="36" y="66" width="8" height="14" fill="#155724" />
              <rect x="48" y="70" width="14" height="8" fill="#155724" />
              <rect x="68" y="72" width="10" height="10" fill="#155724" />
              <rect x="42" y="84" width="20" height="8" fill="#155724" />
              <rect x="74" y="86" width="16" height="6" fill="#155724" />
            </svg>
          </div>

          <div style={{ fontSize: '12px', color: '#6B7280' }}>
            Quét mã để truy xuất nguồn gốc và kiểm định NIR
          </div>

          <button 
            onClick={onOpenPublicPortal}
            style={{
              background: '#EAF5EC',
              color: '#155724',
              border: '1px solid #C3E6CB',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <ExternalLink size={13} /> Thử nghiệm quét mã QR
          </button>
        </div>

        {/* Dual Meta Card in Figma */}
        <div className="figma-card" style={{ marginBottom: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Mã lô (Batch ID)</div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827', fontFamily: 'monospace', marginTop: '2px' }}>
                AGL-2026-KG0912
              </div>
            </div>
            <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '14px' }}>
              <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '600' }}>Khối lượng</div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#155724', marginTop: '2px' }}>
                50 tấn
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline in Figma */}
        <div className="figma-card" style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
            Hành trình lô hàng
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', paddingLeft: '22px' }}>
            <div style={{
              position: 'absolute',
              left: '7px',
              top: '6px',
              bottom: '12px',
              width: '2px',
              background: '#E5E7EB'
            }} />

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-22px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800' }}>
                ✓
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>Khớp lệnh đại lý thu gom</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>HTX Tân Bình & Cơ sở Út Triệu</div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-22px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800' }}>
                ✓
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>Kiểm định chất lượng NIR</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Độ ẩm 14.2% · Đạt chuẩn xuất khẩu</div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-22px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800' }}>
                ✓
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>Gắn Batch ID & mã QR</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>In tem nhãn chịu nhiệt tại bãi tập kết</div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-22px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#0284C7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800' }}>
                4
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#0284C7' }}>Đang vận chuyển đến nhà máy</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Xe tải 68C-148.92 đang trên tuyến</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
          <button 
            onClick={() => onNavigate('logistics_tracking')}
            className="figma-btn-primary"
          >
            Theo dõi vận chuyển
          </button>
        </div>

      </div>

    </div>
  );
}
