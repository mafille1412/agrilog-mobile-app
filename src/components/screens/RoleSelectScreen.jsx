import React, { useState } from 'react';
import { ArrowLeft, Building2, Tractor, CheckCircle2 } from 'lucide-react';

export default function RoleSelectScreen({ onNavigate, onBack, onSelectRole }) {
  const [selectedRole, setSelectedRole] = useState('buyer'); // 'buyer' | 'agent'

  const handleContinue = () => {
    onSelectRole(selectedRole);
    if (selectedRole === 'buyer') {
      onNavigate('register_buyer');
    } else {
      onNavigate('register_agent');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F6F8' }}>
      
      {/* Figma Header */}
      <div className="figma-screen-header">
        <button 
          className="figma-header-btn" 
          onClick={() => onBack ? onBack('welcome') : onNavigate('welcome')}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="figma-header-title">
          Đăng ký tài khoản
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Screen Body */}
      <div className="figma-screen-viewport" style={{ padding: '20px 16px' }}>
        
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>
            Bạn muốn đăng ký với vai trò?
          </h2>
          <p style={{ fontSize: '13px', color: '#6B7280' }}>
            Vui lòng chọn vai trò phù hợp nhất với mô hình hoạt động của bạn
          </p>
        </div>

        {/* 2 Role Cards in Figma */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          
          {/* Buyer Role Card */}
          <div 
            onClick={() => setSelectedRole('buyer')}
            className="figma-card"
            style={{
              border: selectedRole === 'buyer' ? '2px solid #155724' : '1px solid #E5E7EB',
              background: selectedRole === 'buyer' ? '#F0FDF4' : '#FFFFFF',
              cursor: 'pointer',
              position: 'relative',
              padding: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: selectedRole === 'buyer' ? '#DCFCE7' : '#F3F4F6',
                color: selectedRole === 'buyer' ? '#155724' : '#6B7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Building2 size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: selectedRole === 'buyer' ? '#155724' : '#111827' }}>
                    Doanh nghiệp thu mua
                  </h3>
                  {selectedRole === 'buyer' && (
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={13} />
                    </div>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: '1.4', marginTop: '4px' }}>
                  Dành cho nhà máy năng lượng sinh khối, phân bón hữu cơ, vật liệu xây dựng có nhu cầu thu mua phụ phẩm số lượng lớn.
                </p>
              </div>
            </div>
          </div>

          {/* Agent Role Card */}
          <div 
            onClick={() => setSelectedRole('agent')}
            className="figma-card"
            style={{
              border: selectedRole === 'agent' ? '2px solid #155724' : '1px solid #E5E7EB',
              background: selectedRole === 'agent' ? '#F0FDF4' : '#FFFFFF',
              cursor: 'pointer',
              position: 'relative',
              padding: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: selectedRole === 'agent' ? '#DCFCE7' : '#F3F4F6',
                color: selectedRole === 'agent' ? '#155724' : '#6B7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Tractor size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: selectedRole === 'agent' ? '#155724' : '#111827' }}>
                    Đại lý / Đơn vị cung ứng
                  </h3>
                  {selectedRole === 'agent' && (
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#155724', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={13} />
                    </div>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: '1.4', marginTop: '4px' }}>
                  Dành cho thương lái, đại lý thu gom, hợp tác xã tại địa phương cung ứng rơm rạ, trấu, bã mía.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button onClick={handleContinue} className="figma-btn-primary">
            Tiếp tục
          </button>

          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: '#6B7280' }}>
            Đã có tài khoản?{' '}
            <span 
              onClick={() => onNavigate('welcome')}
              style={{ color: '#155724', fontWeight: '700', cursor: 'pointer' }}
            >
              Đăng nhập
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
