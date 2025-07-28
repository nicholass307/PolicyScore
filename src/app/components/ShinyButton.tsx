"use client";
import { useRef, useState } from "react";

export default function ShinyButton() {
    const shineRef = useRef<HTMLSpanElement>(null);
    const [animClass, setAnimClass] = useState("");

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

    return (
        <a
            href="#"
            className="relative overflow-hidden group inline-block min-w-[150px] cursor-pointer rounded-lg h-14 px-8 text-white text-lg font-bold tracking-wide transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#308ce8" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
      <span className="flex items-center justify-center h-full z-10 relative">
        시작하기
      </span>
            <span ref={shineRef} className={`shine-mask ${animClass}`} />
        </a>
    );
}
