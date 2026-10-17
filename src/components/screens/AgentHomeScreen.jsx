import React, { useState } from 'react';
import {
  Bell,
  LayoutGrid,
  ClipboardList,
  Truck,
  User,
  Plus,
  ArrowRight,
  CheckCircle2,
  Radio,
  MapPin,
  Cpu,
  Sparkles,
  ChevronRight,
  Filter,
  Calendar,
  AlertTriangle,
  QrCode,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function AgentHomeScreen({ onNavigate, onSelectOrder, initialTab = 'home' }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'home' | 'orders'
  const [isReady, setIsReady] = useState(true);
  const [cancelModal, setCancelModal] = useState(false);

  const demandOrders = [
    {
      id: 'REQ-1048',
      byproduct: 'Rơm rạ',
      badge: 'Phù hợp',
      enterprise: 'Nhà máy Điện Sinh khối Cần Thơ',
      location: 'KCN Trà Nóc, Cần Thơ',
      needTons: '20 t',
      maxMoisture: '≤ 15%',
      deadline: '16/10/2026',
      distance: '14 km',
      unitPrice: '1.500.000 đ/tấn khô'
    },
    {
      id: 'REQ-1043',
      byproduct: 'Trấu',
      badge: 'Phù hợp',
      enterprise: 'Nhà máy Điện Sinh khối Thoại Sơn',
      location: 'Thoại Sơn, An Giang',
      needTons: '30 t',
      maxMoisture: '≤ 14%',
      deadline: '18/10/2026',
      distance: '8 km',
      unitPrice: '1.200.000 đ/tấn khô'
    },
    {
      id: 'REQ-1039',
      byproduct: 'Bã mía',
      badge: 'Mới đăng',
      enterprise: 'Nhà máy Phân bón Hữu cơ An Giang',
      location: 'Châu Thành, An Giang',
      needTons: '15 t',
      maxMoisture: '≤ 16%',
      deadline: '20/10/2026',
      distance: '22 km',
      unitPrice: '850.000 đ/tấn khô'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>

      {/* Top Header - Synchronized 100% with Figma Prototype */}
      <div style={{
        padding: '14px 20px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        borderBottom: '1px solid #F3F4F6'
      }}>
        {/* Brand + Logo + Role Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: '#1A4329',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 0-5-5H4a5 5 0 0 1 5 5v0a5 5 0 0 0 3 0" />
              <path d="M12 13a5 5 0 0 1 5-5h3a5 5 0 0 0-5 5v0a5 5 0 0 1-3 0" />
            </svg>
          </div>

          <span style={{ fontSize: '19px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
            AgriLog
          </span>

          <span style={{
            background: '#E2EFE7',
            color: '#1A4329',
            fontSize: '9.5px',
            fontWeight: '800',
            padding: '3px 7px',
            borderRadius: '6px',
            letterSpacing: '0.04em'
          }}>
            ĐẠI LÝ
          </span>
        </div>

        {/* Right Actions: Notification bell + User Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            style={{
              position: 'relative',
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#374151'
            }}
          >
            <Bell size={18} />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              background: '#EF4444',
              borderRadius: '50%',
              border: '2px solid white'
            }} />
          </button>

          {/* User Avatar linking to Account / Logout */}
          <div
            onClick={() => onNavigate('account')}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#1A4329',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title="Quản lý tài khoản & Đăng xuất"
          >
            TB
          </div>
        </div>
      </div>

      {/* VIEW 1: HOME TAB (Figma Screen 1) */}
      {activeTab === 'home' && (
        <div className="figma-screen-viewport" style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Greeting Section */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', margin: 0 }}>
              Chào buổi sáng, anh Được 👋
            </h2>
            <div style={{ fontSize: '12px', color: '#4B5563', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>HTX Tân Bình · Thoại Sơn, An Giang</span>
              <span style={{
                background: '#EAF5EC',
                color: '#155724',
                fontSize: '9.5px',
                fontWeight: '700',
                padding: '1px 6px',
                borderRadius: '4px'
              }}>
                Cấp 1
              </span>
            </div>
          </div>

          {/* Status Card (Figma Screen 1: Sẵn sàng nhận đơn mới) */}
          <div
            onClick={() => setIsReady(!isReady)}
            style={{
              background: 'linear-gradient(135deg, #155724, #0B3D18)',
              borderRadius: '16px',
              padding: '16px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(21, 87, 36, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34D399'
              }}>
                <Radio size={18} className={isReady ? 'animate-pulse' : ''} />
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: '800' }}>
                  {isReady ? 'Sẵn sàng nhận đơn mới' : 'Đang tạm dừng nhận đơn'}
                </div>
                <div style={{ fontSize: '10.5px', color: '#A7F3D0', marginTop: '1px' }}>
                  {isReady ? 'Hệ thống đang ghép đơn trong bán kính 40km' : 'Bấm để kích hoạt lại trạng thái nhận đơn'}
                </div>
              </div>
            </div>

            <div style={{
              background: isReady ? '#34D399' : '#9CA3AF',
              color: isReady ? '#064E3B' : '#FFFFFF',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '10px',
              fontWeight: '800'
            }}>
              {isReady ? 'BẬT' : 'TẮT'}
            </div>
          </div>

          {/* IoT Moisture Device Status Mini-card */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11.5px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={16} color="#059669" />
              <span style={{ color: '#374151', fontWeight: '600' }}>
                Thiết bị đo IoT: <strong style={{ color: '#059669' }}>Đã kết nối BLE (Pin 94%)</strong>
              </span>
            </div>
            <button
              onClick={() => onNavigate('nir_testing')}
              style={{
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                color: '#065F46',
                borderRadius: '8px',
                padding: '4px 8px',
                fontSize: '10.5px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Đo kiểm IoT →
            </button>
          </div>

          {/* Demand Orders List Section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#111827' }}>
                Nhu cầu thu mua mở từ Doanh nghiệp
              </h3>
              <span
                onClick={() => onNavigate('agent_order_detail')}
                style={{ fontSize: '12px', color: '#155724', fontWeight: '700', cursor: 'pointer' }}
              >
                Xem tất cả
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '10px' }}>
              Chỉ tiêu thu mua do Doanh nghiệp đăng ký. Đại lý nhận đơn & cam kết sản lượng.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {demandOrders.map((order) => (
                <div
                  key={order.id}
                  onClick={() => onNavigate('agent_order_detail')}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    transition: 'transform 0.15s, border-color 0.15s'
                  }}
                >
                  {/* Order Top: Name + Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
                      {order.byproduct}
                    </div>
                    <span style={{
                      background: '#ECFDF5',
                      color: '#047857',
                      border: '1px solid #A7F3D0',
                      fontSize: '10px',
                      fontWeight: '800',
                      padding: '2px 8px',
                      borderRadius: '12px'
                    }}>
                      {order.badge}
                    </span>
                  </div>

                  {/* Enterprise Name */}
                  <div style={{ fontSize: '11.5px', color: '#6B7280', marginBottom: '10px' }}>
                    {order.enterprise} · {order.location}
                  </div>

                  {/* Two Metric Columns */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    background: '#F9FAFB',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    marginBottom: '10px'
                  }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                        {order.needTons}
                      </div>
                      <div style={{ fontSize: '10px', color: '#6B7280' }}>Cần thu mua</div>
                    </div>

                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
                        {order.maxMoisture}
                      </div>
                      <div style={{ fontSize: '10px', color: '#6B7280' }}>Độ ẩm tối đa</div>
                    </div>
                  </div>

                  {/* Footer of Card */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '11px',
                    color: '#6B7280',
                    borderTop: '1px solid #F3F4F6',
                    paddingTop: '8px'
                  }}>
                    <span>Hạn giao: {order.deadline} · {order.distance}</span>
                    <span style={{ color: '#155724', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      Nhận đơn & Cam kết ›
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demand Fulfillment Info Card (Thay thế nút tạo lô hàng theo yêu cầu) */}
          <div style={{
            marginTop: 'auto',
            padding: '12px 14px',
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '12px',
            fontSize: '11.5px',
            color: '#166534',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <CheckCircle2 size={22} color="#155724" style={{ flexShrink: 0 }} />
            <div style={{ lineHeight: '1.45' }}>
              <strong>Mô hình thu mua theo nhu cầu:</strong> Doanh nghiệp chủ động điều phối xe đến lấy hàng. Đại lý chỉ nhận các đơn thu mua phù hợp và cam kết sản lượng tại bãi tập kết.
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: ORDERS TAB (Figma Screen 10 - Quản lý đơn hàng & Đơn đã cam kết) */}
      {activeTab === 'orders' && (
        <div className="figma-screen-viewport" style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#111827', margin: 0 }}>
                Chi tiết đơn hàng
              </h2>
              <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px' }}>
                Đơn hàng đang trong tiến trình giao nhận
              </div>
            </div>
            <span style={{
              background: '#ECFDF5',
              color: '#047857',
              border: '1px solid #A7F3D0',
              padding: '3px 10px',
              borderRadius: '16px',
              fontSize: '10.5px',
              fontWeight: '800'
            }}>
              Đã cam kết
            </span>
          </div>

          {/* Committed Order Card (Exact Figma Screen 10) */}
          <div className="figma-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: '800', color: '#111827' }}>
                REQ-1048 · Rơm rạ cuộn
              </span>
              <span style={{ fontSize: '12px', color: '#155724', fontWeight: '700' }}>
                1.500.000 đ/tấn
              </span>
            </div>

            <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
              Nhà máy Điện Sinh khối Cần Thơ · KCN Trà Nóc, Cần Thơ
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              background: '#F9FAFB',
              borderRadius: '10px',
              padding: '10px 12px',
              marginBottom: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Khối lượng cam kết</div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                  20.0 tấn
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Độ ẩm IoT mục tiêu</div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#155724' }}>
                  ≤ 15.0%
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: '#4B5563', borderTop: '1px solid #F3F4F6', paddingTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Hạn sẵn sàng giao:</span>
                <strong style={{ color: '#111827' }}>16/10/2026</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Điểm tập kết:</span>
                <strong style={{ color: '#111827' }}>Kho bãi HTX Tân Bình</strong>
              </div>
            </div>
          </div>

          {/* Revenue & Escrow Status (Figma Screen 10) */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '14px',
            padding: '14px 16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11.5px', color: '#166534', fontWeight: '600' }}>
                Doanh thu dự kiến:
              </span>
              <strong style={{ fontSize: '17px', color: '#155724' }}>
                30.000.000 đ
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '11.5px' }}>
              <span style={{ color: '#4B5563' }}>Tiền cọc Escrow (30%):</span>
              <span style={{
                background: '#DCFCE7',
                color: '#155724',
                padding: '2px 8px',
                borderRadius: '6px',
                fontWeight: '700'
              }}>
                9.000.000 đ (Đã bảo chứng)
              </span>
            </div>
          </div>

          {/* Truck Logistics Card (Figma Screen 10) */}
          <div className="figma-card" style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Truck size={18} color="#155724" />
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                Đội xe của Doanh nghiệp (hoặc AgriLog) điều phối
              </span>
            </div>

            <div style={{ fontSize: '11.5px', color: '#4B5563', lineHeight: '1.5' }}>
              <div>• Đơn vị điều phối xe: <strong>Doanh nghiệp mua (Nhà máy Điện Sinh khối Cần Thơ)</strong></div>
              <div>• Biển số xe: <strong>67C-129.45</strong> (Xe tải 15 tấn)</div>
              <div>• Dự kiến tới bãi bốc hàng: <strong>08:30 · 16/10/2026</strong></div>
              <div>• Tài xế phụ trách: <strong>Nguyễn Văn Bé (0918.xxx.789)</strong></div>
              <div style={{ fontSize: '10.5px', color: '#047857', marginTop: '4px' }}>
                ✓ HTX chỉ cần chuẩn bị hàng tại kho bãi, đối soát cân điện tử & QR khi xe đến.
              </div>
            </div>
          </div>

          {/* Batches Inspection Overview Section */}
          <div className="figma-card" style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>
                  Trạng thái kiểm định các lô hàng
                </div>
                <div style={{ fontSize: '10.5px', color: '#6B7280' }}>
                  2/3 lô đã kiểm định IoT đạt chuẩn (12.0 / 20.0 tấn)
                </div>
              </div>
              <button
                onClick={() => onNavigate('agent_batches')}
                style={{
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  color: '#065F46',
                  borderRadius: '8px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Chi tiết lô ›
              </button>
            </div>

            {/* Quick mini-list of 3 batches */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Batch 1 */}
              <div style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11.5px'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: '#111827' }}>LH-REQ-1048-01 · 6.0 tấn</div>
                  <div style={{ fontSize: '10px', color: '#047857' }}>Độ ẩm IoT: 13.8% (≤ 15%) · Đạt chuẩn</div>
                </div>
                <span style={{
                  background: '#ECFDF5',
                  color: '#047857',
                  border: '1px solid #A7F3D0',
                  fontSize: '9.5px',
                  fontWeight: '800',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>
                  ĐÃ KIỂM ĐỊNH
                </span>
              </div>

              {/* Batch 2 */}
              <div style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11.5px'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: '#111827' }}>LH-REQ-1048-02 · 6.0 tấn</div>
                  <div style={{ fontSize: '10px', color: '#047857' }}>Độ ẩm IoT: 14.2% (≤ 15%) · Đạt chuẩn</div>
                </div>
                <span style={{
                  background: '#ECFDF5',
                  color: '#047857',
                  border: '1px solid #A7F3D0',
                  fontSize: '9.5px',
                  fontWeight: '800',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>
                  ĐÃ KIỂM ĐỊNH
                </span>
              </div>

              {/* Batch 3 */}
              <div style={{
                background: '#FFFDF5',
                border: '1px dashed #FDE68A',
                borderRadius: '8px',
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11.5px'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: '#B45309' }}>LH-REQ-1048-03 · 8.0 tấn</div>
                  <div style={{ fontSize: '10px', color: '#78350F' }}>Chưa đo độ ẩm · Cần đo trước khi bốc xe</div>
                </div>
                <button
                  onClick={() => onNavigate('nir_testing')}
                  style={{
                    background: '#F59E0B',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Đo IoT ngay
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons (Figma Screen 10) */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => onNavigate('agent_batches')}
              style={{
                flex: 1,
                background: '#FFFFFF',
                border: '1px solid #155724',
                color: '#155724',
                borderRadius: '12px',
                padding: '12px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Cpu size={16} />
              Quản lý kiểm định lô hàng
            </button>

            <button
              onClick={() => setCancelModal(true)}
              style={{
                background: '#FEF2F2',
                border: '1px solid #FCA5A5',
                color: '#DC2626',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Hủy cam kết
            </button>
          </div>

          {/* Big CTA Create QR Code (Figma Screen 10) */}
          <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
            <button
              onClick={() => onNavigate('batch_qr')}
              style={{
                width: '100%',
                background: '#155724',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '14px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(21, 87, 36, 0.25)'
              }}
            >
              <QrCode size={18} />
              Tạo mã QR & Theo dõi lô hàng
            </button>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span
                onClick={() => onNavigate('agent_completed_order')}
                style={{ fontSize: '11.5px', color: '#155724', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Mô phỏng: Xem kết quả nghiệm thu hoàn tất ›
              </span>
            </div>
          </div>

        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {cancelModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            maxWidth: '320px',
            textAlign: 'center'
          }}>
            <AlertTriangle size={36} color="#DC2626" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
              Xác nhận hủy cam kết?
            </h3>
            <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '16px', lineHeight: '1.4' }}>
              Hủy cam kết khi đội xe đã điều phối có thể ảnh hưởng đến điểm uy tín của HTX trên hệ thống AgriLog.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setCancelModal(false)}
                style={{
                  flex: 1,
                  background: '#F3F4F6',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  setCancelModal(false);
                  setActiveTab('home');
                }}
                style={{
                  flex: 1,
                  background: '#DC2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Đồng ý hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation - 4 Tabs Synchronized Exactly with Figma */}
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
        {/* Tab 1: Trang chủ */}
        <button
          onClick={() => setActiveTab('home')}
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
            background: activeTab === 'home' ? '#EAF5EC' : 'transparent',
            color: activeTab === 'home' ? '#155724' : '#6B7280',
            padding: '4px 16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LayoutGrid size={18} strokeWidth={activeTab === 'home' ? 2.2 : 1.8} />
          </div>
          <span style={{ fontSize: '10px', color: activeTab === 'home' ? '#155724' : '#6B7280', fontWeight: activeTab === 'home' ? '800' : '500' }}>
            Trang chủ
          </span>
        </button>

        {/* Tab 2: Lô hàng */}
        <button
          onClick={() => onNavigate('agent_batches')}
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
            Lô hàng
          </span>
        </button>

        {/* Tab 3: Đã giao */}
        <button
          onClick={() => onNavigate('agent_completed_order')}
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
            <CheckCircle2 size={20} color="#6B7280" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: '500' }}>
            Đã giao
          </span>
        </button>

        {/* Tab 4: Cá nhân */}
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
            Cá nhân
          </span>
        </button>
      </div>

    </div>
  );
}
