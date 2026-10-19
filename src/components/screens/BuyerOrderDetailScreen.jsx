import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MoreHorizontal,
  Lock, 
  Info, 
  Scan, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  QrCode, 
  Camera, 
  LayoutGrid, 
  ClipboardList, 
  Package, 
  User,
  ArrowRight
} from 'lucide-react';

export default function BuyerOrderDetailScreen({ onNavigate, onBack, orderId = 'COM-0001' }) {
  // 4 Segmented Sub-tabs:
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
      
      {/* Top Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        borderBottom: '1px solid #F3F4F6'
      }}>
        <button 
          onClick={handleBack}
          style={{
            background: 'none',
            border: 'none',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#111827'
          }}
        >
          <ArrowLeft size={22} />
        </button>

        <h1 style={{ fontSize: '17px', fontWeight: '800', color: '#111827', margin: 0 }}>
          Chi tiết đơn hàng
        </h1>

        <button 
          onClick={() => alert('Tuỳ chọn đơn hàng COM-0001')}
          style={{
            background: 'none',
            border: 'none',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4B5563'
          }}
        >
          <MoreHorizontal size={22} />
        </button>
      </div>

      {/* Scrollable Container */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 20px' }}>
        
        {/* Breadcrumb Context */}
        <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span 
            onClick={() => onNavigate('buyer_requests')}
            style={{ color: '#15803D', fontWeight: '700', cursor: 'pointer' }}
          >
            Yêu cầu REQ-1048
          </span>
          <span>›</span>
          <span>Đơn hàng</span>
        </div>

        {/* Order ID & Status Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>
            COM-0001
          </h2>
          <span style={{
            background: '#EFF6FF',
            color: '#2563EB',
            fontSize: '11px',
            fontWeight: '700',
            padding: '3px 10px',
            borderRadius: '12px'
          }}>
            Đang thực hiện
          </span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '14px' }}>
          HTX Tân Bình · Cam kết 20 tấn khô
        </div>

        {/* 4 Segmented Sub-tabs Pill Container */}
        <div style={{
          background: '#ECEEF0',
          borderRadius: '10px',
          padding: '3px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          marginBottom: '16px'
        }}>
          {[
            { id: 'overview', label: 'Tổng quan' },
            { id: 'batches', label: 'Lô hàng' },
            { id: 'logistics', label: 'Vận chuyển' },
            { id: 'payment', label: 'Thanh toán' }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? '#1A4329' : '#6B7280',
                  fontWeight: isActive ? '800' : '500',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '7px 4px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* SUB-TAB 1: TỔNG QUAN (Exact Match to Figma Image) */}
        {/* ======================================================== */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Card 1: Thông tin đơn hàng */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: '0 0 12px' }}>
                Thông tin đơn hàng
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Nhà cung cấp</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>HTX Tân Bình</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Nguyên liệu</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>Rơm rạ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Đã cam kết</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>20 tấn khô</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Giới hạn độ ẩm</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>≤ 15%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#6B7280' }}>Yêu cầu gốc</span>
                  <span 
                    onClick={() => onNavigate('buyer_requests')}
                    style={{ fontWeight: '800', color: '#15803D', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
                  >
                    REQ-1048 →
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Tiến độ giao hàng */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: '0 0 10px' }}>
                Tiến độ giao hàng
              </h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', marginBottom: '6px' }}>
                <span style={{ fontWeight: '700', color: '#111827' }}>
                  Đã xuất 17,6 / 20 tấn khô
                </span>
                <span style={{ fontWeight: '800', color: '#15803D' }}>
                  88%
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{
                height: '6px',
                background: '#E5E7EB',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: '88%',
                  height: '100%',
                  background: '#1A4329',
                  borderRadius: '4px'
                }} />
              </div>

              <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '12px' }}>
                88% cam kết đang trên đường đến nhà máy
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Đã nhận</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>0 tấn khô</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Chưa xuất</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>2,4 tấn khô</span>
                </div>
              </div>
            </div>

            {/* Card 3: Thông tin giao nhận */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: '0 0 12px' }}>
                Thông tin giao nhận
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Điểm nhận</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>Nhà máy Đồng Tháp</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Dự kiến đến</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>24/10/2026 · 14:30</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Hạn giao</span>
                  <span style={{ fontWeight: '700', color: '#111827' }}>25/10/2026</span>
                </div>
              </div>
            </div>

            {/* Card 4: Giá cố định do AgriLog công bố */}
            <div style={{
              background: '#F0FDF4',
              borderRadius: '14px',
              border: '1px solid #DCFCE7',
              padding: '14px 16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color: '#166534' }}>
                <Lock size={14} />
                <span>Giá cố định do AgriLog công bố</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', margin: '4px 0 2px' }}>
                1.200.000 đ/tấn khô
              </div>
              <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                Chỉ xem · Không thể chỉnh sửa giá
              </div>
            </div>

            {/* Notification Banner */}
            <div style={{
              background: '#EFF6FF',
              borderRadius: '12px',
              border: '1px solid #BFDBFE',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}>
              <Info size={17} color="#2563EB" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '12px', color: '#1D4ED8', lineHeight: '1.4' }}>
                Lô AGR-261010-008 đang giao. Chỉ cập nhật khối lượng đã giao sau khi nhà máy xác nhận nhận hàng.
              </span>
            </div>

            {/* CTA: Quét QR nhận hàng */}
            <button
              onClick={() => onNavigate('weighbridge')}
              style={{
                width: '100%',
                height: '48px',
                background: '#1A4329',
                color: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                fontSize: '14.5px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(26, 67, 41, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              <Scan size={18} strokeWidth={2.2} /> Quét QR nhận hàng
            </button>

            {/* Subtext below button */}
            <div style={{ fontSize: '11px', color: '#6B7280', textAlign: 'center', marginTop: '-4px' }}>
              Lô hàng, vận chuyển và thanh toán thuộc COM-0001.
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 2: LÔ HÀNG (Lô AGR-261010-008) */}
        {/* ======================================================== */}
        {activeTab === 'batches' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Lô hàng thuộc COM-0001
                </h3>
                <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px' }}>
                  Đã kiểm định IoT & dán tem QR tại bãi thu gom
                </div>
              </div>

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
                <Scan size={14} /> Quét camera
              </button>
            </div>

            {/* Batch AGR-261010-008 Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
                    Lô: AGR-261010-008
                  </span>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
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
                <div>Đã xuất: <strong>17.6 tấn</strong></div>
                <div>Độ ẩm IoT: <strong style={{ color: '#15803D' }}>13.8%</strong> (≤ 15%)</div>
                <div>Quy cách: <strong>Rơm cuộn nén</strong></div>
                <div>Thiết bị: <strong>AgriLog Sensor Pro</strong></div>
              </div>

              <button
                onClick={() => onNavigate('batch_qr')}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#F0FDF4',
                  color: '#15803D',
                  border: '1px solid #BBF7D0',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <QrCode size={15} /> Xem tem QR & Chứng nhận số
              </button>
            </div>

            {/* Quick scan box */}
            <div 
              onClick={() => onNavigate('qr_scanner')}
              style={{
                background: '#F0FDF4',
                border: '1.5px dashed #16A34A',
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
                Dùng camera quét nhanh tem IoT dán trên từng kiện rơm khi xe đến cổng nhà máy
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 3: VẬN CHUYỂN */}
        {/* ======================================================== */}
        {activeTab === 'logistics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Fleet Info Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111827', margin: 0 }}>
                  Xe tải 68C-148.92
                </h4>
                <span className="badge-blue">Đang vận chuyển</span>
              </div>

              <div style={{ fontSize: '12px', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div>Tài xế: <strong>Lê Văn Hoàng</strong> (0918.776.321)</div>
                <div>Loại xe: <strong>Xe tải thùng chuyên dụng rơm rạ cuộn</strong></div>
                <div>Khối lượng trên xe: <strong>17.6 tấn rơm rạ</strong></div>
                <div>Điểm xuất phát: <strong>Kho HTX Tân Bình, Thoại Sơn, An Giang</strong></div>
                <div>Đích đến: <strong>Nhà máy Đồng Tháp</strong></div>
              </div>
            </div>

            {/* Route Timeline */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '14px 16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#111827', margin: '0 0 12px' }}>
                Tiến trình lộ trình:
              </h4>

              <div style={{ position: 'relative', paddingLeft: '18px', borderLeft: '2px solid #155724', marginLeft: '6px' }}>
                <div style={{ position: 'relative', marginBottom: '14px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#155724' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>Đã bốc hàng tại kho HTX Tân Bình</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>24/10/2026 · 10:15 (Đã đối soát tem QR IoT)</div>
                </div>

                <div style={{ position: 'relative', marginBottom: '14px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 0 3px rgba(37,99,235,0.2)' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#2563EB' }}>Đang di chuyển trên QL80</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Dự kiến còn 35 km nữa tới cổng nhà máy</div>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#D1D5DB' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#6B7280' }}>Cập cảng trạm cân Nhà máy Đồng Tháp</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Dự kiến: 24/10/2026 · 14:30</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('weighbridge')}
              className="figma-btn-primary"
            >
              Tiến hành cân điện tử & Nghiệm thu →
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUB-TAB 4: THANH TOÁN (Escrow COM-0001) */}
        {/* ======================================================== */}
        {activeTab === 'payment' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Total Escrow Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E5E7EB',
              padding: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: '600' }}>
                Tổng giá trị đơn cam kết COM-0001
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', color: '#1A4329', margin: '4px 0 2px' }}>
                24.000.000 đ
              </div>
              <div style={{ fontSize: '11.5px', color: '#6B7280' }}>
                20.0 tấn x 1.200.000 đ/tấn khô
              </div>

              <div style={{ borderTop: '1px solid #F3F4F6', marginTop: '12px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Tạm ứng cọc 30% Escrow:</span>
                  <strong style={{ color: '#15803D' }}>7.200.000 đ (Đã phong tỏa)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Quyết toán 70% còn lại:</span>
                  <strong style={{ color: '#2563EB' }}>16.800.000 đ (Chờ trạm cân)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Đơn vị thụ hưởng:</span>
                  <strong>HTX Nông nghiệp Tân Bình</strong>
                </div>
              </div>
            </div>

            {/* Escrow Mechanism Notice */}
            <div style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <ShieldCheck size={18} color="#2563EB" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '11.5px', color: '#1E40AF', lineHeight: '1.4' }}>
                Tài khoản ký quỹ Escrow bảo vệ an toàn vốn cho Doanh nghiệp. Khoản thanh toán 70% chỉ được Doanh nghiệp bấm giải ngân sau khi phiếu cân trạm điện tử đạt chuẩn.
              </div>
            </div>

            <button
              onClick={() => onNavigate('escrow_settlement')}
              className="figma-btn-primary"
            >
              Xem chi tiết giải ngân Escrow →
            </button>
          </div>
        )}

      </div>

      {/* Bottom Navigation Bar */}
      <div style={{
        height: '60px',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 10px 2px',
        flexShrink: 0
      }}>
        {/* Tab 1: Trang chủ */}
        <button
          onClick={() => onNavigate('buyer_home')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={19} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Trang chủ
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
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={19} color="#6B7280" strokeWidth={1.8} />
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
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            background: '#E2EFE7',
            color: '#1A4329',
            padding: '3px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Package size={18} strokeWidth={2.2} />
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
            gap: '3px',
            cursor: 'pointer'
          }}
        >
          <div style={{ padding: '3px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={19} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Tài khoản
          </span>
        </button>
      </div>

    </div>
  );
}
