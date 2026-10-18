import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Sparkles, 
  Clock, 
  Phone,
  QrCode,
  ShieldCheck,
  Building2,
  FileText,
  DollarSign,
  ChevronRight,
  ExternalLink,
  Camera,
  LayoutGrid,
  ClipboardList,
  PackageCheck,
  User,
  ScanLine
} from 'lucide-react';

export default function BuyerOrderDetailScreen({ onNavigate, onBack, orderId = 'REQ-1048' }) {
  // 4 Segmented Sub-tabs as designed in Figma Row 2:
  // 'overview' | 'batches' | 'logistics' | 'payment'
  const [activeTab, setActiveTab] = useState('overview');

  const handleBack = () => {
    if (onBack) {
      onBack('buyer_orders');
    } else {
      onNavigate('buyer_orders');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ textAlign: 'center' }}>
          <div className="figma-header-title">
            Chi tiết đơn hàng
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '500' }}>
            #{orderId} · Rơm rạ cuộn (50 tấn)
          </div>
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* 4 Segmented Sub-tabs Navigation Bar */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        padding: '6px 12px 0',
        gap: '4px'
      }}>
        {[
          { id: 'overview', label: 'Tổng quan' },
          { id: 'batches', label: 'Lô hàng (2)' },
          { id: 'logistics', label: 'Vận chuyển' },
          { id: 'payment', label: 'Thanh toán' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2.5px solid #1A4329' : '2.5px solid transparent',
              padding: '10px 4px',
              fontSize: '12px',
              fontWeight: activeTab === tab.id ? '800' : '600',
              color: activeTab === tab.id ? '#1A4329' : '#6B7280',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screen Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>

        {/* ======================================================== */}
        {/* SUB-TAB 1: TỔNG QUAN (Figma Row 2 Screen 1) */}
        {/* ======================================================== */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Status Banner */}
            <div style={{
              background: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#0284C7',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Truck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0369A1' }}>
                    Xe đang vận chuyển trên tuyến
                  </div>
                  <div style={{ fontSize: '11px', color: '#0284C7' }}>
                    Dự kiến cập cảng nhà máy lúc 12:00
                  </div>
                </div>
              </div>
              <span className="badge-green">Đúng tiến độ</span>
            </div>

            {/* Order Specification Summary Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
                  Thông tin đơn thu mua
                </span>
                <span style={{ fontSize: '12px', color: '#15803D', fontWeight: '700' }}>
                  1.500.000 đ/tấn
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#F9FAFB', borderRadius: '10px', padding: '10px 12px', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Khối lượng</div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>50.0 tấn</div>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Độ ẩm mục tiêu</div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#15803D' }}>≤ 15.0%</div>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Tổng giá trị</div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#1A4329' }}>75.000.000 đ</div>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#6B7280' }}>Hạn nhận hàng</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>16/10/2026</div>
                </div>
              </div>

              <div style={{ fontSize: '11.5px', color: '#4B5563', lineHeight: '1.5' }}>
                <div>• Nhà máy nhận: <strong>Nhà máy Điện Sinh khối Cần Thơ</strong></div>
                <div>• Địa điểm: <strong>KCN Trà Nóc, Q. Bình Thủy, TP. Cần Thơ</strong></div>
              </div>
            </div>

            {/* Escrow Guarantee Notice */}
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '12px',
              padding: '12px 14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <ShieldCheck size={18} color="#155724" />
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#155724' }}>
                  Bảo chứng tài chính Escrow
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#166534', lineHeight: '1.4' }}>
                Tiền cọc <strong>30% (22.500.000 đ)</strong> đã được phong tỏa trong tài khoản Escrow. 70% còn lại (52.500.000 đ) sẽ được tự động giải ngân sau khi nghiệm thu trạm cân điện tử đạt chuẩn.
              </div>
            </div>

            {/* Matched Suppliers Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
                Đơn vị cung ứng đã ghép lệnh (2 đại lý)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Dealer 1 */}
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '10px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '13px', color: '#111827' }}>HTX Nông nghiệp Tân Bình</strong>
                    <span className="badge-green">30 tấn · 13.8% ẩm</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
                    Thoại Sơn, An Giang · Đã kiểm định IoT & in tem QR
                  </div>
                </div>

                {/* Dealer 2 */}
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '10px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '13px', color: '#111827' }}>Cơ sở Thu gom Út Triệu</strong>
                    <span className="badge-green">20 tấn · 14.5% ẩm</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
                    Hòn Đất, Kiên Giang · Đã kiểm định IoT & in tem QR
                  </div>
                </div>
              </div>
            </div>

            {/* CTA: Next Step */}
            <button
              onClick={() => onNavigate('weighbridge')}
              className="figma-btn-primary"
              style={{ marginTop: '4px' }}
            >
              Đến trạm cân & Nghiệm thu giao hàng →
            </button>

          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 2: LÔ HÀNG (Figma Row 2 Screen 2) */}
        {/* ======================================================== */}
        {activeTab === 'batches' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Danh sách lô hàng kiểm định
                </h3>
                <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px' }}>
                  2/2 lô hàng đã kiểm định cảm biến IoT đạt chuẩn
                </div>
              </div>

              {/* QR Scanner Camera Quick Action Button */}
              <button
                onClick={() => onNavigate('qr_scanner')}
                style={{
                  background: '#1A4329',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '7px 12px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <ScanLine size={15} /> Quét camera
              </button>
            </div>

            {/* Batch 1 Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
                    Lô 1: AGL-2026-KG0912
                  </span>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    HTX Nông nghiệp Tân Bình · Thoại Sơn, An Giang
                  </div>
                </div>
                <span className="badge-green">IoT Đạt chuẩn</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                background: '#F9FAFB',
                borderRadius: '10px',
                padding: '10px 12px',
                marginBottom: '10px',
                fontSize: '11.5px'
              }}>
                <div>Khối lượng: <strong>30.0 tấn</strong></div>
                <div>Độ ẩm IoT: <strong style={{ color: '#15803D' }}>13.8%</strong> (≤ 15%)</div>
                <div>Quy cách: <strong>Rơm cuộn nén</strong></div>
                <div>Thiết bị: <strong>AgriLog Sensor Pro</strong></div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => onNavigate('batch_qr')}
                  className="figma-btn-primary"
                  style={{ flex: 1, padding: '10px', fontSize: '12px' }}
                >
                  <QrCode size={15} /> Xem mã QR & Chứng nhận
                </button>
              </div>
            </div>

            {/* Batch 2 Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
                    Lô 2: AGL-2026-KG0913
                  </span>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    Cơ sở Thu gom Út Triệu · Hòn Đất, Kiên Giang
                  </div>
                </div>
                <span className="badge-green">IoT Đạt chuẩn</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                background: '#F9FAFB',
                borderRadius: '10px',
                padding: '10px 12px',
                marginBottom: '10px',
                fontSize: '11.5px'
              }}>
                <div>Khối lượng: <strong>20.0 tấn</strong></div>
                <div>Độ ẩm IoT: <strong style={{ color: '#15803D' }}>14.5%</strong> (≤ 15%)</div>
                <div>Quy cách: <strong>Rơm cuộn nén</strong></div>
                <div>Thiết bị: <strong>AgriLog Sensor Pro</strong></div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => onNavigate('batch_qr')}
                  className="figma-btn-primary"
                  style={{ flex: 1, padding: '10px', fontSize: '12px' }}
                >
                  <QrCode size={15} /> Xem mã QR & Chứng nhận
                </button>
              </div>
            </div>

            {/* Scan Prompt Card */}
            <div 
              onClick={() => onNavigate('qr_scanner')}
              style={{
                background: '#F0FDF4',
                border: '1px dashed #16A34A',
                borderRadius: '12px',
                padding: '14px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <Camera size={22} color="#15803D" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#15803D' }}>
                Quét mã QR tem nhãn trên kiện hàng
              </div>
              <div style={{ fontSize: '11px', color: '#4B5563', marginTop: '2px' }}>
                Mở camera quét nhanh tem IoT dán trên từng kiện rơm khi xe đến bãi
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 3: VẬN CHUYỂN (Figma Row 2 Screen 3) */}
        {/* ======================================================== */}
        {activeTab === 'logistics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Green Highlight Box in Figma */}
            <div style={{
              background: '#EAF5EC',
              border: '1px solid #C3E6CB',
              borderRadius: '12px',
              padding: '12px 14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#155724', fontWeight: '800', fontSize: '13px', marginBottom: '4px' }}>
                <Sparkles size={16} /> Tiết kiệm 18.5% chi phí vận chuyển
              </div>
              <div style={{ fontSize: '11.5px', color: '#276738', lineHeight: '1.4' }}>
                Thuật toán ghép chuyến đa điểm giúp giảm 38% số chuyến xe chạy rỗng và cắt giảm 64.8 kg khí CO₂.
              </div>
            </div>

            {/* Fleet Info Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Xe tải 68C-148.92
                </h4>
                <span className="badge-blue">Đang vận chuyển</span>
              </div>

              <div style={{ fontSize: '12px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>Tài xế: <strong>Lê Văn Hoàng</strong> (0918.776.321)</div>
                <div>Loại xe: <strong>Đầu kéo rơ-moóc thùng cao 40ft (chở rơm cuộn)</strong></div>
                <div>Tải trọng thực: <strong>50 tấn / 50 tấn</strong> (Đã ghép 2 bãi gom)</div>
              </div>
            </div>

            {/* Multi-stop Route Card (Figma Screen) */}
            <div className="figma-card" style={{ padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827', marginBottom: '12px' }}>
                Lộ trình ghép điểm:
              </h4>

              {/* Map Illustration Line */}
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #DCFCE7',
                borderRadius: '10px',
                padding: '10px 14px',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#6B7280' }}>Điểm 1 (Bãi 1)</div>
                  <strong style={{ fontSize: '12px', color: '#155724' }}>Thoại Sơn (30t)</strong>
                </div>
                <div style={{ flex: 1, height: '2px', background: '#16A34A', margin: '0 8px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)', background: '#16A34A', color: 'white', borderRadius: '50%', width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>✓</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#6B7280' }}>Điểm 2 (Bãi 2)</div>
                  <strong style={{ fontSize: '12px', color: '#155724' }}>Hòn Đất (20t)</strong>
                </div>
                <div style={{ flex: 1, height: '2px', background: '#0284C7', margin: '0 8px' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#6B7280' }}>Đích đến</div>
                  <strong style={{ fontSize: '12px', color: '#0369A1' }}>Nhà máy Cần Thơ</strong>
                </div>
              </div>

              {/* Stop Points Timeline */}
              <div style={{ position: 'relative', paddingLeft: '18px', borderLeft: '2px solid #155724', marginLeft: '6px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                    Điểm 1: HTX Tân Bình (Thoại Sơn)
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    Đã bốc 30 tấn rơm cuộn đã quét QR IoT (07:30)
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                    Điểm 2: Cơ sở Út Triệu (Hòn Đất)
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    Đã ghép thêm 20 tấn rơm cuộn (09:15)
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#155724' }}>
                    Đích: Nhà máy Điện Sinh khối Cần Thơ
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    Dự kiến cập cảng tiếp nhận lúc 12:00
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('weighbridge')}
              className="figma-btn-primary"
            >
              Đến trạm cân & Giao hàng →
            </button>

          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 4: THANH TOÁN & ĐỐI SOÁT (Figma Row 2 Screen 4) */}
        {/* ======================================================== */}
        {activeTab === 'payment' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Escrow Status Summary Card */}
            <div style={{
              background: 'linear-gradient(135deg, #1A4329, #155724)',
              borderRadius: '14px',
              padding: '16px',
              color: 'white'
            }}>
              <div style={{ fontSize: '11.5px', color: '#A7F3D0', fontWeight: '600' }}>
                TỔNG GIÁ TRỊ HỢP ĐỒNG ESCROW
              </div>
              <div style={{ fontSize: '24px', fontWeight: '800', marginTop: '2px' }}>
                75.000.000 đ
              </div>
              <div style={{ fontSize: '11px', color: '#D1FAE5', marginTop: '4px' }}>
                Thanh toán an toàn có bảo chứng ngân hàng qua AgriLog
              </div>
            </div>

            {/* Escrow Breakdown Card */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827', marginBottom: '10px' }}>
                Tiến độ giải ngân tài khoản Escrow
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Step 1: 30% Deposit */}
                <div style={{
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#166534' }}>
                      Mốc 1: Tiền cọc cam kết (30%)
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#6B7280' }}>
                      Đã phong tỏa bảo chứng khi chốt hợp đồng
                    </div>
                  </div>
                  <strong style={{ fontSize: '14px', color: '#15803D' }}>22.500.000 đ</strong>
                </div>

                {/* Step 2: 70% Final Settlement */}
                <div style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#1E40AF' }}>
                      Mốc 2: Thanh toán quyết toán (70%)
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#6B7280' }}>
                      Giải ngân ngay sau khi cân điện tử xác nhận
                    </div>
                  </div>
                  <strong style={{ fontSize: '14px', color: '#2563EB' }}>52.500.000 đ</strong>
                </div>
              </div>
            </div>

            {/* Beneficiaries Breakdown */}
            <div className="figma-card" style={{ padding: '14px 16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>
                Đơn vị thụ hưởng
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
                  <span>1. HTX Nông nghiệp Tân Bình (30t)</span>
                  <strong style={{ color: '#111827' }}>45.000.000 đ</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>2. Cơ sở Thu gom Út Triệu (20t)</span>
                  <strong style={{ color: '#111827' }}>30.000.000 đ</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('weighbridge')}
              className="figma-btn-primary"
            >
              Chuyển sang Trạm cân & Nghiệm thu →
            </button>

          </div>
        )}

      </div>

      {/* Bottom Navigation Bar */}
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
        {/* Tab 1: Tổng quan */}
        <button
          onClick={() => onNavigate('buyer_home')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tổng quan
          </span>
        </button>

        {/* Tab 2: Yêu cầu */}
        <button
          onClick={() => onNavigate('buyer_requests')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Yêu cầu
          </span>
        </button>

        {/* Tab 3: Đơn hàng (Active) */}
        <button
          onClick={() => onNavigate('buyer_orders')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            background: '#E2EFE7',
            color: '#1A4329',
            padding: '4px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PackageCheck size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#1A4329', fontWeight: '800' }}>
            Đơn hàng
          </span>
        </button>

        {/* Tab 4: Tài khoản */}
        <button
          onClick={() => onNavigate('account')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tài khoản
          </span>
        </button>
      </div>

    </div>
  );
}
