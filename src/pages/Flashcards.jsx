import React, { useState, useEffect } from "react";
import "./Flashcards.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Flashcards = () => {
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const nextCard = () => {
    setFlipped(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggleFlip();
      } else if (e.key === "1") {
        nextCard();
      } else if (e.key === "2") {
        setShowHint(true);
      } else if (e.key === "3") {
        nextCard();
      } else if (e.key === "Escape") {
        setShowHint(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [flipped]);

  return (
    <div className="flashcards-page">
      <Navbar />

      <div className="fc-layout">
        {/* Sidebar */}
        <aside className="fc-sidebar">
          <div className="fc-sidebar-top">
            <h2>Study Modules</h2>
            <p>Marxist-Leninist Philosophy</p>
          </div>

          <nav className="fc-sidebar-nav">
  <Link to="/flashcards" className="active">
    Flashcards
  </Link>

  <Link to="/debate">
    Debate
  </Link>

  <Link to="/lessons">
    Lessons
  </Link>

  <Link to="/quiz">
    Quiz System
  </Link>

  <Link to="/docs">
    PDF Docs
  </Link>

  <Link to="/progress">
    Progress Tracking
  </Link>
</nav>

          <div className="fc-goal">
            <p>Daily Goal</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <span>13/20 terms reviewed today</span>

            <button>Start Daily Lesson</button>
          </div>
        </aside>

        {/* Main */}
<main className="fc-main">
  {/* Header */}
  <div className="chapter-header">
    <div className="chapter-title">
      <div className="title-line"></div>

      <div>
        <h1>Chọn Chương Học - Flashcards</h1>

        <p>
          Hệ thống học tập biện chứng: Từ lý thuyết đến thực tiễn
          thông qua việc ghi nhớ chủ động.
        </p>
      </div>
    </div>

    <div className="search-box">
      <input
        type="text"
        placeholder="🔍  Tìm kiếm chương học..."
      />
    </div>
  </div>

  {/* GRID */}
  <div className="chapter-grid">

  {/* CARD 1 */}
  <Link to="/flashcards/1" className="chapter-card">
    <div className="chapter-top">
      <div className="chapter-icon">
        <span className="material-symbols-outlined">
          menu_book
        </span>
      </div>

      <span>CHƯƠNG 1</span>
    </div>

    <h2>Nhập môn Triết học</h2>

    <p>
      Tổng quan về lịch sử, đối tượng và chức năng của triết học.
    </p>

    <div className="chapter-progress">
      <div className="chapter-info">
        <small>45 Flashcards</small>
        <small>80%</small>
      </div>

      <div className="chapter-bar">
        <div style={{ width: "80%" }}></div>
      </div>
    </div>
  </Link>

  {/* CARD 2 */}
  <Link to="/flashcards/2" className="chapter-card">
    <div className="chapter-top">
      <div className="chapter-icon">
        <span className="material-symbols-outlined">
          psychology
        </span>
      </div>

      <span>CHƯƠNG 2</span>
    </div>

    <h2>Chủ nghĩa Duy vật Biện chứng</h2>

    <p>
      Tìm hiểu về vật chất, ý thức và mối quan hệ giữa chúng.
    </p>

    <div className="chapter-progress">
      <div className="chapter-info">
        <small>62 Flashcards</small>
        <small>45%</small>
      </div>

      <div className="chapter-bar">
        <div style={{ width: "45%" }}></div>
      </div>
    </div>
  </Link>

  {/* CARD 3 */}
  <Link to="/flashcards/3" className="chapter-card">
    <div className="chapter-top">
      <div className="chapter-icon">
        <span className="material-symbols-outlined">
          account_tree
        </span>
      </div>

      <span>CHƯƠNG 3</span>
    </div>

    <h2>Phép Biện chứng Duy vật</h2>

    <p>
      Các quy luật và phạm trù cơ bản của phép biện chứng.
    </p>

    <div className="chapter-progress">
      <div className="chapter-info">
        <small>58 Flashcards</small>
        <small>12%</small>
      </div>

      <div className="chapter-bar">
        <div style={{ width: "12%" }}></div>
      </div>
    </div>
  </Link>

  {/* CARD 4 */}
  <Link to="/flashcards/4" className="chapter-card">
    <div className="chapter-top">
      <div className="chapter-icon">
        <span className="material-symbols-outlined">
          gavel
        </span>
      </div>

      <span>CHƯƠNG 4</span>
    </div>

    <h2>Học thuyết Giá trị Thặng dư</h2>

    <p>
      Phân tích bản chất bóc lột của phương thức sản xuất TBCN.
    </p>

    <div className="chapter-progress">
      <div className="chapter-info">
        <small>40 Flashcards</small>
        <small>0%</small>
      </div>

      <div className="chapter-bar">
        <div style={{ width: "0%" }}></div>
      </div>
    </div>
  </Link>

  {/* CARD 5 */}
  <Link to="/flashcards/5" className="chapter-card">
    <div className="chapter-top">
      <div className="chapter-icon">
        <span className="material-symbols-outlined">
          groups
        </span>
      </div>

      <span>CHƯƠNG 5</span>
    </div>

    <h2>Chủ nghĩa Duy vật Lịch sử</h2>

    <p>
      Học thuyết về hình thái kinh tế - xã hội và vai trò quần chúng.
    </p>

    <div className="chapter-progress">
      <div className="chapter-info">
        <small>72 Flashcards</small>
        <small>95%</small>
      </div>

      <div className="chapter-bar">
        <div style={{ width: "95%" }}></div>
      </div>
    </div>
  </Link>

  {/* CREATE CARD */}
  <div className="chapter-card create-card">
    <div className="plus-icon">＋</div>

    <h2>Tạo Bộ Flashcard Riêng</h2>

    <p>
      Xây dựng hệ thống ghi nhớ theo phương pháp cá nhân hóa.
    </p>
  </div>

</div>

  {/* QUOTE */}
  <div className="quote-footer">
    <div className="quote-line"></div>

    <div>
      <h2>
        "Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau,
        song vấn đề là cải tạo thế giới."
      </h2>

      <span>
        — KARL MARX, LUẬN CƯƠNG VỀ FEUERBACH
      </span>
    </div>
  </div>
</main>
      </div>

      {/* Modal */}
      {showHint && (
        <div className="hint-overlay" onClick={() => setShowHint(false)}>
          <div
            className="hint-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hint-header">
              <h3>Dialectic AI Assistant</h3>

              <button onClick={() => setShowHint(false)}>✕</button>
            </div>

            <div className="hint-body">
              <p>
                Hãy tưởng tượng "Vật chất" là sân khấu, còn "Cảm giác" là khán
                giả. Dù khán giả có tồn tại hay không, sân khấu vẫn tồn tại
                khách quan.
              </p>

              <div className="mnemonic">
                <strong>Key Mnemonic:</strong>
                <p>"Khách quan - Độc lập - Phản ánh"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;