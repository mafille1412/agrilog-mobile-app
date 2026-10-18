import React, { useState } from 'react';
import { 
  ArrowLeft, Camera, Zap, RefreshCw, CheckCircle, 
  Package, ShieldCheck, AlertCircle, ArrowRight, Scan
} from 'lucide-react';

export default function QrScannerScreen({ onNavigate, onBack }) {
  const [flashlight, setFlashlight] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleSimulateScan = () => {
    setScanned(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/* Top Header */}
      <div className="p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-10 flex items-center justify-between">
        <button 
          onClick={onBack || (() => onNavigate('buyer_order_detail'))}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <h1 className="font-bold text-base text-white flex items-center justify-center gap-1.5">
            <Scan size={18} className="text-emerald-400" />
            Quét mã QR IoT
          </h1>
          <p className="text-xs text-slate-400">Tem truy xuất nguồn gốc lô hàng</p>
        </div>
        <button 
          onClick={() => setFlashlight(!flashlight)}
          className={`p-2 rounded-xl transition ${flashlight ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          title="Bật/Tắt đèn Flash"
        >
          <Zap size={20} />
        </button>
      </div>

      {/* Viewfinder area */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Background simulated camera stream (dark mesh / animated pulse) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90 flex items-center justify-center">
          <div className="w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        </div>

        {/* Viewfinder Frame */}
        <div className="relative w-72 h-72 rounded-3xl border-2 border-emerald-500/40 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center shadow-2xl shadow-emerald-500/10">
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-emerald-400 rounded-tl-xl"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-emerald-400 rounded-tr-xl"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-emerald-400 rounded-bl-xl"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-emerald-400 rounded-br-xl"></div>

          {/* Laser animation */}
          {!scanned && (
            <div className="absolute inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] animate-bounce"></div>
          )}

          {/* Center Target Icon */}
          {!scanned ? (
            <div className="flex flex-col items-center text-center p-4">
              <Camera size={36} className="text-emerald-400/60 mb-2 animate-pulse" />
              <p className="text-xs text-slate-300 font-medium max-w-[200px]">
                Đặt khung hình khớp với tem QR trên kiện rơm hoặc bao bì
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center p-4 bg-emerald-950/80 rounded-2xl border border-emerald-500/50 animate-in fade-in zoom-in duration-300">
              <CheckCircle size={44} className="text-emerald-400 mb-2" />
              <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Đã quét thành công!</p>
              <p className="text-sm font-bold text-white mt-1">AGL-2026-KG0912</p>
            </div>
          )}
        </div>

        {/* Status Hint */}
        <div className="relative mt-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/60 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Hệ thống AI IoT đang nhận diện định danh số...</span>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Controls & Result */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 rounded-t-3xl shadow-xl z-10 space-y-3">
        {scanned ? (
          <div className="space-y-3 animate-in slide-in-from-bottom duration-300">
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Package size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Lô: AGL-2026-KG0912</h4>
                  <p className="text-xs text-slate-400">HTX Nông Nghiệp Tân Bình • 30 Tấn rơm</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg border border-emerald-500/30">
                Đã kiểm định
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setScanned(false)}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} /> Quét lại
              </button>
              <button
                onClick={() => onNavigate('batch_qr')}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
              >
                Xem chi tiết tem <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-center text-xs text-slate-400">
              Mẹo: Giữ điện thoại song song cách tem QR khoảng 15-25cm
            </p>
            <button
              onClick={handleSimulateScan}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2"
            >
              <Scan size={18} />
              Quét thử mã Lô AGL-2026-KG0912
            </button>
            <button
              onClick={onBack || (() => onNavigate('buyer_order_detail'))}
              className="w-full py-2.5 text-slate-400 hover:text-white text-xs font-semibold text-center transition"
            >
              Quay lại chi tiết đơn hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
