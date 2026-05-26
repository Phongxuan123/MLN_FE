import React from "react";
import "./ImageQuiz.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ImageQuiz = () => {
  const letters = [
    "E",
    "C",
    "T",
    "I",
    "X",
    "S",
    "L",
    "M",
    "A",
    "K",
    "O",
    "N",
  ];

  return (
    <div className="imagequiz-page">
      <Navbar />

      <div className="imagequiz-layout">
        {/* SIDEBAR */}
        <aside className="imagequiz-sidebar">
          <div className="sidebar-top">
            <h2>Study Modules</h2>

            <p>
              Marxist-Leninist Philosophy
            </p>
          </div>

          <nav>
            <Link to="/flashcards">
              Flashcards
            </Link>

            <Link to="/debate">
              Debate Corner
            </Link>

            <Link to="/lessons">
              Lessons
            </Link>

            <div className="active">
              Quiz System
            </div>

            <Link to="/docs">
              PDF Docs
            </Link>

            <Link to="#">
              Progress Tracking
            </Link>
          </nav>

          <button className="daily-btn">
            Start Daily Lesson
          </button>
        </aside>

        {/* MAIN */}
        <main className="imagequiz-main">
          {/* TOP */}
          <div className="imagequiz-top">
            <h1>
              Đuổi hình bắt triết học
            </h1>

            <p>
              Decode the abstract concepts
              of Marxist-Leninist thought
              through symbolic visual
              synthesis.
            </p>

            <div className="top-stats">
              <div>
                <span>Level</span>

                <strong>
                  Advanced Theory
                </strong>
              </div>

              <div className="divider"></div>

              <div>
                <span>Score</span>

                <strong>
                  1,250 PTS
                </strong>
              </div>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="image-grid">
            <div className="image-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeOoBokITD8Ps9qRbb4nBKxbHYUeGk46aBDXiSJR_a6kxXPO4_fcgueNFpWIcXa2u3mY5XCKBhmWiUAnzp-kAUCFf9JU3nhg5Rc_RyY8jWs6ZmvH7E8Nm_nj8VI3Jo6MSLnIw-Cx02Q0nX94f-p1QWV8LSV_DSYg9KlP21tQojXVTJWDyKxeM9jnajsHpwtPqvbxb7XgQwrTt7dNtcZL0RjJO5Nfo46_zg8pKNwY6W1fAuRtxP8GaTBGjqgNah4FLHbb-nFfGoRkA"
                alt=""
              />
            </div>

            <div className="image-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMP3hes-h3qvtht_rem5TDP6b_UadJrUK6_qXGwuVIvpZJT0doGhy7-YJSbOkWxljcHBXYBydnw97955UUkbCkERhJEKinrS7itD6nSOouqekFP3w05QIkm0gROjkQ2RBfuhv-rkTci6cZv7akFwUoJxFQ7Lc2_7BTdZZRQtzYIZYdeKpWhq6KQtCE4U_VsSZjUhKa5HMtS1qphPTARWhXrYEUPwDWnm7KvMFSDRnyY88WbrleVtCTdg6EAUZH1Z3QLMB1tRIi4gU"
                alt=""
              />
            </div>
          </div>

          {/* ANSWER */}
          <div className="answer-box">
            <div className="answer-slot">
              D
            </div>

            <div className="answer-slot">
              I
            </div>

            <div className="answer-slot">
              A
            </div>

            <div className="answer-slot">
              L
            </div>

            <div className="answer-slot active-slot">
              _
            </div>

            <div className="answer-slot"></div>

            <div className="answer-slot"></div>

            <div className="answer-slot"></div>

            <div className="answer-slot"></div>

            <div className="answer-slot"></div>
          </div>

          {/* LETTERS */}
          <div className="letters-box">
            {letters.map((letter, index) => (
              <button
                key={index}
                className="letter-btn"
              >
                {letter}
              </button>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="action-buttons">
            <button className="skip-btn">
              Skip
            </button>

            <button className="ai-btn">
              Use AI Power-up
            </button>
          </div>

          {/* QUOTE */}
          <div className="quote-box">
            "Philosophy is the science
            which should prove to us
            that we are capable of
            making our own history."
          </div>
        </main>
      </div>
    </div>
  );
};

export default ImageQuiz;