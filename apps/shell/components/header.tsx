"use client";

import React, { KeyboardEvent } from "react";

export function Header() {
  const goHome = () => {
    window.location.href = "/";
  };

  const onKeyDown = (e: KeyboardEvent<HTMLHeadingElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goHome();
    }
  };

  return (
    <header className="w-full p-4 text-center">
      <h1
        role="button"
        tabIndex={0}
        onClick={goHome}
        onKeyDown={onKeyDown}
        className="text-2xl font-bold cursor-pointer inline-block"
        aria-label="Go to home page"
      >
        micro-store
      </h1>
    </header>
  );
}
