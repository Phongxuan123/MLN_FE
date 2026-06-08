import React from "react";
import { Link } from "react-router-dom";
import { SIDEBAR_NAV_ITEMS, SURVEY_URL } from "../constants";

// Sidebar dùng chung cho các trang dùng layout Tailwind (HomePages, Mindmap...)
// activeKey: key trong SIDEBAR_NAV_ITEMS để highlight mục đang ở
// footer: nội dung tuỳ chọn hiển thị ở đáy sidebar (vd: nút Start Daily Lesson)
// collapsed / onToggle: thu gọn (chỉ còn icon) hoặc mở rộng sidebar
export default function StudyModulesSidebar({
  activeKey,
  footer = null,
  collapsed = false,
  onToggle,
}) {
  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 ${
        collapsed ? "w-16" : "w-72"
      } py-2 z-40 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden hidden lg:flex flex-col transition-[width] duration-300`}
    >
      {/* Tiêu đề + nút thu gọn / mở rộng */}
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        } gap-1 px-3 py-3 mb-2`}
      >
        {!collapsed && (
          <div className="px-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-red-800">school</span>
              <h2 className="font-bold text-lg text-gray-900 truncate">Study Modules</h2>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider truncate">
              Marxist-Leninist Philosophy
            </p>
          </div>
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}
          title={collapsed ? "Mở rộng" : "Thu gọn"}
          className="shrink-0 h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-red-800 hover:bg-red-50 border border-gray-200 transition-colors"
        >
          <span className="material-symbols-outlined">
            {collapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {SIDEBAR_NAV_ITEMS.map((item) => {
          const isActive = item.key === activeKey;
          const base =
            "flex items-center gap-3 rounded-lg my-1 mx-2 transition-colors " +
            (collapsed ? "justify-center px-0 py-3" : "px-4 py-3");
          const tone = isActive
            ? "bg-red-50 text-red-800 font-semibold"
            : "text-gray-700 hover:bg-gray-100";
          return (
            <Link key={item.key} to={item.to} title={item.label} className={`${base} ${tone}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Nút Thực hiện khảo sát — mở Google Form ở tab mới */}
      <div className={`mt-2 ${collapsed ? "px-2" : "px-4"} pb-2`}>
        <a
          href={SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Thực hiện khảo sát"
          className={`flex items-center gap-2 rounded-lg border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white font-bold transition-colors ${
            collapsed ? "justify-center py-3" : "justify-center px-4 py-3"
          }`}
        >
          <span className="material-symbols-outlined">assignment</span>
          {!collapsed && <span>Thực hiện khảo sát</span>}
        </a>
      </div>

      {footer && !collapsed && <div className="px-4 pb-8">{footer}</div>}
    </aside>
  );
}
