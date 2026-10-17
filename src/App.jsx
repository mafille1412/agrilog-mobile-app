import React, { useState } from 'react';
import { 
  Wifi, 
  BatteryMedium, 
  Signal, 
  Layers, 
  Smartphone, 
  RotateCcw,
  QrCode,
  X,
  ExternalLink,
  Globe
} from 'lucide-react';

import WelcomeScreen from './components/screens/WelcomeScreen';
import RoleSelectScreen from './components/screens/RoleSelectScreen';
import RegisterBuyerScreen from './components/screens/RegisterBuyerScreen';
import RegisterAgentScreen from './components/screens/RegisterAgentScreen';
import VerificationPendingScreen from './components/screens/VerificationPendingScreen';
import BuyerHomeScreen from './components/screens/BuyerHomeScreen';
import CreateRequestScreen from './components/screens/CreateRequestScreen';
import MatchingScreen from './components/screens/MatchingScreen';
import AgentHomeScreen from './components/screens/AgentHomeScreen';
import AgentCreateBatchScreen from './components/screens/AgentCreateBatchScreen';
import AgentOrderDetailScreen from './components/screens/AgentOrderDetailScreen';
import AgentCommitSuccessScreen from './components/screens/AgentCommitSuccessScreen';
import AgentBatchesScreen from './components/screens/AgentBatchesScreen';
import AgentCompletedOrderScreen from './components/screens/AgentCompletedOrderScreen';
import IotTestingScreen from './components/screens/IotTestingScreen';
import BatchQrScreen from './components/screens/BatchQrScreen';
import LogisticsTrackingScreen from './components/screens/LogisticsTrackingScreen';
import WeighbridgeScreen from './components/screens/WeighbridgeScreen';
import EscrowSettlementScreen from './components/screens/EscrowSettlementScreen';
import EsgReportScreen from './components/screens/EsgReportScreen';
import AccountScreen from './components/screens/AccountScreen';

import FigmaCanvasView from './components/FigmaCanvasView';
import PublicTraceabilityView from './components/PublicTraceabilityView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [screenHistory, setScreenHistory] = useState([]);
  const [currentRole, setCurrentRole] = useState('buyer');
  const [activeOrder, setActiveOrder] = useState(null);
  const [showCanvasView, setShowCanvasView] = useState(false);
  const [showPublicPortal, setShowPublicPortal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleNavigate = (nextScreen, replace = false) => {
    if (nextScreen === currentScreen) return;
    if (!replace) {
      setScreenHistory(prev => [...prev, currentScreen]);
    }
    setCurrentScreen(nextScreen);
  };

  const handleBack = (fallbackScreen) => {
    setScreenHistory(oldHistory => {
      const history = [...oldHistory];
      while (history.length > 0 && history[history.length - 1] === currentScreen) {
        history.pop();
      }
      if (history.length > 0) {
        const prev = history.pop();
        setCurrentScreen(prev);
        return history;
      }
      if (fallbackScreen) {
        setCurrentScreen(fallbackScreen);
      } else {
        setCurrentScreen(currentRole === 'agent' ? 'agent_home' : 'buyer_home');
      }
      return [];
    });
  };

  const handleLogout = () => {
    setCurrentRole('buyer');
    setActiveOrder(null);
    setScreenHistory([]);
    setCurrentScreen('welcome');
  };

  // Public Online HTTPS Link (Works anywhere on 4G/5G or different Wi-Fi!)
  const publicOnlineUrl = 'https://25e7bcc4907510.lhr.life';

  const screenNames = {
    buyer_home: 'Tổng quan thu mua (Trang chủ)',
    create_request: 'Tạo yêu cầu thu mua',
    matching: 'Khớp lệnh & đại lý đề xuất',
    batch_qr: 'Mã định danh lô hàng & QR',
    nir_testing: 'Kiểm định độ ẩm bằng thiết bị IoT',
    logistics_tracking: 'Tối ưu hóa logistics & Vận chuyển',
    weighbridge: 'Cân điện tử & Nghiệm thu tại nhà máy',
    escrow_settlement: 'Quyết toán Escrow tự động',
    esg_report: 'Báo cáo MRV Carbon & ESG',
    welcome: 'Đăng nhập (Chào mừng trở lại)',
    role_select: 'Chọn vai trò đăng ký',
    register_buyer: 'Thông tin doanh nghiệp',
    register_agent: 'Đăng ký đơn vị cung ứng',
    verification_pending: 'Xác nhận & Đã nhận hồ sơ',
    agent_home: 'Tổng quan Đại lý (Trang chủ)',
    agent_order_detail: 'Đại lý - Chi tiết đơn & Cam kết',
    agent_commit_success: 'Đại lý - Cam kết đã xác nhận',
    agent_batches: 'Đại lý - Quản lý & Kiểm định lô hàng',
    agent_completed_order: 'Đại lý - Đơn hàng hoàn tất & Quyết toán',
    account: 'Quản lý tài khoản & Đăng xuất'
  };

  const getFrameTitle = () => {
    switch (currentScreen) {
      case 'buyer_home': return 'Tổng quan thu mua';
      case 'create_request': return 'Tạo yêu cầu thu mua';
      case 'matching': return 'Khớp lệnh & đại lý đề xuất';
      case 'batch_qr': return 'Mã định danh lô hàng';
      case 'nir_testing': return 'Kiểm định thiết bị IoT';
      case 'logistics_tracking': return 'Tối ưu hóa logistics';
      case 'weighbridge': return 'Giao nhận & đối soát';
      case 'escrow_settlement': return 'Quyết toán Escrow';
      case 'esg_report': return 'Báo cáo MRV Carbon & ESG';
      case 'welcome': return 'Đăng nhập';
      case 'role_select': return 'Đăng ký tài khoản';
      case 'register_buyer': return 'Thông tin doanh nghiệp';
      case 'register_agent': return 'Đăng ký đơn vị cung ứng';
      case 'verification_pending': return 'Đã nhận hồ sơ';
      case 'agent_home': return 'Tổng quan đại lý';
      case 'agent_order_detail': return 'Chi tiết đơn hàng';
      case 'agent_commit_success': return 'Cam kết cung ứng';
      case 'agent_batches': return 'Kiểm định & Lô hàng';
      case 'agent_completed_order': return 'Đơn hàng hoàn tất';
      case 'account': return 'Quản lý tài khoản';
      default: return 'AgriLog B2B';
    }
  };

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'buyer_home':
        return <BuyerHomeScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} onSelectOrder={setActiveOrder} />;
      case 'create_request':
        return <CreateRequestScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} onOrderCreated={setActiveOrder} />;
      case 'matching':
        return <MatchingScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'batch_qr':
        return <BatchQrScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} onOpenPublicPortal={() => setShowPublicPortal(true)} />;
      case 'nir_testing':
        return <IotTestingScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'logistics_tracking':
        return <LogisticsTrackingScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'weighbridge':
        return <WeighbridgeScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'escrow_settlement':
        return <EscrowSettlementScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'esg_report':
        return <EsgReportScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} onBack={handleBack} onSelectRole={setCurrentRole} />;
      case 'role_select':
        return <RoleSelectScreen onNavigate={handleNavigate} onBack={handleBack} onSelectRole={setCurrentRole} />;
      case 'register_buyer':
        return <RegisterBuyerScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'register_agent':
        return <RegisterAgentScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'verification_pending':
        return <VerificationPendingScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'agent_home':
        return <AgentHomeScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} onSelectOrder={setActiveOrder} />;
      case 'agent_create_batch':
        return <AgentCreateBatchScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'agent_order_detail':
        return <AgentOrderDetailScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'agent_commit_success':
        return <AgentCommitSuccessScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'agent_batches':
        return <AgentBatchesScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'agent_completed_order':
        return <AgentCompletedOrderScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} />;
      case 'account':
        return <AccountScreen onNavigate={handleNavigate} onBack={handleBack} currentRole={currentRole} onLogout={handleLogout} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} onBack={handleBack} onSelectRole={setCurrentRole} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', background: '#1E1E1E', overflow: 'hidden' }}>
      
      {/* Top Figma Prototype Presentation Bar */}
      <header className="figma-proto-bar">
        <div className="proto-bar-left">
          <div className="figma-logo-icon">
            <svg width="15" height="22" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
          </div>
          <span className="proto-file-name">AgriLog - Prototype UI</span>
          <span className="proto-page-tag">/ Flow 1</span>
        </div>

        {/* Screen Switcher Dropdown */}
        <div className="proto-bar-center">
          <select 
            className="proto-screen-select"
            value={currentScreen}
            onChange={(e) => {
              setCurrentScreen(e.target.value);
              setShowCanvasView(false);
              setShowPublicPortal(false);
            }}
          >
            {Object.entries(screenNames).map(([key, name]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        {/* Right Controls */}
        <div className="proto-bar-right">
          <button 
            className="proto-btn mobile-share-btn"
            onClick={() => setShowPhoneModal(true)}
            title="Mở trên điện thoại qua 4G/5G hoặc bất kỳ mạng Wi-Fi nào"
          >
            <Globe size={14} /> Mở trên điện thoại (Online)
          </button>

          <button 
            className={`proto-btn ${!showCanvasView && !showPublicPortal ? 'active' : ''}`}
            onClick={() => {
              setShowCanvasView(false);
              setShowPublicPortal(false);
            }}
          >
            <Smartphone size={14} /> Mockup
          </button>

          <button 
            className={`proto-btn ${showCanvasView ? 'active' : ''}`}
            onClick={() => {
              setShowCanvasView(!showCanvasView);
              setShowPublicPortal(false);
            }}
          >
            <Layers size={14} /> Toàn bộ khung
          </button>

          <button 
            className="proto-btn"
            onClick={() => setCurrentScreen('buyer_home')}
            title="Khởi động lại trang chủ"
          >
            <RotateCcw size={14} /> Restart
          </button>
        </div>
      </header>

      {/* Main Workspace Stage */}
      <main className="figma-stage">
        {showPublicPortal ? (
          <PublicTraceabilityView onClose={() => setShowPublicPortal(false)} />
        ) : showCanvasView ? (
          <FigmaCanvasView 
            currentScreen={currentScreen}
            onSelectScreen={(screenId) => {
              setCurrentScreen(screenId);
              setShowCanvasView(false);
            }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Figma Frame Title above Device (exact as in user image) */}
            <div style={{
              color: '#8E8E93',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '10px',
              letterSpacing: '-0.01em'
            }}>
              {getFrameTitle()}
            </div>

            {/* Mobile Phone Mockup */}
            <div className="figma-phone-device" style={{ background: '#F8FAF9' }}>
              
              {/* iOS Status Bar matching Figma */}
              <div className="figma-status-bar" style={{ background: '#FFFFFF' }}>
                <span className="figma-status-time">9:41</span>
                <div className="figma-status-icons">
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                    <rect x="0" y="8" width="3" height="3" rx="0.5" />
                    <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" />
                    <rect x="9" y="3" width="3" height="8" rx="0.5" />
                    <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
                  </svg>
                  <Wifi size={15} strokeWidth={2.4} />
                  <svg width="22" height="11" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="1" width="18" height="10" rx="3" />
                    <rect x="3" y="3" width="12" height="6" rx="1.5" fill="currentColor" />
                    <path d="M21 4v4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Render Active Figma Screen */}
              {renderActiveScreen()}

              {/* iOS Home Indicator Bar */}
              <div className="figma-home-bar-area" style={{ background: '#FFFFFF' }}>
                <div className="figma-home-bar" />
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Modal: Open on Phone / Online Tunnel Link */}
      {showPhoneModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px 24px',
            maxWidth: '430px',
            width: '90%',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <button 
              onClick={() => setShowPhoneModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#F3F4F6',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#4B5563'
              }}
            >
              <X size={18} />
            </button>

            <div style={{
              width: '52px',
              height: '52px',
              background: '#EAF5EC',
              color: '#155724',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px'
            }}>
              <Globe size={28} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '6px' }}>
              Mở trên điện thoại (Bất kỳ mạng nào)
            </h3>
            <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '18px' }}>
              Hoạt động trên <strong>4G, 5G, hoặc mạng Wi-Fi khác</strong> mà không cần kết nối chung mạng!
            </p>

            {/* Public URL Box */}
            <div style={{
              background: '#F0FDF4',
              border: '2px solid #155724',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#155724', wordBreak: 'break-all' }}>
                {publicOnlineUrl}
              </span>
              <button 
                onClick={() => {
                  navigator.clipboard?.writeText(publicOnlineUrl);
                  alert('Đã chép link công khai vào clipboard!');
                }}
                style={{
                  background: '#155724',
                  border: 'none',
                  color: 'white',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginLeft: '8px'
                }}
              >
                Sao chép
              </button>
            </div>

            <div style={{ fontSize: '12.5px', color: '#374151', lineHeight: '1.5', textAlign: 'left', background: '#F8FAF9', border: '1px solid #E5E7EB', padding: '12px 14px', borderRadius: '12px', marginBottom: '14px' }}>
              📱 <strong>Cách mở:</strong>
              <ol style={{ paddingLeft: '18px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Mở trình duyệt (Safari / Chrome) trên điện thoại bất kỳ.</li>
                <li>Gõ hoặc dán địa chỉ: <strong>https://c66e9f3884fc7c.lhr.life</strong></li>
                <li>Ứng dụng sẽ hiển thị toàn màn hình ngay lập tức!</li>
              </ol>
            </div>

            <button 
              onClick={() => setShowPhoneModal(false)}
              className="figma-btn-primary"
              style={{ height: '42px', fontSize: '14px' }}
            >
              Đã hiểu
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
