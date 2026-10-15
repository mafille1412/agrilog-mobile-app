import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeScreen({ onNavigate, onSelectRole }) {
  const [identifier, setIdentifier] = useState('0918.456.789');
  const [password, setPassword] = useState('••••••••');

  const handleLogin = (e) => {
    e.preventDefault();
    onSelectRole('buyer');
    onNavigate('buyer_home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Top Figma Status Spacer */}
      <div style={{ height: '24px' }} />

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '24px 20px', justifyContent: 'center' }}>
        
        {/* Brand Icon & Heading */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            background: '#155724',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '800',
            fontSize: '26px',
            margin: '0 auto 16px',
            boxShadow: '0 4px 14px rgba(21, 87, 36, 0.25)'
          }}>
            A
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
            Chào mừng trở lại
          </h1>
          <p style={{ fontSize: '13px', color: '#6B7280' }}>
            Đăng nhập để quản lý chuỗi cung ứng phụ phẩm nông nghiệp
          </p>
        </div>

        {/* Login Form (Exact Figma Screen 5) */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="figma-input-label">Số điện thoại hoặc Email</label>
            <input 
              type="text"
              className="figma-input"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Nhập số điện thoại"
              required
            />
          </div>

          <div>
            <label className="figma-input-label">Mật khẩu</label>
            <input 
              type="password"
              className="figma-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '12px', color: '#155724', fontWeight: '600', cursor: 'pointer' }}>
              Quên mật khẩu?
            </span>
          </div>

          <button type="submit" className="figma-btn-primary" style={{ marginTop: '8px' }}>
            Đăng nhập
          </button>
        </form>

        {/* Footer links */}
        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#6B7280' }}>
          Chưa có tài khoản?{' '}
          <span 
            onClick={() => onNavigate('role_select')}
            style={{ color: '#155724', fontWeight: '700', cursor: 'pointer' }}
          >
            Đăng ký ngay
          </span>
        </div>

        {/* Quick Prototype Switcher Pill */}
        <div style={{
          marginTop: '32px',
          background: '#EAF5EC',
          border: '1px solid #C3E6CB',
          borderRadius: '10px',
          padding: '10px 12px',
          fontSize: '11px',
          color: '#155724',
          textAlign: 'center'
        }}>
          <strong>Thử nghiệm nhanh:</strong> Bấm "Đăng nhập" để vào vai trò Doanh nghiệp hoặc bấm "Đăng ký ngay" để chọn vai trò Đại lý.
        </div>

      </div>

    </div>
  );
}
