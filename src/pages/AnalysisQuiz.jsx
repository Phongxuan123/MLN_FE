import React from "react";
import "./AnalysisQuiz.css";

const AnalysisQuiz = () => {
  return (
    <div className="analysis-page">
      <div className="analysis-container">

        <p className="analysis-label">
          CHUYÊN ĐỀ 05
        </p>

        <h1>Phân tích Văn bản</h1>

        <div className="analysis-quote">
          <h2>
            "Không có lý luận cách mạng thì cũng không có phong trào cách mạng."
          </h2>

          <p>— V.I. Lenin</p>
        </div>

        <div className="analysis-text">
          <h3>Đoạn văn phân tích</h3>

          <p>
            Chủ nghĩa duy vật biện chứng khẳng định rằng mọi sự vật
            và hiện tượng trong thế giới đều vận động và phát triển
            thông qua mâu thuẫn nội tại của chính nó.
          </p>
        </div>

        <div className="analysis-question">
          <h3>Câu hỏi</h3>

          <p>
            Hãy phân tích vai trò của mâu thuẫn trong sự phát triển
            của sự vật theo quan điểm duy vật biện chứng.
          </p>
        </div>

        <textarea
          className="analysis-answer"
          placeholder="Nhập câu trả lời của bạn..."
        ></textarea>

        <div className="analysis-actions">
          <button className="outline-btn">
            Lưu bản nháp
          </button>

          <button className="primary-btn">
            Nộp bài phân tích
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnalysisQuiz;