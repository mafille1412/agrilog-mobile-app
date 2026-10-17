import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Bell, 
  PackageCheck, 
  MapPin, 
  Calendar, 
  Scale, 
  Droplets, 
  DollarSign, 
  LayoutGrid, 
  ClipboardList, 
  Truck, 
  User, 
  ShieldCheck,
  Building2,
  Star
} from 'lucide-react';

export default function AgentCompletedOrderScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAF9' }}>
      
      {/* Header */}
      <div className="figma-screen-header">
        <button className="figma-header-btn" onClick={() => onNavigate('agent_home')}>
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Thông báo đơn hàng
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '20px 16px', textAlign: 'center' }}>
        
        {/* Delivery Success Notification Icon */}
        <div style={{ marginTop: '8px', marginBottom: '16px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#ECFDF5',
            border: '2px solid #A7F3D0',
            color: '#059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            boxShadow: '0 6px 20px rgba(5, 150, 105, 0.15)'
          }}>
            <PackageCheck size={36} strokeWidth={2.2} />
          </div>

          <span style={{
            background: '#ECFDF5',
            color: '#047857',
            border: '1px solid #A7F3D0',
            padding: '3px 12px',
            borderRadius: '16px',
            fontSize: '11px',
            fontWeight: '800',
            display: 'inline-block',
            marginBottom: '6px'
          }}>
            Xác nhận từ Doanh nghiệp
          </span>

          <h2 style={{ fontSize: '19px', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>
            Giao hàng thành công!
          </h2>
          <p style={{ fontSize: '12px', color: '#6B7280', maxWidth: '300px', margin: '0 auto', lineHeight: '1.4' }}>
            Doanh nghiệp đã hoàn tất cân điện tử và nghiệm thu lô hàng tại cổng Nhà máy Điện Sinh khối Cần Thơ.
          </p>
        </div>

        {/* Order Receipt Details Card */}
        <div className="figma-card" style={{ textAlign: 'left', padding: '14px 16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '12.5px', fontWeight: '800', color: '#111827' }}>
              Biên bản tiếp nhận lô hàng
            </span>
            <span style={{ fontSize: '11px', color: '#155724', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <ShieldCheck size={14} /> REQ-1048
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '11.5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '5px' }}>
              <span style={{ color: '#6B7280' }}>Đơn vị mua hàng:</span>
              <strong style={{ color: '#111827' }}>Nhà máy Điện Sinh khối Cần Thơ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '5px' }}>
              <span style={{ color: '#6B7280' }}>Mã cam kết của HTX:</span>
              <strong style={{ color: '#111827', fontFamily: 'monospace' }}>CK-REQ-1048-TB01</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '5px' }}>
              <span style={{ color: '#6B7280' }}>Khối lượng cân thực nhận:</span>
              <strong style={{ color: '#111827' }}>20.00 tấn rơm cuộn</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', paddingBottom: '5px' }}>
              <span style={{ color: '#6B7280' }}>Độ ẩm kiểm định tại trạm cân:</span>
              <strong style={{ color: '#059669' }}>14.2% (Đạt tiêu chuẩn ≤ 15%)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2px' }}>
              <span style={{ color: '#111827', fontWeight: '700' }}>Tổng giá trị giao dịch:</span>
              <strong style={{ fontSize: '15px', color: '#155724' }}>30.000.000 đ</strong>
            </div>
          </div>
        </div>

        {/* Rating Received from Enterprise */}
        <div style={{
          background: '#FFFDF5',
          border: '1px solid #FDE68A',
          borderRadius: '12px',
          padding: '10px 14px',
          textAlign: 'left',
          marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#92400E' }}>
              Đánh giá từ Nhà máy:
            </span>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#78350F', fontStyle: 'italic', lineHeight: '1.4' }}>
            "Rơm cuộn nén chặt, khô đều đạt độ ẩm 14.2%, tài xế quét mã QR IoT tại bãi nhanh chóng. Đánh giá 5/5 sao!"
          </div>
        </div>

        {/* REQUIREMENT 3: Agent does NOT disburse. Explanation of Enterprise disbursement process */}
        <div style={{
          background: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: '12px',
          padding: '12px 14px',
          textAlign: 'left',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: '800', fontSize: '12px', marginBottom: '4px' }}>
            <Building2 size={16} />
            Quy trình giải ngân thuộc thẩm quyền Doanh nghiệp:
          </div>
          <div style={{ fontSize: '11px', color: '#14532D', lineHeight: '1.45' }}>
            Đại lý chỉ nhận thông báo giao hàng thành công. Thao tác đối soát và thực hiện lệnh giải ngân tiền từ tài khoản ký quỹ Escrow thuộc về Doanh nghiệp. Sau khi Doanh nghiệp phê duyệt, toàn bộ số tiền thanh toán sẽ tự động chuyển vào tài khoản ngân hàng của HTX Nông nghiệp Tân Bình.
          </div>
        </div>

        {/* Action Button: Return to Home */}
        <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
          <button 
            onClick={() => onNavigate('agent_home')}
            className="figma-btn-primary"
            style={{ width: '100%', padding: '13px', fontSize: '13.5px', fontWeight: '800' }}
          >
            Quay về trang chủ Đại lý
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
