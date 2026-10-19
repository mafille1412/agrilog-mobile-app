import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  Package, 
  Scan, 
  Camera, 
  SwitchCamera,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';

export default function QrScannerScreen({ onNavigate, onBack }) {
  const [flashlight, setFlashlight] = useState(false);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' (sau) hoặc 'user' (trước)
  const [hasCamera, setHasCamera] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedLot, setScannedLot] = useState({
    id: 'AGR-261010-008',
    coop: 'HTX Nông nghiệp Tân Bình',
    location: 'Thoại Sơn, An Giang',
    weight: '17.6 tấn',
    moisture: '13.8%',
    unit: 'Rơm rạ cuộn nén'
  });

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Khởi động Camera điện thoại / webcam
  useEffect(() => {
    let isMounted = true;

    async function startCamera() {
      // Dừng track cũ nếu có
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }

      setCameraError(null);

      // Kiểm tra hỗ trợ MediaDevices
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError('Trình duyệt không hỗ trợ truy cập camera trực tiếp.');
        return;
      }

      try {
        let stream;
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: facingMode,
              width: { ideal: 1280 },
              height: { ideal: 720 }
            },
            audio: false
          });
        } catch (err1) {
          // Thử lại với ràng buộc cơ bản nếu facingMode không được hỗ trợ
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
          });
        }

        if (!isMounted) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch(e => console.log('Play err:', e));
          };
        }
        setHasCamera(true);
      } catch (err) {
        console.warn('Camera access denied or unavailable:', err);
        if (isMounted) {
          setHasCamera(false);
          setCameraError(
            err.name === 'NotAllowedError'
              ? 'Quyền camera bị từ chối. Bạn có thể bấm nút "Quét thử mã" bên dưới.'
              : 'Không thể mở luồng camera. Bạn có thể bấm nút "Quét thử mã" để tiếp tục.'
          );
        }
      }
    }

    startCamera();

    return () => {
      isMounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, [facingMode]);

  // Bật/tắt đèn Flash nếu thiết bị hỗ trợ
  const toggleFlashlight = async () => {
    if (!streamRef.current) return;
    const track = streamRef.current.getVideoTracks()[0];
    if (track) {
      try {
        const capabilities = track.getCapabilities ? track.getCapabilities() : {};
        if (capabilities.torch) {
          const nextState = !flashlight;
          await track.applyConstraints({
            advanced: [{ torch: nextState }]
          });
          setFlashlight(nextState);
        } else {
          setFlashlight(!flashlight);
        }
      } catch (e) {
        setFlashlight(!flashlight);
      }
    }
  };

  // Đổi camera trước / sau
  const toggleFacingMode = () => {
    setFacingMode(prev => (prev === 'environment' ? 'user' : 'environment'));
  };

  const handleSimulateScan = () => {
    setScanned(true);
  };

  const handleBack = () => {
    if (onBack) {
      onBack('buyer_order_detail');
    } else {
      onNavigate('buyer_order_detail');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#090D14',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Top Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(11, 15, 23, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 20
      }}>
        <button 
          onClick={handleBack}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '10px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={20} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '15px',
            fontWeight: '800',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Scan size={17} color="#10B981" />
            Quét mã QR IoT
          </div>
          <div style={{ fontSize: '11px', color: '#94A3B8' }}>
            Tem truy xuất nguồn gốc lô hàng
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Flip camera */}
          <button 
            onClick={toggleFacingMode}
            title="Đổi camera trước / sau"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <SwitchCamera size={18} />
          </button>

          {/* Flashlight */}
          <button 
            onClick={toggleFlashlight}
            title="Bật/Tắt đèn Flash"
            style={{
              background: flashlight ? '#F59E0B' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: flashlight ? '#000000' : '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <Zap size={18} />
          </button>
        </div>
      </div>

      {/* Main Viewfinder Section */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        
        {/* Real Camera Video Background */}
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            opacity: hasCamera ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />

        {/* Fallback Mesh Background if camera not open */}
        {!hasCamera && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, #1E293B 0%, #090D14 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.3
            }} />
          </div>
        )}

        {/* Viewfinder Target Window */}
        <div style={{
          position: 'relative',
          width: '230px',
          height: '230px',
          borderRadius: '24px',
          border: '2px solid rgba(16, 185, 129, 0.5)',
          background: scanned ? 'rgba(6, 78, 59, 0.75)' : 'rgba(15, 23, 42, 0.25)',
          backdropFilter: 'blur(2px)',
          boxShadow: scanned ? '0 0 35px rgba(16, 185, 129, 0.4)' : '0 0 30px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}>
          {/* Corner brackets */}
          <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '28px', height: '28px', borderTop: '4px solid #10B981', borderLeft: '4px solid #10B981', borderTopLeftRadius: '20px' }} />
          <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '28px', height: '28px', borderTop: '4px solid #10B981', borderRight: '4px solid #10B981', borderTopRightRadius: '20px' }} />
          <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '28px', height: '28px', borderBottom: '4px solid #10B981', borderLeft: '4px solid #10B981', borderBottomLeftRadius: '20px' }} />
          <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '28px', height: '28px', borderBottom: '4px solid #10B981', borderRight: '4px solid #10B981', borderBottomRightRadius: '20px' }} />

          {/* Animated Laser Scanning Line */}
          {!scanned && (
            <div style={{
              position: 'absolute',
              left: '12px',
              right: '12px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #10B981, #34D399, transparent)',
              boxShadow: '0 0 14px #10B981',
              borderRadius: '2px',
              animation: 'qrLaser 2s ease-in-out infinite alternate'
            }} />
          )}

          {/* Center Target Status */}
          {!scanned ? (
            <div style={{ textAlign: 'center', padding: '16px', color: '#FFFFFF' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px'
              }}>
                <Scan size={24} />
              </div>
              <p style={{ fontSize: '11.5px', color: '#CBD5E1', margin: 0, fontWeight: '500', maxWidth: '180px', lineHeight: '1.4' }}>
                Hướng camera vào tem QR trên bao bì hoặc kiện rơm
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: '#10B981',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
              }}>
                <CheckCircle2 size={32} />
              </div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ĐÃ NHẬN DIỆN THÀNH CÔNG!
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginTop: '3px' }}>
                {scannedLot.id}
              </div>
            </div>
          )}
        </div>

        {/* Status Hint Pill */}
        <div style={{
          marginTop: '16px',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '6px 14px',
          fontSize: '11.5px',
          color: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: hasCamera ? '#10B981' : '#F59E0B',
            boxShadow: hasCamera ? '0 0 8px #10B981' : '0 0 8px #F59E0B'
          }} />
          <span>{hasCamera ? 'Camera trực tiếp đang hoạt động' : 'Đang ở chế độ mô phỏng quét'}</span>
        </div>

        {/* Camera Permission Error Notice (if any) */}
        {cameraError && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            right: '16px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '10px',
            padding: '8px 12px',
            fontSize: '11px',
            color: '#FCA5A5',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10
          }}>
            <AlertCircle size={15} style={{ flexShrink: 0 }} />
            <span>{cameraError}</span>
          </div>
        )}

      </div>

      {/* Bottom Sheet Controls & Result */}
      <div style={{
        background: '#0F172A',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        zIndex: 20
      }}>
        {scanned ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
            {/* Scanned Lot Result Card */}
            <div style={{
              background: '#1E293B',
              border: '1px solid #10B981',
              borderRadius: '14px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800'
                }}>
                  <Package size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: '#FFFFFF' }}>
                    Lô: {scannedLot.id}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                    {scannedLot.coop} · {scannedLot.weight} · Độ ẩm {scannedLot.moisture}
                  </div>
                </div>
              </div>
              <span style={{
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#34D399',
                fontSize: '11px',
                fontWeight: '800',
                padding: '3px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                IoT Chuẩn
              </span>
            </div>

            {/* Next Action Buttons */}
            <button
              onClick={() => onNavigate('weighbridge')}
              style={{
                width: '100%',
                height: '46px',
                background: '#1A4329',
                color: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(26, 67, 41, 0.35)'
              }}
            >
              <Scale size={18} /> Chuyển sang Cân điện tử trạm cân →
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => setScanned(false)}
                style={{
                  height: '40px',
                  background: '#1E293B',
                  color: '#CBD5E1',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <RefreshCw size={14} /> Quét lại
              </button>

              <button
                onClick={() => onNavigate('batch_qr')}
                style={{
                  height: '40px',
                  background: '#1E293B',
                  color: '#34D399',
                  borderRadius: '10px',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <QrCode size={14} /> Xem QR lô hàng
              </button>
            </div>

          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '11.5px', color: '#94A3B8', textAlign: 'center', lineHeight: '1.4' }}>
              Đưa camera lại gần tem QR in trên bao bì hoặc kiện rơm (khoảng cách 15 - 25 cm)
            </div>

            {/* Quick Demo Scan Button */}
            <button
              onClick={handleSimulateScan}
              style={{
                width: '100%',
                height: '46px',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Scan size={18} />
              Bấm nhận diện tem Lô AGR-261010-008
            </button>

            <button
              onClick={handleBack}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                fontSize: '12px',
                fontWeight: '600',
                padding: '6px',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Quay lại chi tiết đơn hàng
            </button>
          </div>
        )}
      </div>

      {/* Global Laser Animation Style */}
      <style>{`
        @keyframes qrLaser {
          0% { top: 12px; }
          100% { top: 214px; }
        }
      `}</style>

    </div>
  );
}
