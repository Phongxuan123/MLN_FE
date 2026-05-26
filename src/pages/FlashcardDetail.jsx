import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Flashcards.css";
import Navbar from "../components/Navbar";

const flashcardData = {
  1: {
    title: "Nhập môn Triết học",
    cards: [
      {
        front: "Triết học là gì?",
        back: "Triết học là hệ thống tri thức lý luận chung nhất về thế giới và vị trí con người."
      },
      {
        front: "Đối tượng nghiên cứu của triết học?",
        back: "Nghiên cứu các quy luật chung nhất của tự nhiên, xã hội và tư duy."
      }
    ]
  },

  2: {
    title: "Chủ nghĩa Duy vật Biện chứng",
    cards: [
      {
        front: "Vật chất là gì?",
        back: "Vật chất là phạm trù triết học dùng để chỉ thực tại khách quan."
      },
      {
        front: "Ý thức là gì?",
        back: "Ý thức là sự phản ánh thế giới khách quan vào bộ não con người."
      }
    ]
  },

  3: {
    title: "Phép Biện chứng Duy vật",
    cards: [
      {
        front: "Quy luật lượng chất?",
        back: "Sự thay đổi về lượng dẫn đến thay đổi về chất."
      }
    ]
  },

  4: {
    title: "Học thuyết Giá trị Thặng dư",
    cards: [
      {
        front: "Giá trị thặng dư là gì?",
        back: "Là phần giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra."
      }
    ]
  },

  5: {
    title: "Chủ nghĩa Duy vật Lịch sử",
    cards: [
      {
        front: "Hình thái kinh tế xã hội là gì?",
        back: "Là xã hội ở từng giai đoạn lịch sử nhất định với kiểu quan hệ sản xuất đặc trưng."
      }
    ]
  }
};

const FlashcardDetail = () => {
  const { id } = useParams();

  const chapter = flashcardData[id];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!chapter) {
    return <h1>Không tìm thấy chương học</h1>;
  }

  const currentCard = chapter.cards[currentIndex];

  const nextCard = () => {
    if (currentIndex < chapter.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  return (
    <div className="flashcards-page">

      <Navbar />

      <div className="fc-layout">

        {/* SIDEBAR */}
        <aside className="fc-sidebar">
          <div className="fc-sidebar-top">
            <h2>Study Modules</h2>
            <p>Marxist-Leninist Philosophy</p>
          </div>

          <nav className="fc-sidebar-nav">
            <Link to="/flashcards" className="active">
              Flashcards
            </Link>

            <Link to="/debate">Debate</Link>

            <Link to="/lessons">Lessons</Link>

            <Link to="/quiz">Quiz System</Link>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="fc-main">

          <div className="fc-top">
            <div>
              <h1>{chapter.title}</h1>

              <p>
                Flashcard {currentIndex + 1} / {chapter.cards.length}
              </p>
            </div>
          </div>

          {/* FLASHCARD */}
          <div
            className="flashcard-wrapper"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`flashcard ${
                flipped ? "flipped" : ""
              }`}
            >
              {/* FRONT */}
              <div className="card-face card-front">
                <div className="card-center">
                  <h2>{currentCard.front}</h2>

                  <p>Tap to flip ↻</p>
                </div>
              </div>

              {/* BACK */}
              <div className="card-face card-back">
                <div className="card-center">
                  <h2>{currentCard.back}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="fc-buttons">

            <button
              className="btn-outline"
              onClick={prevCard}
            >
              ← Previous
            </button>

            <button
              className="btn-primary"
              onClick={nextCard}
            >
              Next →
            </button>

          </div>

        </main>
      </div>
    </div>
  );
};

export default FlashcardDetail;