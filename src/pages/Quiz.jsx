import React from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const quizModules = [
  {
    icon: "quiz",
    level: "Nâng cao",
    title: "Trắc nghiệm Tổng hợp",
    desc: "Kiểm tra kiến thức qua các câu hỏi đa lựa chọn.",
    progress: 10,
    question: "2/25 câu",
    link: "/quiz/mcq",
  },

  {
    icon: "edit_note",
    level: "Trung bình",
    title: "Tư duy Độc lập",
    desc: "Trả lời các câu hỏi tự luận ngắn và phân tích.",
    progress: 45,
    question: "9/20 câu",
    link: "/quiz/essay",
  },

  {
    icon: "cards",
    level: "Cơ bản",
    title: "Thử thách Kết nối",
    desc: "Nối khái niệm với định nghĩa chính xác.",
    progress: 80,
    question: "12/15 câu",
    link: "/quiz/matching",
  },

  {
    icon: "menu_book",
    level: "Cơ bản",
    title: "Phân tích Văn bản",
    desc: "Đọc đoạn trích và trả lời câu hỏi.",
    progress: 100,
    question: "20/20 câu",
    link: "/quiz/analysis",
  },

  {
    icon: "image_search",
    level: "Trung bình",
    title: "Đuổi Hình Bắt Triết Học",
    desc: "Giải mã các khái niệm qua hình ảnh minh họa.",
    progress: 0,
    question: "0/30 câu",
    link: "/image-quiz",
  },
];

const Quiz = () => {
  return (
    <div className="quiz-page">
      <Navbar />

      <div className="quiz-layout">
        {/* SIDEBAR */}
        <aside className="quiz-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-icon">
              <span className="material-symbols-outlined">
                shield
              </span>
            </div>

            <div>
              <h2>Study Modules</h2>

              <p>
                Marxist-Leninist Philosophy
              </p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <Link to="/flashcards">
              <span className="material-symbols-outlined">
                cards
              </span>

              Flashcards
            </Link>

            <Link to="/debate">
              <span className="material-symbols-outlined">
                diversity_3
              </span>

              Debate Corner
            </Link>

            <Link to="/lessons">
              <span className="material-symbols-outlined">
                menu_book
              </span>

              Lessons
            </Link>

            <div className="active">
              <span className="material-symbols-outlined">
                quiz
              </span>

              Quiz System
            </div>

            <Link to="/docs">
              <span className="material-symbols-outlined">
                description
              </span>

              PDF Docs
            </Link>
          </nav>

          <button className="daily-btn">
            <span className="material-symbols-outlined">
              play_circle
            </span>

            Start Daily Lesson
          </button>
        </aside>

        {/* MAIN */}
        <main className="quiz-main">
          {/* HERO */}
          <div className="quiz-hero">
            <h1>
              Hệ thống Kiểm tra Kiến thức
            </h1>

            <div className="quote-box">
              <p>
                "Các nhà triết học đã chỉ giải
                thích thế giới bằng nhiều cách
                khác nhau, song vấn đề là cải
                tạo thế giới."
              </p>

              <span>— Karl Marx</span>
            </div>

            {/* SEARCH */}
            <div className="search-filter">
              <div className="search-box">
                <span className="material-symbols-outlined">
                  search
                </span>

                <input
                  type="text"
                  placeholder="Tìm kiếm chương học hoặc chủ đề..."
                />
              </div>

              <div className="filter-buttons">
                <button className="active">
                  Tất cả
                </button>

                <button>Duy vật</button>

                <button>Biện chứng</button>

                <button>Lịch sử</button>
              </div>
            </div>
          </div>

          {/* QUIZ GRID */}
          <div className="quiz-grid">
            {quizModules.map((quiz, index) => (
              <Link
                to={quiz.link}
                className="quiz-card"
                key={index}
              >
                <div className="quiz-card-top">
                  <div className="quiz-card-icon">
                    <span className="material-symbols-outlined">
                      {quiz.icon}
                    </span>
                  </div>

                  <span className="level-badge">
                    {quiz.level}
                  </span>
                </div>

                <h3>{quiz.title}</h3>

                <p>{quiz.desc}</p>

                <div className="quiz-progress">
                  <div className="progress-info">
                    <span>
                      Hoàn thành {quiz.progress}%
                    </span>

                    <span>{quiz.question}</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${quiz.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}

            {/* SPECIAL CARD */}
            <div className="special-card">
              <div className="special-tag">
                Thử thách
              </div>

              <div className="quiz-card-icon special-icon">
                <span className="material-symbols-outlined">
                  auto_awesome
                </span>
              </div>

              <h3>Ôn tập Tổng hợp</h3>

              <p>
                Sự kết hợp ngẫu nhiên của tất
                cả các dạng bài tập.
              </p>

              <button>
                Bắt đầu ngay
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Quiz;