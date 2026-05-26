import React from "react";
import "./MCQQuiz.css";

const questions = [
  {
    question:
      "Ai là người sáng lập chủ nghĩa duy vật biện chứng?",
    options: [
      "Karl Marx",
      "Lenin",
      "Hegel",
      "Engels",
    ],
    answer: "Karl Marx",
  },

  {
    question:
      "Theo triết học Mác-Lênin, vật chất có trước hay ý thức có trước?",
    options: [
      "Ý thức có trước",
      "Vật chất có trước",
      "Cả hai xuất hiện cùng lúc",
      "Không xác định",
    ],
    answer: "Vật chất có trước",
  },

  {
    question:
      "Quy luật nào nói về sự thay đổi từ lượng thành chất?",
    options: [
      "Quy luật phủ định của phủ định",
      "Quy luật thống nhất và đấu tranh",
      "Quy luật lượng - chất",
      "Quy luật phát triển",
    ],
    answer: "Quy luật lượng - chất",
  },
];

const MCQQuiz = () => {
  return (
    <div className="mcq-page">
      <div className="mcq-container">

        <p className="mcq-label">
          CHUYÊN ĐỀ 03
        </p>

        <h1>Trắc nghiệm Tổng hợp</h1>

        <div className="mcq-quote">
          <h2>
            "Không có lý luận cách mạng thì
            không có phong trào cách mạng."
          </h2>

          <p>— V.I. Lenin</p>
        </div>

        {questions.map((item, index) => (
          <div
            className="question-card"
            key={index}
          >
            <h3>
              Câu {index + 1}: {item.question}
            </h3>

            <div className="options">
              {item.options.map(
                (option, optionIndex) => (
                  <label
                    className="option-item"
                    key={optionIndex}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                    />

                    <span>{option}</span>
                  </label>
                )
              )}
            </div>
          </div>
        ))}

        <div className="mcq-actions">
          <button className="outline-btn">
            Làm lại
          </button>

          <button className="primary-btn">
            Nộp bài
          </button>
        </div>

      </div>
    </div>
  );
};

export default MCQQuiz;