"use client";

import { useEffect, useState } from "react";

const DIGIT_HEIGHT = 64;

type SlotDigitProps = {
    finalDigit: number;
    delay?: number;
    color: string;
    isSpinning: boolean;
};

const SlotDigit = ({ finalDigit, delay = 0, color, isSpinning }: SlotDigitProps) => {
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let spins = 0;
        const totalSpins = 20;
        let speed = 20;

        const timeout = setTimeout(() => {
            const spin = () => {
                setPosition((prev) => (prev + 1) % numbers.length);
                spins++;

                if (spins < totalSpins) {
                    speed += 5;
                    setTimeout(spin, speed);
                } else {
                    setPosition(finalDigit);
                }
            };
            spin();
        }, delay);

        return () => clearTimeout(timeout);
    }, [finalDigit, delay]);

    return (
        <div className="overflow-hidden mx-0" style={{ height: DIGIT_HEIGHT }}>
            <div
                className="flex flex-col transition-transform duration-100 ease-linear"
                style={{
                    transform: `translateY(-${position * DIGIT_HEIGHT}px)`,
                }}
            >
                {Array.from({ length: 30 }).map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            height: DIGIT_HEIGHT,
                            color: isSpinning ? "#9ca3af" : color,
                            transition: isSpinning ? "none" : "color 0.6s ease",
                        }}
                        className="flex items-center justify-center text-6xl font-extrabold leading-none"
                    >
            {numbers[idx % numbers.length]}
            </span>
                ))}
            </div>
        </div>
    );
};

type SlotPercentageProps = {
    finalValue: number;
};

const colorStops = [
    { percent: 0, r: 239, g: 68, b: 68 },
    { percent: 25, r: 249, g: 115, b: 22 },
    { percent: 50, r: 234, g: 179, b: 8 },
    { percent: 75, r: 34, g: 197, b: 94 },
    { percent: 100, r: 59, g: 130, b: 246 },
];

const getColorFromPercent = (percent: number) => {
    for (let i = 0; i < colorStops.length - 1; i++) {
        const start = colorStops[i];
        const end = colorStops[i + 1];

        if (percent >= start.percent && percent <= end.percent) {
            const t =
                (percent - start.percent) / (end.percent - start.percent);
            const r = Math.round(start.r + (end.r - start.r) * t);
            const g = Math.round(start.g + (end.g - start.g) * t);
            const b = Math.round(start.b + (end.b - start.b) * t);

            return `rgb(${r}, ${g}, ${b})`;
        }
    }
    return `rgb(${colorStops[colorStops.length - 1].r}, ${colorStops[colorStops.length - 1].g}, ${colorStops[colorStops.length - 1].b})`;
};

export default function SlotPercentage({ finalValue }: SlotPercentageProps) {
    const digits = finalValue.toString().split("").map((d) => parseInt(d, 10));
    const color = getColorFromPercent(finalValue);

    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        const totalDelay = 20 * 20 + digits.length * 150;
        const timeout = setTimeout(() => setIsSpinning(false), totalDelay);
        return () => clearTimeout(timeout);
    }, [digits.length]);

    return (
        <div className="flex items-end justify-center my-12 space-x-0 transition-colors duration-300 ease-in-out">
            {digits.map((digit, index) => (
                <div key={index} className="-mx-1">
                    <SlotDigit
                        finalDigit={digit}
                        delay={index * 150}
                        color={color}
                        isSpinning={isSpinning}
                    />
                </div>
            ))}
            <span
                className="text-5xl font-bold ml-1"
                style={{
                    color: isSpinning ? "#9ca3af" : color,
                    transition: isSpinning ? "none" : "color 0.6s ease",
                }}
            >
                %
            </span>
        </div>
    );
}
