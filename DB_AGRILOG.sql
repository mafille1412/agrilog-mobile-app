-- =====================================================================
-- AgriLog – Database schema v2.1 cho MICROSOFT SQL SERVER (T-SQL, SQL Server 2019+)
-- (Bản chuyển đổi từ agrilog_schema.sql viết cho PostgreSQL.)
-- Chạy trong SSMS / Azure Data Studio, thực thi TOÀN BỘ file một lần.
-- Giai đoạn 1: CSDL thuần, KHÔNG dùng blockchain.
-- =====================================================================

-- 0. TẠO DATABASE RIÊNG (không bao giờ tạo bảng trong 'master')
IF DB_ID(N'AgriLog') IS NULL CREATE DATABASE AgriLog;
GO
USE AgriLog;
GO
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
GO

-- =====================================================================
-- 0. DANH MỤC DÙNG CHUNG (MASTER DATA)
-- =====================================================================

-- [P1] Tỉnh/thành – đánh dấu vùng thí điểm (Kiên Giang, Đồng Tháp, An Giang)
CREATE TABLE provinces (
    id          smallint PRIMARY KEY,
    name        nvarchar(255) NOT NULL,
    region      nvarchar(50) NOT NULL CHECK (region IN ('DBSCL','DBSH','DNB','DHMT','TN','OTHER')),
    is_pilot    bit NOT NULL DEFAULT 0
);

-- [P1] Loại phụ phẩm: rơm rạ, trấu, bã mía, lõi ngô, vỏ cà phê, vỏ điều...
CREATE TABLE biomass_types (
    id          smallint IDENTITY(1,1) PRIMARY KEY,
    code        nvarchar(255) NOT NULL UNIQUE,            -- RICE_STRAW, RICE_HUSK, BAGASSE, CORN_COB, COFFEE_HUSK, CASHEW_SHELL
    name        nvarchar(255) NOT NULL,
    is_active   bit NOT NULL DEFAULT 1
);

-- [P1] Hệ số phát thải có phiên bản (vd: 0,119 tCO2e/tấn) – để MRV kiểm toán được
CREATE TABLE emission_factors (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    biomass_type_id         smallint NOT NULL REFERENCES biomass_types(id),
    factor_tco2e_per_ton    decimal(8,4) NOT NULL CHECK (factor_tco2e_per_ton >= 0),
    source_ref              nvarchar(255),                 -- IPCC / IRRI / Romasanta et al. ...
    methodology_version     nvarchar(255) NOT NULL,
    valid_from              date NOT NULL,
    valid_to                date,
    CHECK (valid_to IS NULL OR valid_to > valid_from)
);

-- [P1] Chính sách phí cấu hình được (3% GMV bên mua, 400.000đ/lô NIR, SaaS, MRV 15.000đ/tCO2e...)
CREATE TABLE fee_policies (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    fee_type        nvarchar(50) NOT NULL CHECK (fee_type IN ('COMMISSION','NIR_INSPECTION','SAAS','MRV_LICENSE','LOGISTICS_COORD')),
    charged_to      nvarchar(50) NOT NULL CHECK (charged_to IN ('BUYER','AGENT','PARTNER')),
    calc_method     nvarchar(50) NOT NULL CHECK (calc_method IN ('PERCENT_OF_GMV','FIXED_PER_BATCH','PER_TON_CO2E','PERCENT_OF_SERVICE_FEE','FIXED_PER_MONTH')),
    rate            decimal(14,4) NOT NULL CHECK (rate >= 0),   -- 3 (%), 400000 (đ/lô), 15000 (đ/tCO2e)...
    valid_from      date NOT NULL,
    valid_to        date,
    is_active       bit NOT NULL DEFAULT 1,
    CHECK (valid_to IS NULL OR valid_to > valid_from)
);

-- [P1] BẢNG GIÁ CỐ ĐỊNH theo sinh khối khô (đ/tấn khô). Nhóm AgriLog phân tích thị trường → công bố; người dùng KHÔNG tự đặt giá.
--      Mỗi (loại phụ phẩm, vùng) chỉ có 1 mức giá ACTIVE tại một thời điểm.
CREATE TABLE price_list (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    biomass_type_id         smallint NOT NULL REFERENCES biomass_types(id),
    region                  nvarchar(50) NOT NULL CHECK (region IN ('DBSCL','DBSH','DNB','DHMT','TN','OTHER')),
    unit_price_per_dry_ton  decimal(18,0) NOT NULL CHECK (unit_price_per_dry_ton > 0),
    valid_from              date NOT NULL,
    valid_to                date,
    status                  nvarchar(50) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','ACTIVE','ARCHIVED')),
    market_basis_note       nvarchar(max),                          -- tóm tắt/nguồn phân tích thị trường làm căn cứ
    approved_by             bigint,                        -- FK thêm sau (users)
    approved_at             datetimeoffset,
    created_at              datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK (valid_to IS NULL OR valid_to > valid_from)
);

-- [P1] File đính kèm dùng chung (giấy phép, ảnh hiện trường, chứng cứ khiếu nại, hợp đồng...)
CREATE TABLE files (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    storage_uri     nvarchar(1000) NOT NULL,                -- S3/MinIO/Cloud Storage
    file_name       nvarchar(255) NOT NULL,
    mime_type       nvarchar(255),
    size_bytes      bigint,
    sha256          char(64),
    uploaded_by     bigint,                       -- FK thêm sau (users)
    uploaded_at     datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- =====================================================================
-- 1. DANH TÍNH – TỔ CHỨC – NGƯỜI DÙNG
-- =====================================================================

-- [P1] Người dùng
CREATE TABLE users (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    email           nvarchar(255),
    phone           nvarchar(255),
    password_hash   nvarchar(255) NOT NULL,
    full_name       nvarchar(255) NOT NULL,
    system_role     nvarchar(255) NOT NULL DEFAULT 'ORG_USER'
                    CHECK (system_role IN ('ORG_USER','PLATFORM_ADMIN','PLATFORM_OPS','PLATFORM_TECHNICIAN','PLATFORM_AUDITOR')),
    status          nvarchar(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','LOCKED','DISABLED')),
    last_login_at   datetimeoffset,
    phone_verified_at datetimeoffset,                -- phone lưu chuẩn E.164 (+84...)
    created_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK (email IS NOT NULL OR phone IS NOT NULL)
);
CREATE UNIQUE INDEX ux_users_email ON users(email) WHERE email IS NOT NULL;
CREATE UNIQUE INDEX ux_users_phone ON users(phone) WHERE phone IS NOT NULL;
ALTER TABLE files ADD CONSTRAINT fk_files_uploaded_by FOREIGN KEY (uploaded_by) REFERENCES users(id);
ALTER TABLE price_list ADD CONSTRAINT fk_price_approved_by FOREIGN KEY (approved_by) REFERENCES users(id);

-- [P1] Tổ chức: doanh nghiệp mua / đại lý-HTX / đơn vị vận tải / đối tác máy cuộn
CREATE TABLE organizations (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    org_type            nvarchar(50) NOT NULL CHECK (org_type IN ('BUYER','AGENT','CARRIER','BALER_OPERATOR')),
    buyer_segment       nvarchar(50) CHECK (buyer_segment IN ('BIOMASS_ENERGY','GREEN_MATERIAL','ORGANIC_FERTILIZER','ANIMAL_FEED','OTHER')),
    legal_name          nvarchar(255) NOT NULL,
    tax_code            nvarchar(255),                       -- hộ kinh doanh có thể dùng CCCD → nullable
    province_id         smallint REFERENCES provinces(id),
    locality            nvarchar(255),                              -- xã/phường/khu vực hoạt động (UI hiển thị dưới tên người dùng)
    address             nvarchar(255),                              -- trụ sở; địa chỉ NHÀ MÁY nằm ở buyer_facilities
    lat                 decimal(9,6),
    lng                 decimal(9,6),
    representative_name nvarchar(255),                              -- "Tên người đại diện"
    contact_phone       nvarchar(255),
    monthly_capacity_tons decimal(12,3) CHECK (monthly_capacity_tons >= 0),  -- đại lý: "Năng lực cung ứng dự kiến (tấn/tháng)"
    verification_status nvarchar(255) NOT NULL DEFAULT 'DRAFT'
                        CHECK (verification_status IN ('DRAFT','PENDING','VERIFIED','REJECTED','SUSPENDED')),
    onboarding_step     smallint NOT NULL DEFAULT 1 CHECK (onboarding_step BETWEEN 1 AND 3),  -- Vai trò / Thông tin / Xác minh
    is_trial            bit NOT NULL DEFAULT 0,    -- "Bỏ qua xác minh (Chế độ dùng thử)": dữ liệu sandbox, không tính GMV/phí
    submitted_at        datetimeoffset,
    verified_at         datetimeoffset,
    verified_by         bigint REFERENCES users(id),
    activated_at        datetimeoffset,
    created_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK (buyer_segment IS NULL OR org_type = 'BUYER'),
    CHECK (monthly_capacity_tons IS NULL OR org_type = 'AGENT')
);
CREATE UNIQUE INDEX ux_organizations_tax_code ON organizations(tax_code) WHERE tax_code IS NOT NULL;

-- [P1] Thành viên tổ chức + chứng chỉ vận hành máy NIR (phân quyền đo Năm 3-4)
CREATE TABLE organization_members (
    org_id              bigint NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id             bigint NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    member_role         nvarchar(50) NOT NULL CHECK (member_role IN ('OWNER','MANAGER','STAFF','NIR_OPERATOR','DRIVER')),
    nir_cert_no         nvarchar(255),
    nir_cert_expires_at date,
    joined_at           datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    PRIMARY KEY (org_id, user_id)
);

-- [P1] Hồ sơ xác minh đại lý/doanh nghiệp
CREATE TABLE org_documents (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    org_id          bigint NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    doc_type        nvarchar(50) NOT NULL CHECK (doc_type IN ('BUSINESS_LICENSE','ID_CARD','TAX_REGISTRATION','SITE_PHOTO','VEHICLE_DOC','OTHER')),
    file_id         bigint NOT NULL REFERENCES files(id),
    review_status   nvarchar(50) NOT NULL DEFAULT 'PENDING' CHECK (review_status IN ('PENDING','APPROVED','REJECTED')),
    reviewed_by     bigint REFERENCES users(id),
    reviewed_at     datetimeoffset,
    note            nvarchar(max)
);

-- [P1] Điểm thu gom của đại lý (GPS đã đăng ký → dùng khóa vị trí máy đo)
CREATE TABLE collection_points (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    agent_org_id    bigint NOT NULL REFERENCES organizations(id),
    name            nvarchar(255) NOT NULL,
    province_id     smallint NOT NULL REFERENCES provinces(id),
    locality        nvarchar(255),
    address         nvarchar(255),
    lat             decimal(9,6) NOT NULL,
    lng             decimal(9,6) NOT NULL,
    storage_capacity_tons decimal(12,3),
    is_default      bit NOT NULL DEFAULT 0,   -- điểm mặc định: màn "Tạo lô hàng mới" không bắt chọn điểm
    is_active       bit NOT NULL DEFAULT 1,
    updated_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);
CREATE UNIQUE INDEX ux_cp_default ON collection_points(agent_org_id) WHERE is_default = 1;

-- [P1] Nhà máy / điểm nhận hàng của doanh nghiệp (UI: "Giao đến: GreenGrid · Nhà máy Sangrur"; 1 DN có nhiều nhà máy)
CREATE TABLE buyer_facilities (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    buyer_org_id    bigint NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name            nvarchar(255) NOT NULL,                    -- "Nhà máy Sangrur"
    province_id     smallint REFERENCES provinces(id),
    locality        nvarchar(255),
    address         nvarchar(255),                             -- "Địa chỉ nhà máy" ở bước đăng ký
    lat             decimal(9,6),
    lng             decimal(9,6),
    is_default      bit NOT NULL DEFAULT 0,
    is_active       bit NOT NULL DEFAULT 1,
    updated_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);
CREATE UNIQUE INDEX ux_facility_default ON buyer_facilities(buyer_org_id) WHERE is_default = 1;

-- [P1] Hồ sơ xác minh (KYB / gọi điện xác minh) – ánh xạ 3 bước ở màn "Đã nhận hồ sơ":
--      SUBMITTED = Đã gửi hồ sơ | IN_REVIEW = Xác minh doanh nghiệp | APPROVED = Kích hoạt tài khoản
CREATE TABLE verification_cases (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    org_id          bigint NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    method          nvarchar(50) NOT NULL CHECK (method IN ('DOCUMENT','PHONE_CALL','SITE_VISIT')),
    status          nvarchar(50) NOT NULL DEFAULT 'SUBMITTED' CHECK (status IN ('SUBMITTED','IN_REVIEW','NEEDS_INFO','APPROVED','REJECTED')),
    assigned_to     bigint REFERENCES users(id),
    submitted_at    datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    decided_at      datetimeoffset,
    note            nvarchar(max)
);

-- =====================================================================
-- 2. NHU CẦU – NGUỒN CUNG – GHÉP NỐI – CAM KẾT
-- =====================================================================

-- [P1] Yêu cầu thu mua (màn "Nhu cầu thu mua"). Có "Lưu nháp" → các trường bắt buộc chỉ kiểm khi status <> 'DRAFT'
CREATE TABLE purchase_requests (
    id                          bigint IDENTITY(1,1) PRIMARY KEY,
    request_code                nvarchar(255) NOT NULL UNIQUE,            -- REQ-1048 = next_code('REQ','',4)
    buyer_org_id                bigint NOT NULL REFERENCES organizations(id),
    created_by                  bigint NOT NULL REFERENCES users(id),
    biomass_type_id             smallint REFERENCES biomass_types(id),
    required_qty_tons           decimal(12,3) CHECK (required_qty_tons > 0),
    qty_basis                   nvarchar(50) NOT NULL DEFAULT 'DRY' CHECK (qty_basis IN ('FRESH','DRY')),    -- mặc định TẤN KHÔ (khớp định giá theo sinh khối khô)
    max_moisture_pct            decimal(5,2) CHECK (max_moisture_pct BETWEEN 0 AND 100),
    max_impurity_pct            decimal(5,2) CHECK (max_impurity_pct BETWEEN 0 AND 100),
    min_heating_value_kcal_kg   decimal(8,1),
    price_list_id               bigint REFERENCES price_list(id),            -- mức giá cố định được áp dụng
    offered_price_per_dry_ton   decimal(18,0) CHECK (offered_price_per_dry_ton > 0),   -- SNAPSHOT giá từ price_list lúc đăng yêu cầu (hệ thống điền, DN không nhập)
    delivery_facility_id        bigint REFERENCES buyer_facilities(id),
    needed_from                 date NOT NULL DEFAULT (CONVERT(date, SYSDATETIMEOFFSET())),
    needed_by                   date,                            -- "Hạn giao"
    status                      nvarchar(255) NOT NULL DEFAULT 'DRAFT'
                                CHECK (status IN ('DRAFT','OPEN','MATCHING','PARTIALLY_COMMITTED','FULLY_COMMITTED',
                                                  'IN_FULFILLMENT','COMPLETED','CANCELLED','EXPIRED')),   -- chip "Tìm nguồn" = OPEN/MATCHING
    created_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK (needed_by IS NULL OR needed_by >= needed_from),
    CHECK (status = 'DRAFT' OR (biomass_type_id IS NOT NULL AND required_qty_tons IS NOT NULL
                                AND max_moisture_pct IS NOT NULL AND delivery_facility_id IS NOT NULL
                                AND needed_by IS NOT NULL AND offered_price_per_dry_ton IS NOT NULL))
);

-- [TÙY CHỌN – UI hiện chưa có màn đăng nguồn hàng] Đại lý đăng nguồn hàng sẵn có (số lượng, thời gian sẵn hàng, giá mong muốn)
CREATE TABLE supply_offers (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    agent_org_id            bigint NOT NULL REFERENCES organizations(id),
    collection_point_id     bigint NOT NULL REFERENCES collection_points(id),
    biomass_type_id         smallint NOT NULL REFERENCES biomass_types(id),
    est_qty_tons            decimal(12,3) NOT NULL CHECK (est_qty_tons > 0),
    available_from          date NOT NULL,
    available_to            date NOT NULL,
    ask_price_per_dry_ton   decimal(18,0),
    status                  nvarchar(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','COMMITTED','EXPIRED','CANCELLED')),
    created_at              datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK (available_to >= available_from)
);

-- [P1] Kết quả ghép nối do hệ thống đề xuất (điểm phù hợp, khoảng cách)
CREATE TABLE request_matches (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    request_id          bigint NOT NULL REFERENCES purchase_requests(id) ON DELETE CASCADE,
    agent_org_id        bigint NOT NULL REFERENCES organizations(id),
    supply_offer_id     bigint REFERENCES supply_offers(id),          -- tùy chọn (UI không có bước đăng nguồn)
    collection_point_id bigint REFERENCES collection_points(id),
    match_score         decimal(5,2),
    distance_km         decimal(8,2),                                 -- chip "Cách 18 km" / "2 đơn gần"
    status              nvarchar(255) NOT NULL DEFAULT 'SUGGESTED'
                        CHECK (status IN ('SUGGESTED','INVITED','ACCEPTED','DECLINED','EXPIRED')),
    invited_at          datetimeoffset,
    responded_at        datetimeoffset,
    created_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    UNIQUE (request_id, agent_org_id)
);

-- [P1] Cam kết cung cấp (đại lý xác nhận) – xương sống để đối soát cam kết vs thực nhận
CREATE TABLE supply_commitments (
    id                          bigint IDENTITY(1,1) PRIMARY KEY,
    commitment_code             nvarchar(255),                      -- COM-0001 = next_code('COM','',4)
    request_id                  bigint NOT NULL REFERENCES purchase_requests(id),
    match_id                    bigint REFERENCES request_matches(id),
    agent_org_id                bigint NOT NULL REFERENCES organizations(id),
    collection_point_id         bigint NOT NULL REFERENCES collection_points(id),
    committed_qty_tons          decimal(12,3) NOT NULL CHECK (committed_qty_tons > 0),   -- TẤN KHÔ, ≤ phần còn cần của yêu cầu
    committed_price_per_dry_ton decimal(18,0) NOT NULL CHECK (committed_price_per_dry_ton > 0),   -- SNAPSHOT giá cố định từ yêu cầu → khóa giá cho đơn này
    committed_ready_date        date NOT NULL,                    -- ngày sẵn sàng giao, ≤ hạn giao của yêu cầu
    note                        nvarchar(max),
    terms_accepted_at           datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),   -- đã tick đồng ý điều khoản chất lượng/giao hàng
    status                      nvarchar(255) NOT NULL DEFAULT 'PENDING'
                                CHECK (status IN ('PENDING','CONFIRMED','IN_FULFILLMENT','FULFILLED','PARTIAL','DEFAULTED','CANCELLED')),
    confirmed_at                datetimeoffset,
    cancelled_at                datetimeoffset,
    cancel_reason               nvarchar(max),
    created_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);
CREATE UNIQUE INDEX ux_supply_commitments_commitment_code ON supply_commitments(commitment_code) WHERE commitment_code IS NOT NULL;

-- =====================================================================
-- 3. KIỂM ĐỊNH NIR – LÔ HÀNG (BATCH) – TRUY XUẤT
-- =====================================================================

-- [P1] Mô hình hiệu chuẩn quang phổ theo loại/vùng/vụ → "data moat"
CREATE TABLE calibration_models (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    biomass_type_id     smallint NOT NULL REFERENCES biomass_types(id),
    region              nvarchar(50) NOT NULL CHECK (region IN ('DBSCL','DBSH','DNB','DHMT','TN','OTHER')),
    season              nvarchar(50) NOT NULL CHECK (season IN ('DONG_XUAN','HE_THU','THU_DONG','ALL')),
    crop_variety        nvarchar(255),
    version             nvarchar(255) NOT NULL,
    n_samples           integer NOT NULL DEFAULT 0,
    rmse_moisture       decimal(8,4),
    r2_moisture         decimal(6,4),
    model_uri           nvarchar(1000),
    status              nvarchar(50) NOT NULL DEFAULT 'TRAINING' CHECK (status IN ('TRAINING','ACTIVE','DEPRECATED')),
    trained_at          datetimeoffset,
    UNIQUE (biomass_type_id, region, season, version)
);

-- [P1] Thiết bị NIR (Spear Probe di động → cảm biến in-line)
CREATE TABLE nir_devices (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    serial_no               nvarchar(255) NOT NULL UNIQUE,
    device_type             nvarchar(50) NOT NULL CHECK (device_type IN ('SPEAR_PROBE','INLINE_SENSOR')),
    owner_org_id            bigint REFERENCES organizations(id),   -- NULL = thiết bị do AgriLog sở hữu
    model_name              nvarchar(255),
    registered_point_id     bigint REFERENCES collection_points(id),   -- khóa GPS theo điểm đã đăng ký
    gps_lock_radius_m       integer NOT NULL DEFAULT 200,
    firmware_version        nvarchar(255),
    status                  nvarchar(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','MAINTENANCE','RETIRED')),
    purchased_at            date,
    purchase_cost_vnd       decimal(18,0)
);

-- [P1] LÔ HÀNG – thực thể trung tâm: Batch ID + QR
CREATE TABLE batches (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    batch_code          nvarchar(255),                     -- AGR-261010-008 = next_code('AGR','261010',3); NULL đến khi lô đồng bộ lên server
    qr_token            nvarchar(255) NOT NULL UNIQUE DEFAULT (REPLACE(CONVERT(nvarchar(36), NEWID()), '-', '')),  -- token trong URL QR, không đoán được
    client_uuid         uniqueidentifier,                     -- app tạo lô khi OFFLINE → id sinh ở thiết bị, chống tạo trùng khi sync
    client_created_at   datetimeoffset,
    synced_at           datetimeoffset,
    commitment_id       bigint REFERENCES supply_commitments(id),   -- NULL = lô đã đăng ký nhưng chưa gán vào đơn nào
    agent_org_id        bigint NOT NULL REFERENCES organizations(id),
    collection_point_id bigint NOT NULL REFERENCES collection_points(id),
    biomass_type_id     smallint NOT NULL REFERENCES biomass_types(id),
    season              nvarchar(50) CHECK (season IN ('DONG_XUAN','HE_THU','THU_DONG','OTHER')),
    harvest_date        date,
    packaging_type      nvarchar(50) NOT NULL DEFAULT 'BALE' CHECK (packaging_type IN ('BALE','BULK','BAG')),
    bale_count          integer,
    fresh_weight_kg     decimal(12,2) NOT NULL CHECK (fresh_weight_kg > 0),   -- cân điện tử
    bulk_density_kg_m3  decimal(8,2),
    origin_lat          decimal(9,6),
    origin_lng          decimal(9,6),
    status              nvarchar(255) NOT NULL DEFAULT 'CREATED'
                        CHECK (status IN ('CREATED','QC_PENDING','QC_PASSED','QC_FAILED','READY_TO_SHIP',
                                          'IN_TRANSIT','DELIVERED','RECONCILED','DISPUTED','CLOSED','CANCELLED')),
    created_by          bigint NOT NULL REFERENCES users(id),
    created_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()  -- phục vụ sync 'lấy bản ghi đổi sau lần đồng bộ cuối'
);
CREATE UNIQUE INDEX ux_batches_batch_code ON batches(batch_code) WHERE batch_code IS NOT NULL;
CREATE UNIQUE INDEX ux_batches_client_uuid ON batches(client_uuid) WHERE client_uuid IS NOT NULL;

-- [P1] Phép đo NIR (1 lô có thể có: đo ban đầu, hậu kiểm 5-10%, đo lúc nhận hàng)
CREATE TABLE nir_measurements (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id                bigint NOT NULL REFERENCES batches(id),
    measurement_type        nvarchar(50) NOT NULL DEFAULT 'INITIAL' CHECK (measurement_type IN ('INITIAL','POST_AUDIT','RECEIVING')),
    parent_measurement_id   bigint REFERENCES nir_measurements(id),
    device_id               bigint NOT NULL REFERENCES nir_devices(id),
    operator_user_id        bigint NOT NULL REFERENCES users(id),
    calibration_model_id    bigint REFERENCES calibration_models(id),
    measured_at             datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    device_lat              decimal(9,6),
    device_lng              decimal(9,6),
    gps_valid               bit,                       -- trong bán kính khóa GPS?
    moisture_pct            decimal(5,2) CHECK (moisture_pct BETWEEN 0 AND 100),
    impurity_pct            decimal(5,2) CHECK (impurity_pct BETWEEN 0 AND 100),
    dry_matter_pct          decimal(5,2) CHECK (dry_matter_pct BETWEEN 0 AND 100),
    cellulose_pct           decimal(5,2),
    hemicellulose_pct       decimal(5,2),
    lignin_pct              decimal(5,2),
    heating_value_kcal_kg   decimal(8,1),
    dry_weight_kg           decimal(12,2),                 -- = fresh_weight_kg × dry_matter_pct / 100 (chụp tại thời điểm đo)
    anomaly_score           decimal(6,4),
    anomaly_flag            bit NOT NULL DEFAULT 0,
    result                  nvarchar(50) NOT NULL DEFAULT 'NEEDS_REVIEW' CHECK (result IN ('PASS','FAIL','NEEDS_REVIEW')),
    is_official             bit NOT NULL DEFAULT 0, -- phép đo chính thức dùng để tính tiền
    note                    nvarchar(max),
    client_uuid             uniqueidentifier,                   -- đo offline rồi đồng bộ
    synced_at               datetimeoffset
);
CREATE UNIQUE INDEX ux_nir_measurements_client_uuid ON nir_measurements(client_uuid) WHERE client_uuid IS NOT NULL;
-- Mỗi lô chỉ có đúng 1 phép đo chính thức
CREATE UNIQUE INDEX ux_one_official_measurement ON nir_measurements(batch_id) WHERE is_official = 1;

-- [P1] 3 điểm cắm đầu dò (đáy – giữa – mặt trên) / hoặc nhiều mẫu in-line
CREATE TABLE nir_measurement_points (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    measurement_id      bigint NOT NULL REFERENCES nir_measurements(id) ON DELETE CASCADE,
    point_no            smallint NOT NULL CHECK (point_no >= 1),
    position            nvarchar(50) NOT NULL CHECK (position IN ('BOTTOM','MIDDLE','TOP','INLINE')),
    moisture_pct        decimal(5,2) CHECK (moisture_pct BETWEEN 0 AND 100),
    raw_spectrum_uri    nvarchar(1000),                              -- phổ thô lưu object storage (không nhét vào DB)
    measured_at         datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    UNIQUE (measurement_id, point_no)
);

-- [P1] Mẫu đối chứng phòng thí nghiệm → huấn luyện/kiểm tra mô hình hiệu chuẩn
CREATE TABLE calibration_samples (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    measurement_id      bigint NOT NULL REFERENCES nir_measurements(id),
    lab_name            nvarchar(255) NOT NULL,
    lab_moisture_pct    decimal(5,2),
    lab_cellulose_pct   decimal(5,2),
    lab_hemicellulose_pct decimal(5,2),
    lab_lignin_pct      decimal(5,2),
    lab_heating_value   decimal(8,1),
    tested_at           date,
    used_for_model_id   bigint REFERENCES calibration_models(id)
);

-- [P1] Nhật ký sự kiện lô hàng (append-only) – nền tảng truy xuất + chứng cứ khi tranh chấp
CREATE TABLE batch_events (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id        bigint NOT NULL REFERENCES batches(id),
    event_type      nvarchar(255) NOT NULL,                         -- BATCH_CREATED, NIR_MEASURED, QC_PASSED, LOADED, DEPARTED, ARRIVED, RECEIVED, SETTLED...
    actor_user_id   bigint REFERENCES users(id),
    actor_org_id    bigint REFERENCES organizations(id),
    lat             decimal(9,6),
    lng             decimal(9,6),
    payload         nvarchar(max) NOT NULL DEFAULT '{}',
    occurred_at     datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),   -- giờ sự kiện xảy ra (giờ thiết bị)
    recorded_at     datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),   -- giờ server nhận
    client_uuid     uniqueidentifier,
    prev_hash       char(64),                              -- hash-chain trong DB (tùy chọn)
    record_hash     char(64)  -- sha256(prev_hash || nội dung)
);
CREATE UNIQUE INDEX ux_batch_events_client_uuid ON batch_events(client_uuid) WHERE client_uuid IS NOT NULL;


-- =====================================================================
-- 4. LOGISTICS: TỐI ƯU TUYẾN ĐA ĐIỂM – CHUYẾN XE – MÁY CUỘN
-- =====================================================================

-- [P1] Phương tiện & tài xế của đơn vị vận tải đối tác
CREATE TABLE vehicles (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    carrier_org_id  bigint NOT NULL REFERENCES organizations(id),
    plate_no        nvarchar(255) NOT NULL UNIQUE,
    vehicle_type    nvarchar(255),
    capacity_tons   decimal(8,2) NOT NULL CHECK (capacity_tons > 0),
    capacity_m3     decimal(8,2),
    status          nvarchar(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','MAINTENANCE','RETIRED'))
);

CREATE TABLE drivers (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    carrier_org_id  bigint NOT NULL REFERENCES organizations(id),
    user_id         bigint REFERENCES users(id),
    full_name       nvarchar(255) NOT NULL,
    phone           nvarchar(255),
    license_no      nvarchar(255),
    license_class   nvarchar(255)
);

-- [P1] Phương án vận chuyển do thuật toán đề xuất (kèm baseline để chứng minh tiết kiệm 15-20%)
CREATE TABLE transport_plans (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    plan_code               nvarchar(255) NOT NULL UNIQUE,
    request_id              bigint REFERENCES purchase_requests(id),
    buyer_org_id            bigint NOT NULL REFERENCES organizations(id),
    destination_facility_id bigint REFERENCES buyer_facilities(id),
    destination_address     nvarchar(255),
    destination_lat         decimal(9,6),
    destination_lng         decimal(9,6),
    planned_date            date NOT NULL,
    algorithm_version       nvarchar(255) NOT NULL,
    total_distance_km       decimal(10,2),
    est_cost_vnd            decimal(18,0),
    est_co2e_kg             decimal(12,2),
    baseline_distance_km    decimal(10,2),                 -- nếu mỗi điểm 1 chuyến riêng
    baseline_cost_vnd       decimal(18,0),
    baseline_co2e_kg        decimal(12,2),
    status                  nvarchar(255) NOT NULL DEFAULT 'PROPOSED'
                            CHECK (status IN ('PROPOSED','APPROVED','REJECTED','EXECUTING','DONE','CANCELLED')),
    generated_at            datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    approved_by             bigint REFERENCES users(id),
    approved_at             datetimeoffset
);

-- [P1] Chuyến xe
CREATE TABLE trips (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    plan_id             bigint NOT NULL REFERENCES transport_plans(id),
    carrier_org_id      bigint NOT NULL REFERENCES organizations(id),
    vehicle_id          bigint REFERENCES vehicles(id),
    driver_id           bigint REFERENCES drivers(id),
    status              nvarchar(255) NOT NULL DEFAULT 'PLANNED'
                        CHECK (status IN ('PLANNED','ASSIGNED','LOADING','IN_TRANSIT','ARRIVED','COMPLETED','CANCELLED')),
    planned_departure   datetimeoffset,
    actual_departure    datetimeoffset,
    actual_arrival      datetimeoffset,
    planned_distance_km decimal(10,2),
    actual_distance_km  decimal(10,2),
    fuel_liters         decimal(10,2),
    actual_cost_vnd     decimal(18,0),
    co2e_kg             decimal(12,2),
    updated_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- [P1] Các điểm dừng của chuyến (ghé nhiều đại lý rồi mới về nhà máy)
CREATE TABLE trip_stops (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    trip_id             bigint NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    stop_seq            smallint NOT NULL,
    stop_type           nvarchar(50) NOT NULL CHECK (stop_type IN ('PICKUP','DROPOFF')),
    collection_point_id bigint REFERENCES collection_points(id),
    facility_id         bigint REFERENCES buyer_facilities(id),   -- điểm DROPOFF = nhà máy
    lat                 decimal(9,6),
    lng                 decimal(9,6),
    planned_eta         datetimeoffset,
    actual_arrival      datetimeoffset,
    actual_departure    datetimeoffset,
    planned_load_tons   decimal(10,3),
    status              nvarchar(50) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','ARRIVED','DONE','SKIPPED')),
    UNIQUE (trip_id, stop_seq),
    CHECK (stop_type <> 'PICKUP'  OR collection_point_id IS NOT NULL),
    CHECK (stop_type <> 'DROPOFF' OR facility_id IS NOT NULL)
);

-- [P1] Lô nào đi trên chuyến nào
CREATE TABLE trip_batches (
    trip_id             bigint NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    batch_id            bigint NOT NULL REFERENCES batches(id),
    pickup_stop_id      bigint NOT NULL REFERENCES trip_stops(id),
    dropoff_stop_id     bigint NOT NULL REFERENCES trip_stops(id),
    loaded_at           datetimeoffset,
    PRIMARY KEY (trip_id, batch_id)
);

-- [P1] Vết GPS xe (bảng lớn → nên PARTITION BY RANGE (recorded_at) khi lên production)
CREATE TABLE trip_gps_points (
    trip_id         bigint NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
    recorded_at     datetimeoffset NOT NULL,
    lat             decimal(9,6) NOT NULL,
    lng             decimal(9,6) NOT NULL,
    speed_kmh       decimal(5,1),
    PRIMARY KEY (trip_id, recorded_at)
);

-- [P1→P2] Đặt lịch máy cuộn/ép kiện rơm lưu động (doanh thu "logistics ngược" từ Năm 2)
CREATE TABLE baler_bookings (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    agent_org_id            bigint NOT NULL REFERENCES organizations(id),
    baler_org_id            bigint NOT NULL REFERENCES organizations(id),
    collection_point_id     bigint REFERENCES collection_points(id),
    commitment_id           bigint REFERENCES supply_commitments(id),
    scheduled_start         datetimeoffset NOT NULL,
    est_qty_tons            decimal(10,3),
    density_before_kg_m3    decimal(8,2),                  -- ~40
    density_after_kg_m3     decimal(8,2),                  -- ~180-220
    service_fee_vnd         decimal(18,0),
    status                  nvarchar(255) NOT NULL DEFAULT 'REQUESTED'
                            CHECK (status IN ('REQUESTED','CONFIRMED','IN_PROGRESS','DONE','CANCELLED'))
);

-- =====================================================================
-- 5. NHẬN HÀNG – ĐỐI SOÁT – PHÍ – THANH TOÁN – KHIẾU NẠI
-- =====================================================================

-- [P1] Biên bản nhận hàng tại nhà máy
CREATE TABLE goods_receipts (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id                bigint NOT NULL REFERENCES batches(id) UNIQUE,
    trip_id                 bigint REFERENCES trips(id),
    buyer_org_id            bigint NOT NULL REFERENCES organizations(id),
    received_by             bigint NOT NULL REFERENCES users(id),
    received_at             datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    received_fresh_weight_kg decimal(12,2) NOT NULL CHECK (received_fresh_weight_kg >= 0),
    receiving_measurement_id bigint REFERENCES nir_measurements(id),
    status                  nvarchar(255) NOT NULL DEFAULT 'RECEIVED'
                            CHECK (status IN ('RECEIVED','ACCEPTED','PARTIALLY_ACCEPTED','REJECTED')),
    note                    nvarchar(max)
);

-- [P1] Đối soát: cam kết ↔ thực nhận ↔ tiền (1 lô = 1 bản đối soát)
CREATE TABLE settlements (
    id                          bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id                    bigint NOT NULL REFERENCES batches(id) UNIQUE,
    commitment_id               bigint NOT NULL REFERENCES supply_commitments(id),
    buyer_org_id                bigint NOT NULL REFERENCES organizations(id),
    agent_org_id                bigint NOT NULL REFERENCES organizations(id),
    declared_dry_weight_kg      decimal(12,2),
    received_dry_weight_kg      decimal(12,2),
    settled_dry_weight_kg       decimal(12,2),
    unit_price_per_dry_ton      decimal(18,0) NOT NULL,
    gross_amount_vnd            decimal(18,0) NOT NULL,        -- GMV của lô
    quality_adjustment_vnd      decimal(18,0) NOT NULL DEFAULT 0,
    net_payable_to_agent_vnd    decimal(18,0) NOT NULL,
    status                      nvarchar(255) NOT NULL DEFAULT 'DRAFT'
                                CHECK (status IN ('DRAFT','PENDING_CONFIRMATION','CONFIRMED','DISPUTED','PAID','CLOSED')),
    buyer_confirmed_at          datetimeoffset,
    agent_confirmed_at          datetimeoffset,
    created_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    updated_at                  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- [P1] Sổ phí nền tảng – nguồn sự thật cho doanh thu (hoa hồng 3%, phí NIR 400k, ...)
CREATE TABLE fee_ledger (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    fee_policy_id       bigint NOT NULL REFERENCES fee_policies(id),
    fee_type            nvarchar(50) NOT NULL CHECK (fee_type IN ('COMMISSION','NIR_INSPECTION','SAAS','MRV_LICENSE','LOGISTICS_COORD')),
    payer_org_id        bigint NOT NULL REFERENCES organizations(id),
    batch_id            bigint REFERENCES batches(id),
    settlement_id       bigint REFERENCES settlements(id),
    base_amount_vnd     decimal(18,0),
    rate_applied        decimal(14,4) NOT NULL,
    amount_vnd          decimal(18,0) NOT NULL CHECK (amount_vnd >= 0),
    vat_vnd             decimal(18,0) NOT NULL DEFAULT 0,
    status              nvarchar(50) NOT NULL DEFAULT 'ACCRUED' CHECK (status IN ('ACCRUED','INVOICED','PAID','WAIVED')),
    accrued_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- [P1] Thanh toán (qua cổng/ngân hàng trung gian – AgriLog không giữ tiền hàng)
CREATE TABLE payments (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    payment_type        nvarchar(50) NOT NULL CHECK (payment_type IN ('TRADE','PLATFORM_FEE')),
    settlement_id       bigint REFERENCES settlements(id),
    fee_ledger_id       bigint REFERENCES fee_ledger(id),
    payer_org_id        bigint NOT NULL REFERENCES organizations(id),
    payee_org_id        bigint REFERENCES organizations(id),          -- NULL nếu trả cho AgriLog
    amount_vnd          decimal(18,0) NOT NULL CHECK (amount_vnd > 0),
    method              nvarchar(50) NOT NULL CHECK (method IN ('BANK_TRANSFER','GATEWAY','ESCROW')),
    gateway_txn_ref     nvarchar(255),
    status              nvarchar(50) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','SUCCEEDED','FAILED','REFUNDED')),
    paid_at             datetimeoffset,
    created_at          datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    CHECK ((payment_type = 'TRADE' AND settlement_id IS NOT NULL)
        OR (payment_type = 'PLATFORM_FEE' AND fee_ledger_id IS NOT NULL))
);

-- [P1] Khiếu nại / tranh chấp chất lượng-số lượng
CREATE TABLE disputes (
    id                  bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id            bigint NOT NULL REFERENCES batches(id),
    settlement_id       bigint REFERENCES settlements(id),
    raised_by_org_id    bigint NOT NULL REFERENCES organizations(id),
    raised_by_user_id   bigint NOT NULL REFERENCES users(id),
    reason_code         nvarchar(50) NOT NULL CHECK (reason_code IN ('QUALITY_MISMATCH','QUANTITY_SHORTAGE','LATE_DELIVERY','PRICE','OTHER')),
    description         nvarchar(max),
    status              nvarchar(50) NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN','UNDER_REVIEW','RESOLVED','REJECTED')),
    resolution          nvarchar(max),
    resolved_by         bigint REFERENCES users(id),
    opened_at           datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    resolved_at         datetimeoffset
);

CREATE TABLE dispute_evidences (
    id          bigint IDENTITY(1,1) PRIMARY KEY,
    dispute_id  bigint NOT NULL REFERENCES disputes(id) ON DELETE CASCADE,
    file_id     bigint NOT NULL REFERENCES files(id),
    submitted_by bigint NOT NULL REFERENCES users(id),
    note        nvarchar(max),
    created_at  datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- =====================================================================
-- 6. UY TÍN & QUY TẮC HẬU KIỂM
-- =====================================================================

-- [P1] Quy tắc "20 lần đo khớp liên tiếp trong 12 tháng → chuyển sang hậu kiểm" (từ Năm 3)
CREATE TABLE partner_trust_stats (
    buyer_org_id            bigint NOT NULL REFERENCES organizations(id),
    agent_org_id            bigint NOT NULL REFERENCES organizations(id),
    matched_nir_count_12m   integer NOT NULL DEFAULT 0,
    post_audit_eligible     bit NOT NULL DEFAULT 0,
    last_evaluated_at       datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET(),
    PRIMARY KEY (buyer_org_id, agent_org_id)
);

-- [P1] Điểm hiệu suất tổng hợp của từng tổ chức
CREATE TABLE org_performance (
    org_id                  bigint PRIMARY KEY REFERENCES organizations(id),
    fulfillment_rate_pct    decimal(5,2),
    on_time_rate_pct        decimal(5,2),
    quality_pass_rate_pct   decimal(5,2),
    dispute_rate_pct        decimal(5,2),
    avg_rating              decimal(3,2),
    updated_at              datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- =====================================================================
-- 7. CARBON / MRV  [P2 – nhưng thu thập dữ liệu từ ngày đầu]
-- =====================================================================

-- Phát thải tránh được / CO2e theo từng lô (công thức + hệ số có phiên bản → kiểm toán được)
CREATE TABLE batch_emissions (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    batch_id                bigint NOT NULL REFERENCES batches(id) UNIQUE,
    emission_factor_id      bigint NOT NULL REFERENCES emission_factors(id),
    quantity_basis_tons     decimal(12,4) NOT NULL,        -- khối lượng làm cơ sở tính (ghi rõ trong methodology_version)
    co2e_avoided_tons       decimal(14,4) NOT NULL,        -- = quantity_basis_tons × factor
    transport_co2e_tons     decimal(14,4) NOT NULL DEFAULT 0,
    net_co2e_tons           decimal(14,4) NOT NULL,
    verification_status     nvarchar(50) NOT NULL DEFAULT 'UNVERIFIED' CHECK (verification_status IN ('UNVERIFIED','INTERNAL_VERIFIED','THIRD_PARTY_VERIFIED')),
    calculated_at           datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- Hợp đồng bán/cấp phép dữ liệu MRV cho bên phát triển/mua tín chỉ carbon
CREATE TABLE mrv_data_licenses (
    id                      bigint IDENTITY(1,1) PRIMARY KEY,
    licensee_org_id         bigint NOT NULL REFERENCES organizations(id),
    period_start            date NOT NULL,
    period_end              date NOT NULL,
    verified_co2e_tons      decimal(14,4) NOT NULL,
    unit_price_vnd          decimal(18,0) NOT NULL,        -- 15.000đ/tCO2e
    amount_vnd              decimal(18,0) NOT NULL,
    contract_file_id        bigint REFERENCES files(id),
    status                  nvarchar(50) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','ACTIVE','EXPIRED','CANCELLED')),
    CHECK (period_end >= period_start)
);

-- =====================================================================
-- 8. GÓI SAAS NÂNG CAO  [P2 – từ Năm 3]
-- =====================================================================
CREATE TABLE subscription_plans (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    code            nvarchar(255) NOT NULL UNIQUE,
    name            nvarchar(255) NOT NULL,
    target_org_type nvarchar(50) NOT NULL CHECK (target_org_type IN ('AGENT','BUYER','HUB')),
    monthly_fee_vnd decimal(18,0) NOT NULL CHECK (monthly_fee_vnd >= 0),
    features        nvarchar(max) NOT NULL DEFAULT '{}',
    is_active       bit NOT NULL DEFAULT 1
);

CREATE TABLE subscriptions (
    id          bigint IDENTITY(1,1) PRIMARY KEY,
    org_id      bigint NOT NULL REFERENCES organizations(id),
    plan_id     bigint NOT NULL REFERENCES subscription_plans(id),
    start_date  date NOT NULL,
    end_date    date,
    status      nvarchar(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','PAST_DUE','CANCELLED','EXPIRED'))
);

-- =====================================================================
-- 9. HỆ THỐNG: THÔNG BÁO & NHẬT KÝ KIỂM TOÁN
-- =====================================================================
CREATE TABLE notifications (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    user_id         bigint NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    channel         nvarchar(50) NOT NULL CHECK (channel IN ('IN_APP','SMS','ZALO','EMAIL','PUSH')),
    title           nvarchar(255) NOT NULL,
    body            nvarchar(max),
    ref_type        nvarchar(255),
    ref_id          bigint,
    is_read         bit NOT NULL DEFAULT 0,
    created_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

CREATE TABLE audit_logs (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    user_id         bigint REFERENCES users(id),
    action          nvarchar(255) NOT NULL,                  -- CREATE/UPDATE/DELETE/LOGIN/EXPORT...
    table_name      nvarchar(255) NOT NULL,
    record_id       bigint,
    old_data        nvarchar(max),
    new_data        nvarchar(max),
    ip_address      nvarchar(45),
    created_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- =====================================================================
-- 9b. ĐĂNG NHẬP / OTP / THIẾT BỊ / ĐỒNG BỘ OFFLINE / SINH MÃ
-- =====================================================================

-- [P1] OTP & quên mật khẩu (màn Đăng nhập: "Quên mật khẩu?")
CREATE TABLE auth_otps (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    user_id         bigint REFERENCES users(id) ON DELETE CASCADE,
    identifier      nvarchar(255) NOT NULL,                      -- sđt/email nhận mã
    purpose         nvarchar(50) NOT NULL CHECK (purpose IN ('RESET_PASSWORD','VERIFY_PHONE','VERIFY_EMAIL','LOGIN')),
    code_hash       nvarchar(255) NOT NULL,
    attempts        smallint NOT NULL DEFAULT 0,
    expires_at      datetimeoffset NOT NULL,
    consumed_at     datetimeoffset,
    created_at      datetimeoffset NOT NULL DEFAULT SYSDATETIMEOFFSET()
);

-- [P1] Thiết bị đăng nhập + mốc đồng bộ (banner "Đồng bộ lúc 09:38 · Sẵn sàng ngoại tuyến")
CREATE TABLE user_devices (
    id              bigint IDENTITY(1,1) PRIMARY KEY,
    user_id         bigint NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    device_uid      nvarchar(255) NOT NULL,
    platform        nvarchar(50) CHECK (platform IN ('ANDROID','IOS','WEB')),
    app_version     nvarchar(255),
    push_token      nvarchar(255),
    last_seen_at    datetimeoffset,
    last_sync_at    datetimeoffset,
    UNIQUE (user_id, device_uid)
);

-- [P1] Bộ đếm sinh mã đọc được: REQ-1048, AGR-261010-008 (an toàn khi nhiều người tạo cùng lúc)
CREATE TABLE code_counters (
    prefix      nvarchar(30) NOT NULL,
    period_key  nvarchar(30) NOT NULL DEFAULT '',
    last_seq    integer NOT NULL DEFAULT 0,
    PRIMARY KEY (prefix, period_key)
);

-- Tự cập nhật updated_at (để app mobile sync theo "đổi sau lần đồng bộ cuối")

-- =====================================================================
-- 10. INDEX CHO CÁC TRUY VẤN CHÍNH
-- =====================================================================
CREATE INDEX ix_org_type_prov        ON organizations(org_type, province_id) WHERE verification_status = 'VERIFIED';
CREATE INDEX ix_cp_agent             ON collection_points(agent_org_id);
CREATE INDEX ix_req_status           ON purchase_requests(status, biomass_type_id, needed_by);
CREATE INDEX ix_req_buyer            ON purchase_requests(buyer_org_id);
CREATE INDEX ix_offer_search         ON supply_offers(biomass_type_id, status, available_from, available_to);
CREATE INDEX ix_match_request        ON request_matches(request_id, status);
CREATE INDEX ix_commit_request       ON supply_commitments(request_id, status);
-- Mỗi đại lý chỉ có 1 cam kết đang hiệu lực cho 1 yêu cầu (muốn tăng/giảm → sửa cam kết cũ)
CREATE UNIQUE INDEX ux_commit_active ON supply_commitments(request_id, agent_org_id) WHERE status IN ('PENDING','CONFIRMED','IN_FULFILLMENT');
CREATE INDEX ix_commit_agent         ON supply_commitments(agent_org_id, status);
CREATE INDEX ix_batch_commit         ON batches(commitment_id);
CREATE INDEX ix_batch_sync           ON batches(agent_org_id, updated_at);
CREATE INDEX ix_match_agent          ON request_matches(agent_org_id, status);
CREATE INDEX ix_facility_buyer       ON buyer_facilities(buyer_org_id);
CREATE INDEX ix_verif_org            ON verification_cases(org_id, status);
CREATE INDEX ix_batch_agent_status   ON batches(agent_org_id, status);
CREATE INDEX ix_meas_batch           ON nir_measurements(batch_id, measured_at);
CREATE INDEX ix_meas_device          ON nir_measurements(device_id, measured_at);
CREATE INDEX ix_meas_anomaly         ON nir_measurements(anomaly_flag) WHERE anomaly_flag = 1;
CREATE INDEX ix_events_batch         ON batch_events(batch_id, occurred_at);
CREATE INDEX ix_trip_plan            ON trips(plan_id);
CREATE INDEX ix_tb_batch             ON trip_batches(batch_id);
CREATE INDEX ix_settle_status        ON settlements(status);
CREATE INDEX ix_fee_payer            ON fee_ledger(payer_org_id, status);
CREATE INDEX ix_fee_type_time        ON fee_ledger(fee_type, accrued_at);
CREATE INDEX ix_pay_settlement       ON payments(settlement_id);
CREATE INDEX ix_dispute_batch        ON disputes(batch_id, status);
CREATE INDEX ix_notif_user           ON notifications(user_id, is_read, created_at DESC);
CREATE INDEX ix_audit_table          ON audit_logs(table_name, record_id);

-- =====================================================================

-- =====================================================================
-- 9c. HÀM / THỦ TỤC / TRIGGER (T-SQL)
-- =====================================================================
GO
-- Sinh mã đọc được: REQ-1048, AGR-261010-008, COM-0001
--   DECLARE @c nvarchar(60); EXEC usp_next_code 'AGR', '261010', 3, @c OUTPUT; SELECT @c;
CREATE PROCEDURE usp_next_code @prefix nvarchar(30), @period nvarchar(30) = N'', @width int = 3, @code nvarchar(60) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @v int;
    BEGIN TRAN;
    UPDATE code_counters WITH (UPDLOCK, HOLDLOCK)
       SET @v = last_seq = last_seq + 1
     WHERE prefix = @prefix AND period_key = @period;
    IF @@ROWCOUNT = 0
    BEGIN
        INSERT INTO code_counters(prefix, period_key, last_seq) VALUES (@prefix, @period, 1);
        SET @v = 1;
    END
    COMMIT;
    DECLARE @n nvarchar(20) = CAST(@v AS nvarchar(20));
    IF LEN(@n) < @width SET @n = RIGHT(REPLICATE('0', @width) + @n, @width);
    SET @code = @prefix + N'-' + CASE WHEN @period = N'' THEN N'' ELSE @period + N'-' END + @n;
END;
GO
-- batch_events chỉ được thêm, không được sửa/xóa (append-only)
CREATE TRIGGER trg_batch_events_immutable ON batch_events INSTEAD OF UPDATE, DELETE
AS
BEGIN
    THROW 50001, N'batch_events là append-only, không được UPDATE/DELETE', 1;
END;
GO
-- Mỗi (loại phụ phẩm, vùng) chỉ có 1 mức giá ACTIVE tại một thời điểm (thay cho EXCLUDE của PostgreSQL)
CREATE TRIGGER trg_price_list_no_overlap ON price_list AFTER INSERT, UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (
        SELECT 1 FROM inserted i
        JOIN price_list p ON p.id <> i.id AND p.status = 'ACTIVE'
         AND p.biomass_type_id = i.biomass_type_id AND p.region = i.region
         AND i.valid_from < ISNULL(p.valid_to, '9999-12-31')
         AND p.valid_from < ISNULL(i.valid_to, '9999-12-31')
        WHERE i.status = 'ACTIVE')
    BEGIN
        ROLLBACK TRANSACTION;
        THROW 50002, N'Hai mức giá ACTIVE bị trùng thời gian (cùng loại phụ phẩm và vùng)', 1;
    END
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_organizations_updated ON organizations AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM organizations x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_collection_points_updated ON collection_points AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM collection_points x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_buyer_facilities_updated ON buyer_facilities AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM buyer_facilities x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_purchase_requests_updated ON purchase_requests AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM purchase_requests x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_request_matches_updated ON request_matches AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM request_matches x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_supply_commitments_updated ON supply_commitments AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM supply_commitments x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_batches_updated ON batches AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM batches x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_trips_updated ON trips AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM trips x JOIN inserted i ON i.id = x.id;
END;
GO
-- tự cập nhật updated_at (phục vụ đồng bộ app offline)
CREATE TRIGGER trg_settlements_updated ON settlements AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE x SET updated_at = SYSDATETIMEOFFSET() FROM settlements x JOIN inserted i ON i.id = x.id;
END;
GO

-- =====================================================================
-- 11. VIEW PHỤC VỤ MÀN HÌNH
-- =====================================================================
-- Trang truy xuất khi quét QR
CREATE VIEW v_batch_traceability AS
SELECT  b.qr_token, b.batch_code, bt.name AS biomass_type, ag.legal_name AS agent_name,
        cp.name AS collection_point, b.harvest_date, b.origin_lat, b.origin_lng, b.fresh_weight_kg,
        m.moisture_pct, m.impurity_pct, m.dry_matter_pct, m.heating_value_kcal_kg, m.dry_weight_kg,
        m.measured_at AS nir_measured_at, gr.received_at, e.net_co2e_tons, b.status
FROM batches b
JOIN biomass_types bt        ON bt.id = b.biomass_type_id
JOIN organizations ag        ON ag.id = b.agent_org_id
JOIN collection_points cp    ON cp.id = b.collection_point_id
LEFT JOIN nir_measurements m ON m.batch_id = b.id AND m.is_official = 1
LEFT JOIN goods_receipts gr  ON gr.batch_id = b.id
LEFT JOIN batch_emissions e  ON e.batch_id = b.id;
GO
-- Thẻ "Yêu cầu đang mở": Đã có 180 / 250 tấn khô · 72%
CREATE VIEW v_request_progress AS
SELECT  r.id AS request_id, r.request_code, r.buyer_org_id, r.status,
        bt.name AS biomass_type, f.name AS facility_name, r.needed_by,
        r.required_qty_tons, r.max_moisture_pct,
        ISNULL(x.committed_tons, 0) AS committed_tons,
        CASE WHEN r.required_qty_tons - ISNULL(x.committed_tons, 0) > 0
             THEN r.required_qty_tons - ISNULL(x.committed_tons, 0) ELSE 0 END AS remaining_tons,
        ROUND(100 * ISNULL(x.committed_tons, 0) / NULLIF(r.required_qty_tons, 0), 0) AS progress_pct
FROM purchase_requests r
LEFT JOIN biomass_types bt   ON bt.id = r.biomass_type_id
LEFT JOIN buyer_facilities f ON f.id = r.delivery_facility_id
OUTER APPLY (SELECT SUM(c.committed_qty_tons) AS committed_tons
             FROM supply_commitments c
             WHERE c.request_id = r.id AND c.status IN ('CONFIRMED','IN_FULFILLMENT','FULFILLED','PARTIAL')) x;
GO
-- Dashboard đại lý: "Đơn đã ghép"
CREATE VIEW v_agent_matched_orders AS
SELECT  m.agent_org_id, m.id AS match_id, m.status AS match_status,
        p.request_id, p.request_code, p.biomass_type, p.remaining_tons, p.max_moisture_pct,
        m.distance_km, p.facility_name, p.needed_by, buyer.legal_name AS buyer_name
FROM request_matches m
JOIN v_request_progress p ON p.request_id = m.request_id
JOIN purchase_requests r  ON r.id = m.request_id
JOIN organizations buyer  ON buyer.id = r.buyer_org_id
WHERE m.status IN ('SUGGESTED','INVITED','ACCEPTED')
  AND r.status IN ('OPEN','MATCHING','PARTIALLY_COMMITTED');
GO
-- Dashboard doanh nghiệp: tổng lượng đã mua, CO2e giảm thải, so với tháng trước
CREATE VIEW v_buyer_monthly_kpi AS
SELECT t.buyer_org_id, t.month_start, t.purchased_tons, t.co2e_tons,
       LAG(t.purchased_tons) OVER (PARTITION BY t.buyer_org_id ORDER BY t.month_start) AS prev_month_tons
FROM (
    SELECT gr.buyer_org_id,
           DATEFROMPARTS(YEAR(gr.received_at), MONTH(gr.received_at), 1) AS month_start,
           SUM(gr.received_fresh_weight_kg) / 1000.0 AS purchased_tons,
           ISNULL(SUM(e.net_co2e_tons), 0)           AS co2e_tons
    FROM goods_receipts gr
    LEFT JOIN batch_emissions e ON e.batch_id = gr.batch_id
    WHERE gr.status IN ('ACCEPTED','PARTIALLY_ACCEPTED')
    GROUP BY gr.buyer_org_id, DATEFROMPARTS(YEAR(gr.received_at), MONTH(gr.received_at), 1)
) t;
GO
-- Màn "Cam kết cung cấp": đã giao bao nhiêu tấn khô so với cam kết
CREATE VIEW v_commitment_progress AS
SELECT  c.id AS commitment_id, c.commitment_code, c.request_id, c.agent_org_id, c.status,
        c.committed_qty_tons, c.committed_price_per_dry_ton,
        c.committed_qty_tons * c.committed_price_per_dry_ton AS est_revenue_vnd,
        COUNT(DISTINCT b.id)                       AS batch_count,
        ISNULL(SUM(m.dry_weight_kg) / 1000.0, 0)   AS delivered_dry_tons,
        c.committed_ready_date
FROM supply_commitments c
LEFT JOIN batches b          ON b.commitment_id = c.id AND b.status <> 'CANCELLED'
LEFT JOIN nir_measurements m ON m.batch_id = b.id AND m.is_official = 1
GROUP BY c.id, c.commitment_code, c.request_id, c.agent_org_id, c.status,
         c.committed_qty_tons, c.committed_price_per_dry_ton, c.committed_ready_date;
GO
-- Màn "Chi tiết lô hàng"
CREATE VIEW v_batch_detail AS
SELECT  b.id AS batch_id, b.batch_code, b.qr_token, b.agent_org_id, b.status,
        bt.name AS biomass_type, b.fresh_weight_kg / 1000.0 AS weight_tons,
        r.request_code, r.max_moisture_pct AS moisture_limit_pct,
        m.dry_weight_kg / 1000.0 AS dry_weight_tons, m.result AS nir_result, m.moisture_pct, m.impurity_pct,
        m.measured_at AS nir_measured_at,
        v.plate_no AS vehicle_plate, ds.planned_eta AS dropoff_eta,
        f.name AS dropoff_facility, buyer.legal_name AS buyer_name
FROM batches b
JOIN biomass_types bt             ON bt.id = b.biomass_type_id
LEFT JOIN supply_commitments c    ON c.id = b.commitment_id
LEFT JOIN purchase_requests r     ON r.id = c.request_id
LEFT JOIN organizations buyer     ON buyer.id = r.buyer_org_id
LEFT JOIN nir_measurements m      ON m.batch_id = b.id AND m.is_official = 1
LEFT JOIN trip_batches tb         ON tb.batch_id = b.id
LEFT JOIN trips t                 ON t.id = tb.trip_id AND t.status <> 'CANCELLED'
LEFT JOIN vehicles v              ON v.id = t.vehicle_id
LEFT JOIN trip_stops ds           ON ds.id = tb.dropoff_stop_id
LEFT JOIN buyer_facilities f      ON f.id = ds.facility_id;
GO

-- =====================================================================
-- 12. DỮ LIỆU KHỞI TẠO (SEED) – chuỗi tiếng Việt phải có tiền tố N'...'
-- =====================================================================
INSERT INTO provinces (id, name, region, is_pilot) VALUES
    (89, N'An Giang',   'DBSCL', 1),
    (87, N'Đồng Tháp',  'DBSCL', 1),
    (91, N'Kiên Giang', 'DBSCL', 1);   -- mã tham khảo, điều chỉnh theo danh mục hành chính hiện hành

INSERT INTO biomass_types (code, name) VALUES
    ('RICE_STRAW', N'Rơm rạ'), ('RICE_HUSK', N'Trấu'), ('BAGASSE', N'Bã mía'),
    ('CORN_COB', N'Lõi ngô'), ('COFFEE_HUSK', N'Vỏ cà phê'), ('CASHEW_SHELL', N'Vỏ hạt điều');

INSERT INTO emission_factors (biomass_type_id, factor_tco2e_per_ton, source_ref, methodology_version, valid_from)
SELECT id, 0.1190, N'Hệ số phát thải ròng CH4+N2O (thuyết minh dự án, Mục 2.3.9)', 'v1.0', '2026-01-01'
FROM biomass_types WHERE code = 'RICE_STRAW';

INSERT INTO fee_policies (fee_type, charged_to, calc_method, rate, valid_from) VALUES
    ('COMMISSION',     'BUYER',   'PERCENT_OF_GMV',  3,      '2026-01-01'),
    ('NIR_INSPECTION', 'BUYER',   'FIXED_PER_BATCH', 400000, '2026-01-01'),
    ('MRV_LICENSE',    'PARTNER', 'PER_TON_CO2E',    15000,  '2028-01-01');
GO

PRINT N'AgriLog: tạo schema thành công.';
GO