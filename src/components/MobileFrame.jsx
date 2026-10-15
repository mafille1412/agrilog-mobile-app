import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

export default function MobileFrame({ children }) {
  const currentTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="phone-mockup-frame">
      {/* Top Status Bar & Dynamic Island */}
      <div className="phone-notch">
        <span style={{ fontSize: '12px', fontWeight: '800' }}>9:41</span>
        
        {/* Dynamic Island Pill */}
        <div className="notch-pill">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
          <span style={{ color: '#A7F3D0', fontSize: '9px', fontWeight: '700' }}>AgriLog NIR</span>
        </div>

        <div className="notch-icons">
          <Signal size={13} strokeWidth={2.5} />
          <Wifi size={13} strokeWidth={2.5} />
          <BatteryMedium size={14} strokeWidth={2.5} />
        </div>
      </div>

      {/* Screen Body Viewport */}
      {children}

      {/* Home Indicator */}
      <div className="phone-home-indicator">
        <div className="home-bar" />
      </div>
    </div>
  );
}
