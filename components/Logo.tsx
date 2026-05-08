"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="koeschu.com Logo"
      >
        <path
          d="M20 2 L38 20 L20 38 L2 20 Z"
          fill="none"
          stroke="#e8881a"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="7" fill="#e8881a" />
      </svg>
      <span
        style={{ color: "#ffffff", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.04em" }}
      >
        koeschu.com
      </span>
    </Link>
  );
}
