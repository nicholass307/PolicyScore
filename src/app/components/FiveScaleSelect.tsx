"use client";

import * as Slider from "@radix-ui/react-slider";
import { useId, useEffect, useState } from "react";

type Props = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const pastelColors: Record<number, string> = {
    1: "#fecaca", // red-200
    2: "#fdba74", // orange-200
    3: "#fde68a", // yellow-200
    4: "#bbf7d0", // green-200
    5: "#bfdbfe", // blue-200
};

export default function FiveScaleSlider({ label, value, onChange }: Props) {
    const id = useId();
    const [animValue, setAnimValue] = useState(value);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setAnimValue(value);
        });
        return () => cancelAnimationFrame(frame);
    }, [value]);

    const color = pastelColors[animValue] || "#e5e7eb";
    const fillWidth = `${((animValue - 1) / 4) * 100}%`;

    return (
        <div className="w-full mb-6">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-[var(--text-primary)] mb-2"
            >
                {label}
            </label>

            <Slider.Root
                id={id}
                className="relative flex items-center select-none touch-none w-full h-6"
                min={1}
                max={5}
                step={1}
                value={[value]}
                onValueChange={(v) => onChange(v[0])}
            >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-2 overflow-hidden">
                    <Slider.Range
                        className="absolute h-full rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            width: fillWidth,
                            backgroundColor: color,
                        }}
                    />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-out hover:scale-110 focus:outline-none"
                    aria-label="Value"
                />
            </Slider.Root>

            <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-2">
                <span>매우 아니다</span>
                <span>아니다</span>
                <span>보통이다</span>
                <span>그렇다</span>
                <span>매우 그렇다</span>
            </div>
        </div>
    );
}
