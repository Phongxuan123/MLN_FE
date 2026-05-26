import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Layers3,
  MessagesSquare,
  BookOpen,
  CircleHelp,
  FileText,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen((s) => !s);

  return (
    <header className="flex justify-between items-center w-full px-12 h-16 sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          alt="Dialectic Academy Logo"
          className="h-10 w-10 object-contain rounded-md"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAQAElEQVR4AezdB5wURbrH8X/vLkkUFMVA2F1QVMw5Y845ZwkmzNkznTKLit4ZzywGVERMGF/PnDFnPXNCxKwYkbz9Vs2uCpI2THdXVf/6M83sznRXPc+3ZoepZ3p6ysSCAAIIIIAAAggggAACCCCAAAKhC4gCQPBDTIIIIIAAAggggAACCCCAAAIIiAIADwIEEEAAAQQQQAABBBBAAAEEghcwCXIEgEHgggACCCCAAAIIIIAAAggggEDIAjY3CgBWgRUBBBBAAAEEEEAAAQQQQACBcAWKmVEAKDLwDwIIIIAAAggggAACCCCAAAKiAMCbIIAAAggggAACCCCAAAIIIBAqAYvAJhzBIBBAAAEEEEAAAQQQQACBcAVsLoLeFHvNI5IARBAAAEEAAQQQQACB/gZYdSELhM0Y/kUAAQQQQAABBBBAAAEEEEAARIBBAAAHxgBrD2q3fTJf+wQkCCCAQEgCxiAmGJpRl1r9fmELZvmkm6muXcVyV1C3BvJL2PGu9DAJMZ9Ri0KvPEEJCCGAAAIIIIAAAggggEAcBMaY4l5wgzEj91xjBVgE6RN3YoGMAQQQQACBfBEpJt0Rvx1j6T3nTSmhPKAzxKRQ6Kgnneg8k6hG2LKvyAQfLFnrm5VgUO5k0t4YFc/LVVKTsSzEHEPdJI1gvR8fWGxoKZVPiYYLgBhBQQHEEAAAQQQQAABBBBAICQCv/2A55R7ZmwNXzqcZPMcC4nVq8f8lqmQPW2+z8l1VdwvMLyUvgvBaT1VOMcCnRvkbPc2XdRbVZFXAhVJKZJCwT1IpvvLyqHF8gXsOXtYvO+jLxNLWdDH8T0hm4XY0DZGE9iZKkqQf+pHJTfZMkbZxN/yiKyqJJtx0ORLXgtOPmZngRZvGPa1SHp8Zj5WYYZY1fq0x6VDvFacFLgJLxBVp20sWiVN6Z3BNFf4/fKZkMTYvBMEpJhVfcLJU6hvHqkH/2sZON7Q+u/VNWGpbYhjPT+3kcwMnJJx2uMUMvGYF8nzGrR5sXlLYJu0K8EQHXtKm6TYN+0rFrQrz7VCk/pVvxm/v9dLc3qU4WqEDPyp5h4u3l+s3jMPPZvkLxZqPD6vwkKZbdGsQ1gF5Wdz9Q5nRkx+/8CILPo7Bd1Sw2CYlQ55MjBjBstfOhS3HfGYqfqNrgFWWiOw="
        />
        <h1
          className="text-[28px] text-[#570013] font-bold"
          style={{ fontFamily: '"Libre Caslon Text", serif' }}
        >
          Dialectic Academy
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-14">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <House size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Home
          </span>
        </NavLink>

        <NavLink
          to="/flashcards"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <Layers3 size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Flashcards
          </span>
        </NavLink>

        <NavLink
          to="/debate"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <MessagesSquare size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Debate
          </span>
        </NavLink>

        <NavLink
          to="/lessons"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <BookOpen size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Lessons
          </span>
        </NavLink>

        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <CircleHelp size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Quiz
          </span>
        </NavLink>

        <NavLink
          to="/docs"
          className={({ isActive }) =>
            `group relative transition-all duration-200 ${
              isActive ? "text-red-800" : "text-gray-600 hover:text-red-800"
            }`
          }
        >
          <FileText size={26} strokeWidth={2.2} />

          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Docs
          </span>
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-blue-200 rounded-full transition-all text-gray-600" onClick={toggleChat}>
          <MessageCircle size={20} />
        </button>
        <button className="p-2 hover:bg-blue-200 rounded-full transition-all text-gray-600">
          <Settings size={20} />
        </button>
        <div className="h-8 w-8 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
          JS
        </div>
      </div>
    </header>
  );
}
