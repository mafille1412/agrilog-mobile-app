// AgriLog Master Dataset & Business Domain Logic
// Dựa trên thuyết minh VSIC 2026 (Đội thi Acrylic - ĐH Ngân Hàng TP.HCM) & Figma Prototype UI

export const BYPRODUCTS = [
  {
    id: 'straw',
    name: 'Rơm rạ cuộn',
    nameEn: 'Rice Straw Bales',
    icon: '🌾',
    density: '195 kg/m³ (đã cuộn nén)',
    rawDensity: '40 kg/m³ (chưa cuộn)',
    targetMoisture: 15,
    unit: 'tấn',
    basePrice: 1650000, // VNĐ/tấn
    co2Factor: 0.119, // tấn CO2e tránh phát thải/tấn rơm không đốt ngoài đồng (IPCC 2006)
    applications: ['Năng lượng sinh khối', 'Đệm lót vi sinh', 'Phân bón hữu cơ'],
    activeSeason: 'Đông Xuân (Thu hoạch rộ)'
  },
  {
    id: 'husk',
    name: 'Trấu xay nguyên vỏ',
    nameEn: 'Rice Husk',
    icon: '🌱',
    density: '120 kg/m³',
    rawDensity: '120 kg/m³',
    targetMoisture: 12,
    unit: 'tấn',
    basePrice: 1150000,
    co2Factor: 0.105,
    applications: ['Viên nén đốt lò hơi', 'Tro trấu silica', 'Vật liệu cách nhiệt'],
    activeSeason: 'Quanh năm theo vụ lúa'
  },
  {
    id: 'bagasse',
    name: 'Bã mía ép khô',
    nameEn: 'Sugarcane Bagasse',
    icon: '🎋',
    density: '160 kg/m³',
    rawDensity: '110 kg/m³',
    targetMoisture: 18,
    unit: 'tấn',
    basePrice: 750000,
    co2Factor: 0.098,
    applications: ['Đồng phát điện bã mía', 'Bao bì phân hủy sinh học'],
    activeSeason: 'Vụ ép mía (Tháng 11 - Tháng 4)'
  },
  {
    id: 'corncob',
    name: 'Lõi ngô sấy',
    nameEn: 'Corn Cobs',
    icon: '🌽',
    density: '240 kg/m³',
    rawDensity: '180 kg/m³',
    targetMoisture: 14,
    unit: 'tấn',
    basePrice: 1400000,
    co2Factor: 0.112,
    applications: ['Cồn sinh học Furfural', 'Nhiên liệu rắn lò sấy'],
    activeSeason: 'Vụ Hè Thu'
  }
];

export const ENTERPRISES = [
  {
    id: 'ent_erex',
    name: 'Nhà máy Điện Sinh Khối Erex An Giang',
    code: 'EREX-AG',
    industry: 'Năng lượng sinh khối (Biomass Power)',
    location: 'KCN Bình Hòa, Châu Thành, An Giang',
    contactPerson: 'Kỹ sư trưởng Trần Đình Nam',
    phone: '0918.456.789',
    monthlyDemand: '3,500 tấn sinh khối khô/tháng',
    rating: 4.9,
    verified: true,
    esgGoal: 'Giảm 45,000 tấn CO2e năm 2026'
  },
  {
    id: 'ent_thmilk',
    name: 'Tập đoàn TH - Chi nhánh Thức ăn Chăn nuôi Tây Nam Bộ',
    code: 'TH-SOUTH',
    industry: 'Chăn nuôi công nghệ cao & Đệm lót sinh học',
    location: 'Huyện Tân Hiệp, Kiên Giang',
    contactPerson: 'GĐ Thu mua Nguyễn Văn Toàn',
    phone: '0903.112.233',
    monthlyDemand: '2,000 tấn rơm cuộn/tháng',
    rating: 5.0,
    verified: true,
    esgGoal: 'Tuần hoàn phụ phẩm 100% đạt chuẩn GlobalGAP'
  },
  {
    id: 'ent_mekong_bio',
    name: 'Công ty CP Phân bón Hữu cơ Vi sinh Mekong Organic',
    code: 'MEKONG-BIO',
    industry: 'Phân bón vi sinh & Nông nghiệp hữu cơ',
    location: 'KCN Sa Đéc, Đồng Tháp',
    contactPerson: 'Bà Lê Mai Phương',
    phone: '0982.776.543',
    monthlyDemand: '1,500 tấn trấu & rơm/tháng',
    rating: 4.8,
    verified: true,
    esgGoal: 'Thay thế 30% phân hóa học bằng phân hữu cơ tuần hoàn'
  }
];

export const COOPERATIVES = [
  {
    id: 'coop_tanbinh',
    name: 'HTX Nông nghiệp Tân Bình',
    region: 'Thoại Sơn, An Giang',
    representative: 'Nguyễn Văn Được (Chủ tịch HTX)',
    phone: '0913.789.012',
    capacity: '1,200 tấn/tháng',
    balersAvailable: 3, // máy cuộn rơm lưu động
    moistureAverage: '13.8%',
    distanceToPlant: '14.2 km',
    rating: 4.9,
    iotCertified: true,
    avatar: '🚜'
  },
  {
    id: 'coop_uttrieu',
    name: 'Cơ sở Thu gom & Ép cuộn Út Triệu',
    region: 'Hòn Đất, Kiên Giang',
    representative: 'Võ Văn Triệu',
    phone: '0979.654.321',
    capacity: '950 tấn/tháng',
    balersAvailable: 2,
    moistureAverage: '14.5%',
    distanceToPlant: '38.5 km',
    rating: 4.8,
    iotCertified: true,
    avatar: '🌾'
  },
  {
    id: 'coop_senhong',
    name: 'HTX Nông nghiệp Sen Hồng',
    region: 'Tam Nông, Đồng Tháp',
    representative: 'Đặng Thanh Tùng',
    phone: '0909.887.766',
    capacity: '1,500 tấn/tháng',
    balersAvailable: 4,
    moistureAverage: '14.1%',
    distanceToPlant: '52.0 km',
    rating: 4.7,
    iotCertified: true,
    avatar: '🌱'
  }
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-0089',
    enterpriseId: 'ent_erex',
    enterpriseName: 'Nhà máy Điện Sinh Khối Erex An Giang',
    byproduct: 'Rơm rạ cuộn',
    byproductId: 'straw',
    volume: 50, // tấn
    maxMoisture: 15, // %
    destination: 'Nhà máy Erex Thoại Sơn, An Giang',
    deliveryDate: '2026-10-18',
    targetPrice: 1650000,
    status: 'in_inspection', // created -> matched -> committed -> in_inspection -> batch_issued -> in_transit -> delivered -> settled
    matchedCoop: 'HTX Nông nghiệp Tân Bình',
    coopId: 'coop_tanbinh',
    batchId: 'AGL-2026-KG0912-ST01',
    progress: 50,
    estimatedTotal: 82500000
  },
  {
    id: 'ORD-2026-0088',
    enterpriseId: 'ent_thmilk',
    enterpriseName: 'Tập đoàn TH - CN Tây Nam Bộ',
    byproduct: 'Rơm rạ cuộn',
    byproductId: 'straw',
    volume: 120,
    maxMoisture: 14,
    destination: 'Trang trại bò sữa TH Tân Hiệp, Kiên Giang',
    deliveryDate: '2026-10-17',
    targetPrice: 1700000,
    status: 'in_transit',
    matchedCoop: 'Cơ sở Út Triệu & HTX Tân Bình',
    coopId: 'coop_uttrieu',
    batchId: 'AGL-2026-KG0910-ST02',
    progress: 75,
    estimatedTotal: 204000000
  },
  {
    id: 'ORD-2026-0087',
    enterpriseId: 'ent_mekong_bio',
    enterpriseName: 'Mekong Organic Sa Đéc',
    byproduct: 'Trấu xay nguyên vỏ',
    byproductId: 'husk',
    volume: 80,
    maxMoisture: 13,
    destination: 'KCN Sa Đéc, Đồng Tháp',
    deliveryDate: '2026-10-15',
    targetPrice: 1180000,
    status: 'settled',
    matchedCoop: 'HTX Nông nghiệp Sen Hồng',
    coopId: 'coop_senhong',
    batchId: 'AGL-2026-DT0908-HK01',
    progress: 100,
    estimatedTotal: 94400000
  }
];

export const INITIAL_BATCH_DETAILS = {
  batchId: 'AGL-2026-KG0912-ST01',
  orderId: 'ORD-2026-0089',
  byproductName: 'Rơm lúa cuộn vụ Đông Xuân 2026',
  riceVariety: 'Lúa thơm OM 5451 (Chất lượng cao)',
  cooperative: 'HTX Nông nghiệp Tân Bình',
  representative: 'Nguyễn Văn Được (0913.789.012)',
  harvestLocation: 'Cánh đồng mẫu lớn xã Vọng Thê, Thoại Sơn, An Giang',
  gpsCoords: '10.2294° N, 105.1432° E',
  harvestDate: '2026-10-14 08:30:00',
  inspector: 'Đại lý HTX Tân Bình (Sử dụng thiết bị IoT do AgriLog cấp)',
  deviceSerial: 'AGRILOG-IOT-MOIST-2026-08',
  deviceModel: 'AgriLog IoT Moisture Sensor Pro (Cảm biến đo độ ẩm chuyên dụng)',
  connectivity: 'Bluetooth 5.0 BLE & 4G/NB-IoT',
  batteryLevel: '94%',
  calibrationStatus: 'Đã hiệu chuẩn (Chuẩn ISO/IEC 17025)',
  
  // 3-point IoT moisture probe measurements
  measurements: [
    { point: 'Mũi đo 1 (Cắm sâu 0.8m - Tâm kiện rơm)', moisture: 14.6, dryMatter: 85.4, temp: '31.8°C', timeSec: 5 },
    { point: 'Mũi đo 2 (Cắm sâu 0.5m - Thân kiện rơm)', moisture: 14.2, dryMatter: 85.8, temp: '32.1°C', timeSec: 5 },
    { point: 'Mũi đo 3 (Cắm sâu 0.2m - Lớp vỏ ngoài)', moisture: 13.8, dryMatter: 86.2, temp: '32.6°C', timeSec: 5 }
  ],
  
  // Aggregated results
  averageMoisture: 14.2, // %
  targetThreshold: 15.0, // <=15%
  dryMatterIndex: 85.8, // %
  celluloseContent: 38.6, // %
  ligninContent: 14.1, // %
  grossCalorificValue: 3650, // kcal/kg
  impurityRate: 1.8, // % (đất cát, tạp chất)
  ambientTempBompensated: true,
  iotCheck: 'ĐẠT CHUẨN ĐỘ ẨM HỢP ĐỒNG (14.2% ≤ 15.0%)',
  
  // Weights
  weighbridgeGross: 51800, // kg tươi
  calculatedDryBiomass: 44444.4, // kg sinh khối khô
  dryBiomassRatio: 0.858,
  
  // Blockchain metadata
  blockchain: {
    network: 'Hyperledger Fabric v2.5 + Polygon POS Anchoring',
    channelId: 'agrilog-supply-channel',
    blockHeight: 489214,
    txHash: '0x9d4e76a54b3c21dfa8349bb7e5c467a1c890f5a7d32c914e6b18fa9074c5321a',
    merkleRoot: '0x3a4b91f0...77e9a2',
    timestamp: '2026-10-15T09:18:45+07:00'
  },
  
  // ESG & MRV Carbon
  carbonOffsetTonCO2e: 5.95, // 50 tấn * 0.119 tấn CO2e
  ipccStandard: 'IPCC 2006 Guidelines for National GHG Inventories - Vol 4 Agriculture',
  esgAuditReady: true
};

export const LOGISTICS_PLAN = {
  routeId: 'ROUTE-AG-2026-042',
  driverName: 'Lê Văn Hoàng (Tài xế đội xe ĐBSCL)',
  vehiclePlate: '68C-148.92 (Xe đầu kéo rơ-moóc thùng cao 40ft)',
  truckCapacityTons: 32,
  balerModel: 'Máy cuộn bánh xích tự hành Yanmar YH-850',
  currentBalingDensity: '195 kg/m³ (Đã nén đạt chuẩn)',
  
  waypoints: [
    {
      id: 1,
      title: 'Điểm lấy hàng 1: Cánh đồng Thoại Sơn (HTX Tân Bình)',
      time: '07:30',
      action: 'Bốc 26 tấn rơm cuộn đã quét mã QR',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Điểm lấy hàng 2: Kho bãi Hòn Đất (Cơ sở Út Triệu)',
      time: '09:45',
      action: 'Bốc ghép thêm 24 tấn rơm cuộn chuẩn IoT',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Trạm cân điện tử KCN Bình Hòa, Châu Thành',
      time: '11:15',
      action: 'Cân tổng tải trọng & xuất phiếu điện tử',
      status: 'active'
    },
    {
      id: 4,
      title: 'Cổng tiếp nhận: Nhà máy Điện Sinh khối Erex An Giang',
      time: '12:00',
      action: 'Hạ bãi, kiểm tra niêm phong QR & đối soát mốc hợp đồng',
      status: 'pending'
    }
  ],
  
  aiOptimizationStats: {
    traditionalDistanceKm: 142,
    optimizedDistanceKm: 88,
    emptyTruckReduction: '38%',
    fuelSavedLiters: 24.5,
    co2SavedLogisticsKg: 64.8,
    freightCostSavedVND: 1850000
  }
};

export const FINANCIAL_METRICS_VSIC = {
  team: 'Acrylic (Trường Đại học Ngân hàng TP.HCM)',
  competition: 'VSIC 2026 - Thử thách Sáng tạo Khởi nghiệp Xã hội',
  tam: '45,040 tỷ VNĐ (2026) -> 54,746 tỷ VNĐ (2030)',
  sam: '15,764 tỷ VNĐ (35% TAM tại ĐBSCL)',
  som2026: '75.6 tỷ VNĐ (23,760 tấn phụ phẩm)',
  som2030: '4,308.5 tỷ VNĐ (1,077,120 tấn phụ phẩm)',
  seedCapital: '3,448 triệu VNĐ',
  breakEvenYear: 'Năm 2 (2027) với 12,480 lô hàng',
  revenueStreams: [
    { name: '1. Phí hoa hồng sàn B2B', rate: '3% GMV (Bên mua trả)', year: 'Năm 1-5' },
    { name: '2. Phí dịch vụ thiết bị IoT & kiểm định QR', rate: '300,000 đ / lô', year: 'Năm 1-5' },
    { name: '3. Phí gói SaaS B2B nâng cao', rate: 'Gói Pro cho HTX/Hub lớn', year: 'Từ Năm 3' },
    { name: '4. Phí bản quyền dữ liệu MRV Carbon', rate: '15,000 đ / tấn CO2e xác thực', year: 'Từ Năm 3' },
    { name: '5. Chiết khấu logistics ngược & máy cuộn', rate: 'Phí điều phối mạng lưới', year: 'Từ Năm 2' }
  ],
  forecastPnl: [
    { year: 'Năm 1 (2026)', lots: '2,160', gmv: '75.6 tỷ', revenue: '3.0 tỷ', netProfit: '-1.79 tỷ', ebitdaMargin: '-53.5%' },
    { year: 'Năm 2 (2027)', lots: '12,480', gmv: '474.2 tỷ', revenue: '18.7 tỷ', netProfit: '+3.28 tỷ', ebitdaMargin: '18.5%' },
    { year: 'Năm 3 (2028)', lots: '36,000', gmv: '1,440.0 tỷ', revenue: '57.9 tỷ', netProfit: '+21.57 tỷ', ebitdaMargin: '37.5%' },
    { year: 'Năm 4 (2029)', lots: '68,640', gmv: '2,882.9 tỷ', revenue: '115.8 tỷ', netProfit: '+44.33 tỷ', ebitdaMargin: '38.3%' },
    { year: 'Năm 5 (2030)', lots: '97,920', gmv: '4,308.5 tỷ', revenue: '172.6 tỷ', netProfit: '+59.52 tỷ', ebitdaMargin: '38.3%' }
  ]
};
