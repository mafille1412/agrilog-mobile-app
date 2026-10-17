import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  QrCode, 
  Truck, 
  AlertCircle, 
  Filter, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  LayoutGrid, 
  ClipboardList, 
  User,
  Sparkles
} from 'lucide-react';

export default function AgentBatchesScreen({ onNavigate }) {
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'tested' | 'pending'

  const batches = [
    {
      id: 'LH-REQ-1048-01',
      qrCodeId: 'AGL-2026-KG0912',
      weight: '6.0 tấn',
      type: 'Rơm rạ cuộn bánh xích',
      harvestDate: '15/10/2026',
      depot: 'Bãi kho số 1 · HTX Tân Bình',
      isTested: true,
      moisture: '13.8%',
      moisturePass: true,
      standardMoisture: '≤ 15.0%',
      impurity: '1.6%',
      probePoints: '3/3 điểm đạt chuẩn',
      deviceModel: 'AgriLog IoT Sensor Pro',
      testedAt: '15/10/2026 · 16:30',
      transportStatus: 'Đã sẵn sàng bốc hàng'
    },
    {
      id: 'LH-REQ-1048-02',
      qrCodeId: 'AGL-2026-KG0913',
      weight: '6.0 tấn',
      type: 'Rơm rạ cuộn bánh xích',
      harvestDate: '15/10/2026',
      depot: 'Bãi kho số 2 · HTX Tân Bình',
      isTested: true,
      moisture: '14.2%',
      moisturePass: true,
      standardMoisture: '≤ 15.0%',
      impurity: '1.8%',
      probePoints: '3/3 điểm đạt chuẩn',
      deviceModel: 'AgriLog IoT Sensor Pro',
      testedAt: '16/10/2026 · 06:15',
      transportStatus: 'Đã sẵn sàng bốc hàng'
    },
    {
      id: 'LH-REQ-1048-03',
      qrCodeId: 'Chưa cấp (Chờ kiểm định)',
      weight: '8.0 tấn',
      type: 'Rơm rạ cuộn bánh xích',
      harvestDate: '16/10/2026',
      depot: 'Bãi kho số 3 · HTX Tân Bình',
      isTested: false,
      moisture: 'Chưa đo',
      moisturePass: false,
      standardMoisture: '≤ 15.0%',
      impurity: '--',
      probePoints: '0/3 điểm',
      deviceModel: 'Cần kết nối thiết bị IoT',
      testedAt: '--',
      transportStatus: 'Chờ kiểm định độ ẩm trước khi bốc xe'
    }
  ];

  const filteredBatches = batches.filter(batch => {
    if (filterStatus === 'tested') return batch.isTested;
    if (filterStatus === 'pending') return !batch.isTested;
    return true;
  });

  const testedWeight = 12.0;
  const totalWeight = 20.0;
  const progressPercent = Math.round((testedWeight / totalWeight) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Kiểm định & Lô hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '16px' }}>
        
        {/* Order Commitment Summary Card */}
        <div className="figma-card" style={{ marginBottom: '12px', padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
              REQ-1048 · Rơm rạ cuộn
            </span>
            <span style={{
              background: '#ECFDF5',
              color: '#047857',
              border: '1px solid #A7F3D0',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10.5px',
              fontWeight: '800'
            }}>
              Đã cam kết
            </span>
          </div>

          <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '10px' }}>
            Nhà máy Điện Sinh khối Cần Thơ · KCN Trà Nóc
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '8px',
            background: '#F9FAFB',
            borderRadius: '10px',
            padding: '8px 10px',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            <div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>Tổng cam kết</div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#111827', marginTop: '2px' }}>20 tấn</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>Độ ẩm trần</div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#155724', marginTop: '2px' }}>≤ 15.0%</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>Số lô hàng</div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#111827', marginTop: '2px' }}>3 lô</div>
            </div>
          </div>

          {/* Inspection Progress Bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '5px' }}>
              <span style={{ color: '#4B5563', fontWeight: '600' }}>Tiến độ kiểm định IoT:</span>
              <span style={{ color: '#155724', fontWeight: '800' }}>{testedWeight} / {totalWeight} tấn ({progressPercent}%)</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #155724, #10B981)',
                borderRadius: '4px',
                transition: 'width 0.3s'
              }} />
            </div>
          </div>
        </div>

        {/* Enterprise Fleet Notice */}
        <div style={{
          background: '#F0F9FF',
          border: '1px solid #BAE6FD',
          borderRadius: '12px',
          padding: '10px 12px',
          fontSize: '11px',
          color: '#0369A1',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <Truck size={18} style={{ flexShrink: 0 }} />
          <span>
            Xe tải <strong>67C-129.45</strong> (Doanh nghiệp điều phối) dự kiến đến lúc <strong>08:30 · 16/10/2026</strong>. Vui lòng hoàn tất đo IoT cho Lô 3 trước giờ xe bốc hàng.
          </span>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <button
            onClick={() => setFilterStatus('all')}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11.5px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filterStatus === 'all' ? '1px solid #155724' : '1px solid #E5E7EB',
              background: filterStatus === 'all' ? '#155724' : '#FFFFFF',
              color: filterStatus === 'all' ? '#FFFFFF' : '#4B5563'
            }}
          >
            Tất cả lô (3)
          </button>

          <button
            onClick={() => setFilterStatus('tested')}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11.5px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filterStatus === 'tested' ? '1px solid #10B981' : '1px solid #E5E7EB',
              background: filterStatus === 'tested' ? '#ECFDF5' : '#FFFFFF',
              color: filterStatus === 'tested' ? '#047857' : '#4B5563',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <CheckCircle2 size={13} color="#047857" />
            Đã kiểm định (2)
          </button>

          <button
            onClick={() => setFilterStatus('pending')}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11.5px',
              fontWeight: '700',
              cursor: 'pointer',
              border: filterStatus === 'pending' ? '1px solid #F59E0B' : '1px solid #E5E7EB',
              background: filterStatus === 'pending' ? '#FFFBEB' : '#FFFFFF',
              color: filterStatus === 'pending' ? '#B45309' : '#4B5563',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Clock size={13} color="#B45309" />
            Chờ đo IoT (1)
          </button>
        </div>

        {/* Batches List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredBatches.map((batch) => (
            <div 
              key={batch.id}
              className="figma-card"
              style={{
                padding: '14px 16px',
                borderLeft: batch.isTested ? '4px solid #10B981' : '4px solid #F59E0B'
              }}
            >
              {/* Batch Top Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#111827', fontFamily: 'monospace' }}>
                    {batch.id}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
                    {batch.type} · {batch.weight}
                  </div>
                </div>

                {/* Status Badge */}
                {batch.isTested ? (
                  <span style={{
                    background: '#ECFDF5',
                    color: '#047857',
                    border: '1px solid #A7F3D0',
                    fontSize: '10.5px',
                    fontWeight: '800',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <CheckCircle2 size={13} />
                    ĐÃ KIỂM ĐỊNH IOT
                  </span>
                ) : (
                  <span style={{
                    background: '#FFFBEB',
                    color: '#B45309',
                    border: '1px solid #FDE68A',
                    fontSize: '10.5px',
                    fontWeight: '800',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Clock size={13} />
                    CHỜ ĐO IOT
                  </span>
                )}
              </div>

              {/* Moisture & IoT Details Box */}
              <div style={{
                background: batch.isTested ? '#F0FDF4' : '#FFFDF5',
                border: batch.isTested ? '1px solid #DCFCE7' : '1px dashed #FDE68A',
                borderRadius: '10px',
                padding: '10px 12px',
                marginBottom: '10px'
              }}>
                {batch.isTested ? (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: '#166534', fontWeight: '600' }}>
                        Kết quả đo độ ẩm IoT:
                      </span>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
                        {batch.moisture}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#4B5563', marginTop: '4px' }}>
                      <span>Tiêu chuẩn yêu cầu: <strong>{batch.standardMoisture}</strong></span>
                      <span style={{ color: '#047857', fontWeight: '700' }}>✓ Đạt chuẩn</span>
                    </div>

                    <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '4px', borderTop: '1px solid #E5E7EB', paddingTop: '4px' }}>
                      Cảm biến: {batch.deviceModel} · 3 điểm đo · {batch.testedAt}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B45309', fontSize: '11.5px', fontWeight: '700' }}>
                      <AlertCircle size={15} />
                      Chưa có dữ liệu kiểm định độ ẩm
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#78350F', marginTop: '3px', lineHeight: '1.4' }}>
                      Lô hàng đã tập kết tại bãi. Cần dùng đầu dò IoT cắm 3 điểm lấy mẫu để xác nhận độ ẩm ≤ 15.0% trước khi cấp tem QR bốc xe.
                    </div>
                  </div>
                )}
              </div>

              {/* Location & Meta info */}
              <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#9CA3AF" />
                  <span>Vị trí: <strong>{batch.depot}</strong></span>
                </div>
                {batch.isTested && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={13} color="#059669" />
                    <span>Mã tem QR: <strong style={{ fontFamily: 'monospace' }}>{batch.qrCodeId}</strong></span>
                  </div>
                )}
              </div>

              {/* Action Buttons Per Batch */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {batch.isTested ? (
                  <>
                    <button
                      onClick={() => onNavigate('batch_qr')}
                      style={{
                        flex: 1,
                        background: '#155724',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '9px',
                        fontSize: '11.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <QrCode size={15} />
                      Xem tem QR & Chứng nhận
                    </button>

                    <button
                      onClick={() => onNavigate('nir_testing')}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D1D5DB',
                        color: '#374151',
                        borderRadius: '10px',
                        padding: '9px 12px',
                        fontSize: '11.5px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Đo lại
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => onNavigate('nir_testing')}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #D97706, #B45309)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '11px',
                      fontSize: '12.5px',
                      fontWeight: '800',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 3px 10px rgba(217, 119, 6, 0.25)'
                    }}
                  >
                    <Cpu size={17} />
                    Đo độ ẩm IoT ngay cho Lô 3 →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Completed Settlement Simulation */}
        <div style={{ marginTop: '16px', paddingBottom: '16px', textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('agent_completed_order')}
            style={{
              background: '#FFFFFF',
              border: '1px dashed #155724',
              color: '#155724',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Mô phỏng: Xem kết quả nghiệm thu hoàn tất & Quyết toán Escrow ›
          </button>
        </div>

      </div>

      {/* Bottom Nav */}
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
        <button onClick={() => onNavigate('agent_home')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutGrid size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Trang chủ</span>
        </button>

        <button onClick={() => onNavigate('agent_batches')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ background: '#EAF5EC', color: '#155724', padding: '4px 16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={18} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '10px', color: '#155724', fontWeight: '800' }}>Đơn hàng</span>
        </button>

        <button onClick={() => onNavigate('logistics_tracking')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Phương tiện</span>
        </button>

        <button onClick={() => onNavigate('account')} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <div style={{ padding: '4px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>Cá nhân</span>
        </button>
      </div>

    </div>
  );
}
