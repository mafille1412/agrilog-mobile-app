import React, { useState } from 'react';
import { ArrowRight, Building2, Tractor, Lock, Phone, UserCheck, ShieldCheck, CreditCard } from 'lucide-react';

export default function WelcomeScreen({ onNavigate, onSelectRole }) {
  const [selectedRole, setSelectedRole] = useState('buyer'); // 'buyer' | 'agent'
  const [identifier, setIdentifier] = useState('0918.456.789');
  const [cccdNumber, setCccdNumber] = useState('089094001234');
  const [password, setPassword] = useState('••••••••');

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
    onSelectRole(role);
    if (role === 'buyer') {
      setIdentifier('0918.456.789');
    } else {
      setIdentifier('0913.789.012');
      setCccdNumber('089094001234');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onSelectRole(selectedRole);
    if (selectedRole === 'buyer') {
      onNavigate('buyer_home');
    } else {
      onNavigate('agent_home');
    }
  };

  const handleQuickLoginBuyer = () => {
    onSelectRole('buyer');
    onNavigate('buyer_home');
  };

  const handleQuickLoginAgent = () => {
    onSelectRole('agent');
    onNavigate('agent_home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Top Spacer */}
      <div style={{ height: '20px' }} />

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '24px 20px', justifyContent: 'center' }}>
        
        {/* Brand Icon & Heading */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '58px',
            height: '58px',
            background: 'linear-gradient(135deg, #1A4329, #155724)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            margin: '0 auto 14px',
            boxShadow: '0 8px 20px rgba(21, 87, 36, 0.25)'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 0-5-5H4a5 5 0 0 1 5 5v0a5 5 0 0 0 3 0" />
              <path d="M12 13a5 5 0 0 1 5-5h3a5 5 0 0 0-5 5v0a5 5 0 0 1-3 0" />
            </svg>
          </div>

          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '4px', letterSpacing: '-0.02em' }}>
            AgriLog B2B
          </h1>
          <p style={{ fontSize: '13px', color: '#4B5563', maxWidth: '300px', margin: '0 auto', lineHeight: '1.4' }}>
            Sàn giao dịch & kiểm định chất lượng phụ phẩm nông nghiệp
          </p>
        </div>

        {/* Role Segmented Selector */}
        <div style={{
          background: '#E5E7EB',
          padding: '4px',
          borderRadius: '12px',
          display: 'flex',
          gap: '4px',
          marginBottom: '20px'
        }}>
          <button
            type="button"
            onClick={() => handleRoleToggle('buyer')}
            style={{
              flex: 1,
              padding: '9px 12px',
              borderRadius: '9px',
              border: 'none',
              background: selectedRole === 'buyer' ? '#FFFFFF' : 'transparent',
              color: selectedRole === 'buyer' ? '#155724' : '#6B7280',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: selectedRole === 'buyer' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Building2 size={15} />
            Doanh nghiệp mua
          </button>

          <button
            type="button"
            onClick={() => handleRoleToggle('agent')}
            style={{
              flex: 1,
              padding: '9px 12px',
              borderRadius: '9px',
              border: 'none',
              background: selectedRole === 'agent' ? '#FFFFFF' : 'transparent',
              color: selectedRole === 'agent' ? '#B45309' : '#6B7280',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: selectedRole === 'agent' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Tractor size={15} />
            Đại lý thu gom / HTX
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
          
          {/* CCCD field when role is Agent */}
          {selectedRole === 'agent' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="figma-input-label">Số Căn cước công dân (CCCD / ĐDCN) *</label>
                <span style={{ fontSize: '10px', color: '#B45309', fontWeight: '700' }}>12 chữ số</span>
              </div>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text"
                  maxLength={12}
                  className="figma-input"
                  value={cccdNumber}
                  onChange={(e) => setCccdNumber(e.target.value)}
                  placeholder="Nhập 12 số CCCD người đại diện HTX"
                  required
                  style={{ paddingLeft: '38px', letterSpacing: '0.05em', fontWeight: '600' }}
                />
                <CreditCard size={16} color="#B45309" style={{ position: 'absolute', left: '12px', top: '14px' }} />
              </div>
              <div style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '3px' }}>
                Định danh đại diện pháp lý HTX để ký quỹ Escrow bảo chứng
              </div>
            </div>
          )}

          <div>
            <label className="figma-input-label">
              {selectedRole === 'buyer' ? 'Mã số thuế hoặc Số điện thoại *' : 'Số điện thoại liên hệ *'}
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                className="figma-input"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={selectedRole === 'buyer' ? '0918.xxx.xxx hoặc MST' : '0913.xxx.xxx'}
                required
                style={{ paddingLeft: '38px' }}
              />
              <Phone size={16} color="#9CA3AF" style={{ position: 'absolute', left: '12px', top: '14px' }} />
            </div>
          </div>

          <div>
            <label className="figma-input-label">Mật khẩu *</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password"
                className="figma-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                required
                style={{ paddingLeft: '38px' }}
              />
              <Lock size={16} color="#9CA3AF" style={{ position: 'absolute', left: '12px', top: '14px' }} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4B5563', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#155724' }} /> Ghi nhớ đăng nhập
            </label>
            <span style={{ fontSize: '12px', color: '#155724', fontWeight: '600', cursor: 'pointer' }}>
              Quên mật khẩu?
            </span>
          </div>

          <button 
            type="submit" 
            className="figma-btn-primary" 
            style={{ 
              marginTop: '4px', 
              background: selectedRole === 'buyer' ? '#155724' : '#B45309',
              boxShadow: selectedRole === 'buyer' ? '0 4px 12px rgba(21, 87, 36, 0.25)' : '0 4px 12px rgba(180, 83, 9, 0.25)'
            }}
          >
            Đăng nhập {selectedRole === 'buyer' ? 'Doanh nghiệp' : 'Đại lý / HTX'}
          </button>
        </form>

        {/* Register Link (Requirement: Cho phép đăng ký & chọn vai trò) */}
        <div style={{
          textAlign: 'center',
          marginTop: '22px',
          padding: '14px',
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          fontSize: '13px',
          color: '#4B5563'
        }}>
          Chưa có tài khoản trên sàn?{' '}
          <div 
            onClick={() => onNavigate('role_select')}
            style={{
              color: '#155724',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '4px'
            }}
          >
            Đăng ký & Chọn vai trò mới <ArrowRight size={14} />
          </div>
        </div>

        {/* Fast Demo Accounts */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ fontSize: '11px', color: '#6B7280', textAlign: 'center', marginBottom: '8px', fontWeight: '600' }}>
            ⚡ VÀO NHANH TÀI KHOẢN MẪU (DEMO MODE)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button
              type="button"
              onClick={handleQuickLoginBuyer}
              style={{
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                borderRadius: '10px',
                padding: '10px 8px',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#065F46'
              }}
            >
              <Building2 size={16} style={{ margin: '0 auto 4px' }} />
              <div style={{ fontSize: '11.5px', fontWeight: '800' }}>Doanh nghiệp</div>
              <div style={{ fontSize: '9.5px', color: '#047857' }}>Erex / GreenGrid</div>
            </button>

            <button
              type="button"
              onClick={handleQuickLoginAgent}
              style={{
                background: '#FEF3C7',
                border: '1px solid #FDE68A',
                borderRadius: '10px',
                padding: '10px 8px',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#92400E'
              }}
            >
              <Tractor size={16} style={{ margin: '0 auto 4px' }} />
              <div style={{ fontSize: '11.5px', fontWeight: '800' }}>Đại lý thu gom</div>
              <div style={{ fontSize: '9.5px', color: '#B45309' }}>HTX Tân Bình</div>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
