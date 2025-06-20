"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const confettiRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // @ts-expect-error: No types for canvas-confetti
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      if (confettiRef.current) {
        const myConfetti = confetti.create(confettiRef.current, { resize: true, useWorker: true });
        myConfetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#F472B6", "#A78BFA", "#FDE68A", "#F87171", "#34D399"],
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-4 relative overflow-hidden">
      <canvas
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-30"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col items-center max-w-lg w-full border-4 border-pink-200 relative">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl animate-bounce">🎉</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-500 mb-2 text-center drop-shadow-lg">Happy Birthday!</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-600 mb-4 text-center">Wishing you a day full of joy and surprises!</h2>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-6">
          May your year ahead sparkle with happiness, laughter, and all your favorite things. You deserve the best today and always!
        </p>
        <div className="flex gap-2 text-3xl mb-4">
          <span role="img" aria-label="party popper">🎊</span>
          <span role="img" aria-label="party popper">🎉</span>
          <span role="img" aria-label="party popper">🥳</span>
        </div>
        <div className="w-24 h-24 mt-2 mb-2">
          <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="48" fill="#FDE68A"/>
            <path d="M48 20v36" stroke="#F472B6" strokeWidth="4" strokeLinecap="round"/>
            <path d="M48 56c-8 0-8 8-16 8s-8-8-16-8" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round"/>
            <path d="M48 56c8 0 8 8 16 8s8-8 16-8" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="48" cy="64" r="4" fill="#F472B6"/>
          </svg>
        </div>
        <p className="text-md text-gray-500 text-center">With lots of love from your friend 💖</p>
      </div>
    </div>
  );
}
