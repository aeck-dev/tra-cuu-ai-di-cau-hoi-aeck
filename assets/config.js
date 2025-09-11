// Cấu hình ứng dụng (cập nhật theo Google Sheet của bạn)
window.APP_CONFIG = {
  // Dán ID của Google Sheet vào đây (phần giữa /d/ và /edit)
  SPREADSHEET_ID: "1iGWtsX3AVEm0iDEY1NgvbBmUv0QfWgIns_TKBph2o68",

  // GID của từng tab (sheet). Hãy thay bằng gid thực tế của bạn.
  // Ví dụ: tab tai_khoan thường là 0, tab sach_1000 là một số khác.
  GIDS: {
    tai_khoan: "0",
    sach_1000: "228356365"
  },

  // Tùy chọn: Nếu bạn triển khai Google Apps Script làm API,
  // dán URL web app vào đây. Ví dụ: "https://script.google.com/macros/s/XXX/exec"
  API_BASE: "https://script.google.com/macros/s/AKfycbwn5KrE0ZOTaghJUdb09iQmXJ9505iEf3txYw0hjF1pqktxjkd-O4tBZH0RKwniz6nq/exec",

  // Thời gian đăng nhập còn hiệu lực (1 ngày)
  SESSION_TTL_MS: 24 * 60 * 60 * 1000,

  // TTL bộ nhớ đệm dữ liệu (tra cứu) – 6 giờ
  CACHE_TTL_MS: 6 * 60 * 60 * 1000
  ,
  // Nếu dùng Apps Script API và Sheet không public,
  // đặt false để KHÔNG fallback CSV (tránh lỗi không tải được)
  USE_CSV_FALLBACK: false
};
