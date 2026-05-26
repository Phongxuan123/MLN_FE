import React from "react";
import "./DebateCorner.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const DebateCorner = () => {
  return (
    <div className="debate-page">
      <Navbar />

      <div className="debate-layout">
        {/* Sidebar */}
        <aside className="debate-sidebar">
          <div className="sidebar-top">
            <h2>Study Modules</h2>
            <p>Marxist-Leninist Philosophy</p>
          </div>

          <nav className="sidebar-nav">
            <a href="/flashcards">
              <span className="material-symbols-outlined">cards</span>
              Flashcards
            </a>

            <a href="/debate" className="active">
              <span className="material-symbols-outlined">
                diversity_3
              </span>
              Debate Corner
            </a>

            <a href="/">
              <span className="material-symbols-outlined">menu_book</span>
              Lessons
            </a>

            <a href="/">
              <span className="material-symbols-outlined">quiz</span>
              Quiz System
            </a>

            <a href="/">
              <span className="material-symbols-outlined">
                description
              </span>
              PDF Docs
            </a>

            <a href="/">
              <span className="material-symbols-outlined">insights</span>
              Progress Tracking
            </a>
          </nav>

          <div className="daily-btn">
            <button>Start Daily Lesson</button>
          </div>
        </aside>

        {/* Main */}
        <main className="debate-main">
          <div className="debate-grid">
            {/* Topic Header */}
            <div className="topic-header">
              <div>
                <span className="topic-badge">ACTIVE DEBATE</span>

                <h1>
                  The Primacy of Matter over Consciousness:
                  <br />
                  Historical Materialism in the 21st Century
                </h1>
              </div>

              <div className="topic-users">
                <p>Participants: 142 Active</p>

                <div className="avatars">
                  <div className="avatar">AM</div>
                  <div className="avatar">LN</div>
                  <div className="avatar more">+139</div>
                </div>
              </div>
            </div>

            {/* Debate Content */}
            <div className="debate-content">
              {/* Left */}
              <div className="debate-column">
                <div className="column-title">
                  <span className="material-symbols-outlined">
                    balance
                  </span>
                  <h3>Pro-Dialectic</h3>
                </div>

                <div className="debate-scroll">
                  <div className="argument-card pro">
                    <div className="argument-user">
                      <div className="user-avatar">AM</div>

                      <div>
                        <h4>Prof. Aris M.</h4>
                        <p>Dialectics Specialist</p>
                      </div>
                    </div>

                    <p className="argument-text">
                      "The contradiction between productive forces and
                      relations of production remains the engine of
                      history, even in the digital age."
                    </p>

                    <div className="argument-footer">
                      <span>
                        <span className="material-symbols-outlined">
                          thumb_up
                        </span>
                        24
                      </span>

                      <button>View Thesis</button>
                    </div>
                  </div>

                  <div className="argument-card pro">
                    <div className="argument-user">
                      <div className="user-avatar">LN</div>

                      <div>
                        <h4>Le Nguyen</h4>
                        <p>Advanced Student</p>
                      </div>
                    </div>

                    <p className="argument-text">
                      Materialism doesn't ignore the digital; it
                      identifies the hardware and server farms as the
                      new means of production.
                    </p>

                    <div className="argument-footer">
                      <span>
                        <span className="material-symbols-outlined">
                          thumb_up
                        </span>
                        12
                      </span>

                      <button>Reply</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="debate-column">
                <div className="column-title">
                  <span className="material-symbols-outlined">
                    gavel
                  </span>
                  <h3>Counter-Arguments</h3>
                </div>

                <div className="debate-scroll">
                  <div className="argument-card counter">
                    <div className="argument-user">
                      <div className="user-avatar">SK</div>

                      <div>
                        <h4>Dr. S. K. Klein</h4>
                        <p>Phenomenologist</p>
                      </div>
                    </div>

                    <p className="argument-text">
                      Does historical materialism account for the
                      subjective 'experience' of the worker in a purely
                      algorithmic labor market?
                    </p>

                    <div className="argument-footer">
                      <span>
                        <span className="material-symbols-outlined">
                          thumb_up
                        </span>
                        38
                      </span>

                      <button>Challenge</button>
                    </div>
                  </div>

                  <div className="argument-card counter">
                    <div className="argument-user">
                      <div className="user-avatar">TH</div>

                      <div>
                        <h4>Tran Hoai</h4>
                        <p>Philosophy Minor</p>
                      </div>
                    </div>

                    <p className="argument-text">
                      Is consciousness truly secondary if the
                      'metaverse' exists purely in the realm of
                      perceived reality?
                    </p>

                    <div className="argument-footer">
                      <span>
                        <span className="material-symbols-outlined">
                          thumb_up
                        </span>
                        5
                      </span>

                      <button>Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="debate-input">
              <div className="input-avatar">U</div>

              <input
                type="text"
                placeholder="Tham gia tranh biện với lập luận của bạn..."
              />

              <div className="input-actions">
                <button className="attach-btn">
                  Attach Cite
                </button>

                <button className="send-btn">
                  Send Argument
                </button>
              </div>
            </div>

            {/* AI Panel */}
            <div className="ai-panel">
              <div className="ai-header">
                <span className="material-symbols-outlined">
                  psychology
                </span>

                <h3>Dialectic AI Analysis</h3>
              </div>

              <div className="ai-section">
                <h4>LIVE SUMMARY</h4>

                <p>
                  The debate is currently centered on the definition
                  of "base" and "superstructure" in the context of
                  digital automation.
                </p>
              </div>

              <div className="ai-quote">
                <h4>SUGGESTED CONTEXT</h4>

                <p>
                  "It is not the consciousness of men that determines
                  their existence, but their social existence that
                  determines their consciousness." — Karl Marx
                </p>
              </div>

              <div className="ai-alerts">
                <h4>Logical Fallacy Alerts</h4>

                <ul>
                  <li>⚠ Strawman detected in Counter-Argument #4</li>
                  <li>✔ Strong syllogism in Pro-Dialectic #2</li>
                </ul>
              </div>

              <button className="report-btn">
                Generate Debate Report
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DebateCorner;