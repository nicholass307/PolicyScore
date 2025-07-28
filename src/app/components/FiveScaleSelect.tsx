"use client";

import * as Slider from "@radix-ui/react-slider";
import { useId } from "react";

type Props = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const pastelSteps = [
    { r: 252, g: 165, b: 165 }, // red-300
    { r: 253, g: 186, b: 116 }, // orange-300
    { r: 253, g: 224, b: 71 },  // yellow-300
    { r: 134, g: 239, b: 172 }, // green-300
    { r: 147, g: 197, b: 253 }, // blue-300
];

const interpolateColor = (val: number) => {
    const clamped = Math.min(Math.max(val, 1), 5);
    const low = Math.floor(clamped);
    const high = Math.ceil(clamped);
    const t = clamped - low;

    const start = pastelSteps[low - 1];
    const end = pastelSteps[high - 1];

    const r = Math.round(start.r + (end.r - start.r) * t);
    const g = Math.round(start.g + (end.g - start.g) * t);
    const b = Math.round(start.b + (end.b - start.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
};

export default function FiveScaleSlider({ label, value, onChange }: Props) {
    const id = useId();

    const color = interpolateColor(value);
    const fillWidth = `${((value - 1) / 4) * 100}%`;

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
                step={0.01}
                value={[value]}
                onValueChange={(val) => {
                    onChange(val[0]);
                }}
                onValueCommit={(val) => {
                    onChange(Math.round(val[0]));
                }}
            >

                <Slider.Track className="bg-gray-200 relative grow rounded-full h-2 overflow-hidden">
                    <Slider.Range
                        className="absolute h-full rounded-full"
                        style={{
                            width: fillWidth,
                            backgroundColor: color,
                            transition: "background-color 0.2s ease, width 0.1s ease",
                        }}
                    />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ease-out hover:scale-110 focus:outline-none"
                    aria-label="Value"
                />
            </Slider.Root>

            <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-2">
                <span>부정적</span>
                <span></span>
                <span></span>
                <span></span>
                <span>긍정적</span>
            </div>
        </div>
    );
}
