"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ShinyButton() {
    const shineRef = useRef<HTMLSpanElement>(null);
    const [animClass, setAnimClass] = useState("");
    const router = useRouter();

    const handleMouseEnter = () => {
        if (!shineRef.current) return;
        shineRef.current.classList.remove("shine-exit");
        void shineRef.current.offsetWidth;
        setAnimClass("shine-enter");
    };

    const handleMouseLeave = () => {
        if (!shineRef.current) return;
        shineRef.current.classList.remove("shine-enter");
        void shineRef.current.offsetWidth;
        setAnimClass("shine-exit");
    };

    const handleClick = () => {
        router.push("https://policy-score.vercel.app");
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden group inline-block min-w-[150px] cursor-pointer rounded-lg h-14 px-8 text-white text-lg font-bold tracking-wide transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#308ce8" }}
        >
      <span className="flex items-center justify-center h-full z-10 relative">
        다른 공약 평가하기
      </span>
            <span ref={shineRef} className={`shine-mask ${animClass}`} />
        </button>
    );
}
