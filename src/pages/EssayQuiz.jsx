import React from "react";
import "./EssayQuiz.css";

const EssayQuiz = () => {
  return (
    <div className="essay-page">
      <div className="essay-container">
        <p className="essay-label">
          CHUYÊN ĐỀ 04
        </p>

        <h1>Tư duy Độc lập</h1>

        <div className="quote-card">
          <h2>
            "Học thuyết của Marx là học thuyết vạn năng..."
          </h2>

          <p>
            — V.I. Lenin
          </p>
        </div>

        <div className="essay-box">
          <textarea
            placeholder="Nhập phân tích hoặc câu trả lời..."
          ></textarea>
        </div>

        <div className="essay-actions">
          <button className="outline-btn">
            Lưu bản nháp
          </button>

          <button className="primary-btn">
            Gửi câu trả lời
          </button>
        </div>
      </div>
    </div>
  );
};

export default EssayQuiz;