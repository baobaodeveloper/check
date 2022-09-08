import React from 'react';

export const Bt = () => {
  return (
    <div>
      <div>Huynh Anh Bao</div>
      <div>Trac nghiem</div>
      <div>
        1: C (component render xong mới lấy được event window)
      </div>
      <div>2: A (component không tìm thấy attribute)</div>
      <div>3: C ( vì forEarch khôn return)</div>
      <div>4: A (không render component return undefind)</div>
      <div>5: A (Dùng để tham chiếu đến element)</div>
      <div>6: A (Dùng để tham chiếu đến element)</div>
      <div>7: None (React Class không có hook)</div>
      <div>8: C (JSON.stringify về string so sánh 2 chuỗi)</div>
      <div>
        9: B (Tham số nhận vào là 1 component và trả về component đó
        theo logic của component cha)
      </div>
      <div>10: A ()</div>
      <div>11: C ()</div>
      <div>
        12: D (vấn đề export default và export có ảnh hưởng đến tổ
        chức code import)
      </div>
      <div>13: D (React.Fragment có thể thêm props)</div>
      <div>14: B (Browser chỉ đọc được file html,css,js)</div>
      <div>
        15: B (React sử dụng API gọi từ server nên khong6anh3 hưởng)
      </div>
    </div>
  );
};
