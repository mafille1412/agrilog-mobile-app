import React from 'react';
import { 
  Building2, 
  Award, 
  TrendingUp, 
  Leaf, 
  ShieldCheck, 
  Microscope, 
  DollarSign, 
  Users, 
  ExternalLink,
  Target
} from 'lucide-react';
import { FINANCIAL_METRICS_VSIC } from '../data/agrilogData';

export default function PitchDeckView({ onSwitchToSimulator }) {
  const f = FINANCIAL_METRICS_VSIC;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0B1E14',
      overflowY: 'auto',
      padding: '40px 24px',
      color: '#FFFFFF'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Pitch Hero Header */}
        <div style={{
          background: 'linear-gradient(135deg, #104C2E, #0A2F1D)',
          borderRadius: '24px',
          padding: '36px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          position: 'relative'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', marginBottom: '14px' }}>
            <Award size={16} /> {f.competition}
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px', color: '#F9FAFB' }}>
            AgriLog – Nền tảng số hóa chuỗi cung ứng phụ phẩm nông nghiệp
          </h1>
          <p style={{ fontSize: '15px', color: '#D1FAE5', lineHeight: '1.6', maxWidth: '750px', marginBottom: '20px' }}>
            Hệ điều hành số & Trọng tài chất lượng B2B trung lập (Asset-light) kết nối doanh nghiệp thu mua với đại lý thu gom, ứng dụng công nghệ quang phổ NIR Spear Probe, AI Logistics đa điểm, truy xuất Batch ID Blockchain và Báo cáo phát thải Carbon MRV.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={onSwitchToSimulator}
              className="btn-primary-mobile"
              style={{ width: 'auto', padding: '12px 24px' }}
            >
              Mở Ứng dụng Mô phỏng Thực tế →
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A7F3D0', fontSize: '13px', fontWeight: '600', padding: '0 12px' }}>
              <Users size={16} /> Đội thi: {f.team}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px', color: '#34D399', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={22} /> 4 Trụ cột Công nghệ & Giải pháp Khác biệt (USP)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#DCFCE7', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Microscope size={22} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '6px' }}>NIR Spear Probe 3 điểm</h3>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5' }}>
                Mũi giáo 1.2m lấy mẫu đại diện sâu (đáy - giữa - mặt trên), nắp sapphire chống bụi và thuật toán bù nhiệt độ môi trường ngoài trời ĐBSCL.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <DollarSign size={22} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '6px' }}>Định giá Sinh khối khô</h3>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5' }}>
                Bóc tách 30-50% lượng nước thừa, doanh nghiệp chỉ trả tiền cho phần chất khô thực tế theo thuật toán Dry Biomass Pricing.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E0F2FE', color: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <TrendingUp size={22} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '6px' }}>AI Logistics Engine</h3>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5' }}>
                Ghép tuyến đa điểm và mạng lưới máy cuộn rơm lưu động nén tỷ trọng 40kg/m³ lên 200kg/m³, giảm 38% xe rỗng, tiết kiệm 18.5% chi phí.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F3E8FF', color: '#7E22CE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Leaf size={22} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '6px' }}>Dữ liệu MRV Carbon & ESG</h3>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5' }}>
                Gắn Batch ID xác thực Blockchain Hyperledger Fabric + Polygon, sẵn sàng phục vụ chứng nhận xuất khẩu EUDR và CBAM.
              </p>
            </div>
          </div>
        </div>

        {/* Financial Metrics & TAM/SAM/SOM Table */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '24px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px', color: '#34D399', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Target size={20} /> Quy mô Thị trường (TAM / SAM / SOM) & Kế hoạch 5 Năm
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>TAM (Toàn quốc)</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#34D399' }}>{f.tam.split(' ')[0]} tỷ</div>
              <div style={{ fontSize: '10px', color: '#6EE7B7' }}>156 triệu tấn phụ phẩm</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>SAM (Vùng ĐBSCL)</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#60A5FA' }}>{f.sam.split(' ')[0]} tỷ</div>
              <div style={{ fontSize: '10px', color: '#93C5FD' }}>Chiếm 35% cả nước</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Vốn hạt giống cần</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#FCD34D' }}>{f.seedCapital}</div>
              <div style={{ fontSize: '10px', color: '#FDE68A' }}>Hòa vốn vào Năm 2</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Doanh thu Năm 5</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#F472B6' }}>172.6 tỷ VNĐ</div>
              <div style={{ fontSize: '10px', color: '#FBCFE8' }}>Biên ròng 34.5%</div>
            </div>
          </div>

          {/* 5-Year Financial Forecast Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', color: '#A7F3D0' }}>
                  <th style={{ padding: '8px' }}>Chỉ tiêu tài chính</th>
                  <th style={{ padding: '8px' }}>Số lô xử lý</th>
                  <th style={{ padding: '8px' }}>GMV giao dịch</th>
                  <th style={{ padding: '8px' }}>Doanh thu thuần</th>
                  <th style={{ padding: '8px' }}>Lợi nhuận sau thuế</th>
                  <th style={{ padding: '8px' }}>Biên EBITDA</th>
                </tr>
              </thead>
              <tbody>
                {f.forecastPnl.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: '700' }}>{row.year}</td>
                    <td style={{ padding: '10px 8px' }}>{row.lots}</td>
                    <td style={{ padding: '10px 8px', color: '#93C5FD' }}>{row.gmv}</td>
                    <td style={{ padding: '10px 8px', color: '#34D399', fontWeight: '700' }}>{row.revenue}</td>
                    <td style={{ padding: '10px 8px', color: row.netProfit.startsWith('+') ? '#34D399' : '#F87171', fontWeight: '700' }}>
                      {row.netProfit}
                    </td>
                    <td style={{ padding: '10px 8px' }}>{row.ebitdaMargin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5 Revenue Streams */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '24px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px', color: '#34D399' }}>
            5 Dòng Doanh Thu Đa Dạng (Không Thâm Dụng Vốn)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {f.revenueStreams.map((st, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#FFFFFF', marginBottom: '4px' }}>
                  {st.name}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#34D399' }}>
                  {st.rate}
                </div>
                <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>
                  Áp dụng: {st.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
