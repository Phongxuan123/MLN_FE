import React from "react";
import { Link } from "react-router-dom";
import "./Lesson.css";
import Navbar from "../components/Navbar";

const Lesson = () => {
  return (
    <div className="lesson-page">
      <Navbar />

      <div className="lesson-layout">
        {/* Sidebar */}
        <aside className="lesson-sidebar">
          <div className="sidebar-top">
            <h3>Study Modules</h3>
            <p>Marxist-Leninist Philosophy</p>
          </div>

          <nav className="sidebar-nav">
            <Link to="/flashcards">Flashcards</Link>
            <Link to="/debate">Debate Corner</Link>
            <Link to="/lessons" className="active">
              Lessons
            </Link>
            <Link to="/quiz">Quiz System</Link>
            <div>PDF Docs</div>
            <div>Progress Tracking</div>
          </nav>

          <button className="daily-btn">▶ Start Daily Lesson</button>
        </aside>

        {/* Main */}
        <main className="lesson-main">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span>›</span>
            <span>Bài học</span>
            <span>›</span>
            <strong>Chủ nghĩa duy vật biện chứng</strong>
          </div>

          {/* Header */}
          <div className="lesson-title-box">
            <h1>
              Bài 1: Vật chất và các hình thức tồn tại của vật chất
            </h1>

            <div className="lesson-meta">
              <span>Triết học</span>
              <span>⏱ 45 phút</span>
            </div>
          </div>

          <div className="lesson-grid">
            {/* Left */}
            <div className="lesson-content">
              {/* Video */}
              <div className="video-box">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2B61U2pvTiqNDznECZTR6c23wIvgyi4J5Ll15gv5cUcLbGLXLY2OtCE2hK2emP701nZiEfixugjSnyoapb_RmWY-NgGH0sklSpAXr2EvHwZVYz6JBvtwA_f0tRCiz1elSBM6ODysHkj8mwpLevHY67mGVpWvpU039VV8EHDrHNt0H3Tcg2gcgIvvxsuLwQCsHTF96fzS8DDhE6laJCgSIaWW2_VIcfLKJ1SJho3Ef52utpQwgPAkP6TVWVvtmHTGHqsTHD68LJo"
                  alt="lesson"
                />

                <button className="play-btn">▶</button>
              </div>

              {/* Content */}
              <div className="lesson-card">
                <div className="quote-box">
                  <p>
                    "Vật chất là một phạm trù triết học dùng để chỉ
                    thực tại khách quan được đem lại cho con người
                    trong cảm giác..."
                  </p>

                  <span>
                    — V.I. Lênin, Chủ nghĩa duy vật và chủ nghĩa kinh
                    nghiệm phê phán
                  </span>
                </div>

                <section>
                  <h2>1. Định nghĩa vật chất của Lênin</h2>

                  <p>
                    Định nghĩa của Lênin về vật chất bao quát ba nội
                    dung cơ bản, giúp giải quyết triệt để hai mặt của
                    vấn đề cơ bản của triết học.
                  </p>

                  <ul>
                    <li>
                      <strong>Thứ nhất:</strong> Vật chất là cái có
                      trước, ý thức là cái có sau.
                    </li>

                    <li>
                      <strong>Thứ hai:</strong> Vật chất là cái mà con
                      người có thể nhận thức được qua cảm giác.
                    </li>
                  </ul>
                </section>

                {/* Mindmap */}
                <div className="mindmap-box">
                  <h4>Sơ đồ tư duy</h4>

                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2T0oKzFgSs41_uPl7DH2lLOTYb3SxDZB_kd8GpeTjioOwrYtiKCHxMgA988xiG38bbJ6kHsbcaZ6NB5fwVhU-hX_fuk1yMDbzNQlf7hVZ55UPqUd7F8NC9JKADq4NeFoNN0S_dhU3TjhBNdbUIQGm28SveS2d-P7aiKpHJiufcGzd1wxH_9SoofRYAN_LDJsikyZtKm4WUEIn_R8NblvXegmi4LrZflrHd4Uz2wH7Y9W_TOWXBmiRAPWefJZFVQFDn-sJDNu7M6s"
                    alt="mindmap"
                  />
                </div>

                <section>
                  <h2>
                    2. Các hình thức tồn tại của vật chất
                  </h2>

                  <p>
                    Theo quan điểm duy vật biện chứng, vận động là
                    phương thức tồn tại của vật chất.
                  </p>

                  <div className="movement-grid">
                    <div className="movement-card">
                      <h5>Vận động cơ học</h5>

                      <p>
                        Sự thay đổi vị trí của các vật thể trong không
                        gian.
                      </p>
                    </div>

                    <div className="movement-card">
                      <h5>Vận động vật lý</h5>

                      <p>
                        Vận động của các phân tử và các quá trình
                        nhiệt, điện.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Bottom buttons */}
              <div className="lesson-buttons">
                <button className="btn-outline">
                  ← Bài trước
                </button>

                <button className="btn-primary">
                  Bài tiếp theo →
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="syllabus">
              <div className="syllabus-header">
                <h3>Nội dung khóa học</h3>

                <div className="progress">
                  <div className="progress-fill"></div>
                </div>

                <p>Đã hoàn thành 2/12 bài học</p>
              </div>

              <div className="syllabus-list">
                <div className="lesson-item completed">
                  ✅ Bài mở đầu: Nhập môn Triết học
                </div>

                <div className="lesson-item active">
                  ▶ Bài 1: Vật chất và các hình thức tồn tại
                </div>

                <div className="lesson-item locked">
                  🔒 Bài 2: Nguồn gốc và bản chất của ý thức
                </div>

                <div className="lesson-item locked">
                  🔒 Bài 3: Mối quan hệ giữa vật chất và ý thức
                </div>

                <div className="lesson-item locked">
                  🔒 Bài 4: Hai nguyên lý của phép biện chứng
                </div>
              </div>

              <button className="pdf-btn">
                ⬇ Tài liệu đi kèm (PDF)
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lesson;