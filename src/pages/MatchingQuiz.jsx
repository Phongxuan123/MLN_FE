import React from "react";
import "./MatchingQuiz.css";

const MatchingQuiz = () => {
  return (
    <div className="matching-page">
      <div className="matching-container">
        {/* TOP */}
        <div className="matching-header">
          <div>
            <p className="matching-subtitle">
              CHUYÊN ĐỀ 03
            </p>

            <h1>Thử thách Kết nối Triết học</h1>

            <p className="matching-desc">
              Nối các khái niệm ở cột trái với định nghĩa chính xác ở cột phải.
            </p>
          </div>

          <div className="matching-stats">
            <div>
              <span>THỜI GIAN</span>
              <h3>00:00</h3>
            </div>

            <div>
              <span>TIẾN ĐỘ</span>
              <h3>0 / 5</h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="matching-grid">
          {/* LEFT */}
          <div className="matching-column">
            <h4>Khái niệm</h4>

            {[
              "Chủ nghĩa Duy vật Biện chứng",
              "Hình thái Kinh tế - Xã hội",
              "Quy luật Lượng - Chất",
              "Giá trị Thặng dư",
              "Tồn tại Xã hội",
            ].map((item, index) => (
              <div
                className="matching-card"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="matching-column">
            <h4>Định nghĩa</h4>

            {[
              "Sự thay đổi về lượng dẫn đến mức độ nhất định sẽ dẫn đến thay đổi về chất.",
              "Toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
              "Thế giới quan khoa học của giai cấp công nhân.",
              "Phần giá trị do lao động của công nhân tạo ra ngoài giá trị sức lao động.",
              "Xã hội ở một giai đoạn lịch sử nhất định.",
            ].map((item, index) => (
              <div
                className="matching-card"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="matching-footer">
          <p>
            Chọn khái niệm trước, sau đó chọn định nghĩa tương ứng.
          </p>

          <div className="matching-buttons">
            <button className="outline-btn">
              Xem Đáp Án
            </button>

            <button className="primary-btn">
              Gửi Bài Làm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingQuiz;