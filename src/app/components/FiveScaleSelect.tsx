"use client";

import * as Slider from "@radix-ui/react-slider";
import { useId, useState } from "react";
import PopupGuide from "./PopupGuide";

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

export default function FiveScaleSelect({ label, value, onChange }: Props) {
    const id = useId();
    const color = interpolateColor(value);
    const fillWidth = `${((value - 1) / 4) * 100}%`;
    const [showGuide, setShowGuide] = useState(false);

    const getPopupContent = () => {
        if (label === "학교측 승인률") {
            return {
                title: "학교측 승인률",
                descriptions: [
                    "미협의",
                    "학생부와 초기 논의 시작",
                    "학생부 승인",
                    "담당 부서 또는 학년부(부장 교사) 승인",
                    "교장/교감 선생님 승인"
                ]
            };
        }
        if (label === "공약 기획 충실도") {
            return {
                title: "공약 기획 충실도",
                descriptions: [
                    "공약에 대한 기획안이 없거나 100자 미만인 경우.",
                    "100자 이상 기획안에 실행 방법 또는 기대 효과 중 하나 포함.",
                    "200자 이상 기획안에 실행 방법과 기대 효과 포함.",
                    "300자 이상 기획안에 실행 방법, 기대 효과, 협의 여부 또는 예산 계획 포함.",
                    "400자 이상 기획안에 실행 방법, 기대 효과, 협의 여부, 예산 계획 모두 구체적으로 포함."
                ]
            };
        }
        if (label === "수혜 학년 형평성") {
            return {
                title: "수혜 학년 형평성",
                descriptions: [
                    "학년 단위가 아닌 소수의 학생",
                    " 1개 학년 대상",
                    "2개 학년 대상",
                    "3개 학년 대상",
                    "학교 전체의 참여 기대(필수 참여 등)"
                ]
            };
        }
        return {
            title: label,
            descriptions: ["", "", "", "", ""],
        };
    };

    const popup = getPopupContent();

    return (
        <div className="w-full mb-6 relative">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor={id} className="text-sm font-medium text-[var(--text-primary)]">
                    {label}
                </label>
                <button
                    onClick={() => setShowGuide(true)}
                    className="text-gray-400 hover:text-black text-sm"
                    type="button"
                >
                    ?
                </button>
            </div>

            <Slider.Root
                id={id}
                className="relative flex items-center select-none touch-none w-full h-6"
                min={1}
                max={5}
                step={0.01}
                value={[value]}
                onValueChange={(val) => onChange(val[0])}
                onValueCommit={(val) => onChange(Math.round(val[0]))}
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

            {showGuide && (
                <PopupGuide
                    title={popup.title}
                    descriptions={popup.descriptions}
                    onClose={() => setShowGuide(false)}
                />
            )}
        </div>
    );
}
