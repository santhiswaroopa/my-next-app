"use client";

import { useRef } from "react";

export default function ScrollPage() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollUp = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-black">
      {/* Top Section */}
      <div ref={topRef} className="h-screen flex flex-col items-center justify-center bg-blue-100">
        <h1 className="text-2xl font-bold mb-4">Top Section</h1>
        <button
          onClick={scrollDown}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Scroll Down ⬇️
        </button>
      </div>

      {/* Bottom Section */}
      <div ref={bottomRef} className="h-screen flex flex-col items-center justify-center bg-green-100">
        <h1 className="text-2xl font-bold mb-4">Bottom Section</h1>
        <button
          onClick={scrollUp}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Scroll Up ⬆️
        </button>
      </div>
    </div>
  );
}