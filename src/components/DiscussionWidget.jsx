import React, { useState, useRef, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { DISCUSSION_SEED } from "../data/discussionSeed";

const FAB_SIZE = 56; // h-14 w-14
const EDGE = 16; // khoảng cách tối thiểu tới mép màn hình
const DRAG_THRESHOLD = 5; // px — vượt ngưỡng này coi là kéo, không phải bấm
const POS_KEY = "mln_discussion_pos";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Khu thảo luận nổi (floating) — có thể KÉO-THẢ tự do như bong bóng chat
// Hiển thị trao đổi giữa người học và Admin; câu trả lời của Admin nổi bật hơn
// Tin nhắn người dùng gửi được lưu vào localStorage để không mất khi tải lại
// Vị trí nút cũng được lưu lại để giữ nguyên khi tải lại trang
export default function DiscussionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessages, setUserMessages] = useLocalStorage(
    "mln_discussion_messages",
    []
  );
  const [draft, setDraft] = useState("");
  const listEndRef = useRef(null);

  // Vị trí nút (top-left, px). null = dùng vị trí mặc định góc trái dưới.
  const [pos, setPos] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(POS_KEY));
      return v && typeof v.x === "number" && typeof v.y === "number" ? v : null;
    } catch {
      return null;
    }
  });

  const fabRef = useRef(null);
  const drag = useRef({ active: false, moved: false, offsetX: 0, offsetY: 0 });

  const allMessages = [...DISCUSSION_SEED, ...userMessages];

  // Cuộn xuống tin nhắn mới nhất mỗi khi mở panel hoặc có tin mới
  useEffect(() => {
    if (isOpen) {
      listEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, userMessages.length]);

  const handlePointerDown = useCallback((e) => {
    const rect = fabRef.current.getBoundingClientRect();
    drag.current = {
      active: true,
      moved: false,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    fabRef.current.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!drag.current.active) return;
    const nextX = clamp(
      e.clientX - drag.current.offsetX,
      EDGE,
      window.innerWidth - FAB_SIZE - EDGE
    );
    const nextY = clamp(
      e.clientY - drag.current.offsetY,
      EDGE,
      window.innerHeight - FAB_SIZE - EDGE
    );
    const rect = fabRef.current.getBoundingClientRect();
    if (
      Math.abs(nextX - rect.left) > DRAG_THRESHOLD ||
      Math.abs(nextY - rect.top) > DRAG_THRESHOLD
    ) {
      drag.current.moved = true;
    }
    setPos({ x: nextX, y: nextY });
  }, []);

  const handlePointerUp = useCallback(
    (e) => {
      if (!drag.current.active) return;
      drag.current.active = false;
      fabRef.current.releasePointerCapture(e.pointerId);
      if (drag.current.moved) {
        // Lưu vị trí cuối cùng
        setPos((p) => {
          if (p) localStorage.setItem(POS_KEY, JSON.stringify(p));
          return p;
        });
      } else {
        // Không di chuyển -> coi như một cú bấm: mở/đóng panel
        setIsOpen((prev) => !prev);
      }
    },
    []
  );

  // Vị trí container: dùng pos nếu đã kéo, ngược lại mặc định góc trái dưới
  const containerStyle = pos
    ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" }
    : { left: EDGE * 2, bottom: EDGE * 2 };

  // Panel mở hướng nào tuỳ vị trí nút (tránh tràn màn hình)
  const inLowerHalf = pos ? pos.y > window.innerHeight / 2 : true;
  const inRightHalf = pos ? pos.x > window.innerWidth / 2 : false;
  const panelPos = `${inLowerHalf ? "bottom-full mb-3" : "top-full mt-3"} ${
    inRightHalf ? "right-0" : "left-0"
  }`;

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;
    const newMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      author: "Bạn",
      time: "Vừa xong",
      text: trimmed,
    };
    setUserMessages([...userMessages, newMessage]);
    setDraft("");
  };

  return (
    <div className="fixed z-50" style={containerStyle}>
      {isOpen && (
        <div className={`absolute ${panelPos} w-[22rem] max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col`}>
          {/* Header */}
          <div className="bg-red-800 text-white px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">forum</span>
              </div>
              <div>
                <p className="font-bold text-sm">Thảo luận bài học</p>
                <p className="text-xs opacity-70">
                  {allMessages.length} trao đổi
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Đóng thảo luận"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Danh sách tin nhắn */}
          <div className="h-80 overflow-y-auto bg-gray-50 p-4 space-y-3">
            {allMessages.map((message) => {
              const isAdmin = message.role === "admin";
              return (
                <div
                  key={message.id}
                  className={`p-3 rounded-xl border ${
                    isAdmin
                      ? "bg-red-50 border-red-200 shadow-sm"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`material-symbols-outlined text-base ${
                        isAdmin ? "text-red-800" : "text-gray-400"
                      }`}
                    >
                      {isAdmin ? "verified" : "account_circle"}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        isAdmin ? "text-red-800" : "text-gray-800"
                      }`}
                    >
                      {message.author}
                    </span>
                    {isAdmin && (
                      <span className="text-[10px] uppercase tracking-wider bg-red-800 text-white px-1.5 py-0.5 rounded font-bold">
                        Admin
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {message.time}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      isAdmin ? "text-red-900" : "text-gray-700"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              );
            })}
            <div ref={listEndRef} />
          </div>

          {/* Ô nhập */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-gray-200 flex gap-2 shrink-0"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-red-800 outline-none"
              placeholder="Đặt câu hỏi cho cả lớp..."
            />
            <button
              type="submit"
              aria-label="Gửi"
              className="bg-red-800 text-white p-2 rounded-lg hover:bg-red-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      )}

      <button
        ref={fabRef}
        type="button"
        aria-label="Mở khu thảo luận (có thể kéo để di chuyển)"
        title="Kéo để di chuyển · Bấm để mở thảo luận"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="h-14 w-14 bg-red-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-900 active:scale-95 transition-colors cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <span className="material-symbols-outlined text-2xl pointer-events-none">
          {isOpen ? "close" : "forum"}
        </span>
      </button>
    </div>
  );
}
