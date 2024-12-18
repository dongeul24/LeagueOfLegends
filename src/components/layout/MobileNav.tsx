"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto flex justify-between items-center px-4">
      <Link href={"/"} className="relative lg:hidden">
        <Image
          src={"/images/nav-logo.png"}
          alt="League of Legends"
          width={100}
          height={50}
          className="w-[100px] h-[50px] object-cover"
        />
      </Link>
      {/* 햄버거 버튼 사용함(모바일용용) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* useState로 드롭다운 열린지 안 열린지 상태 확인해서 드롭다운 메뉴 보여줌  */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-b from-cyan-950 to-cyan-800 dark:from-gray-900 dark:to-gray-800 text-white flex flex-col items-center space-y-4 py-4 shadow-lg lg:hidden">
          <li>
            <Link
              href="/"
              className="text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/champions"
              className="text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Champion List
            </Link>
          </li>
          <li>
            <Link
              href="/items"
              className="text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Item List
            </Link>
          </li>
          <li>
            <Link
              href="/rotation"
              className="text-xl font-bold transition-transform transform hover:scale-110 hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Champion Rotation
            </Link>
          </li>
          <li>
            <ThemeToggle></ThemeToggle>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
