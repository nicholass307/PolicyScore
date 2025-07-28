"use client";

import { AnimatePresence, motion } from "framer-motion";

type PopupGuideProps = {
    title: string;
    descriptions: string[];
    onClose: () => void;
};

const levels = [
    { level: 1, label: "매우 낮음", bg: "#fee2e2", text: "#b91c1c" },
    { level: 2, label: "낮음", bg: "#ffedd5", text: "#c2410c" },
    { level: 3, label: "보통", bg: "#fef9c3", text: "#a16207" },
    { level: 4, label: "높음", bg: "#dcfce7", text: "#15803d" },
    { level: 5, label: "매우 높음", bg: "#dbeafe", text: "#1e40af" },
];

export default function PopupGuide({ title, descriptions, onClose }: PopupGuideProps) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="bg-white rounded-xl shadow-xl w-full max-w-lg"
                    initial={{ scale: 0.9, y: 30, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 30, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{title}</h2>

                        <div className="space-y-4 text-gray-600">
                            {levels.map((item, idx) => (
                                <div key={item.level} className="flex items-start">
                                    <div className="flex-shrink-0 w-12 text-center">
                    <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full font-bold"
                        style={{ backgroundColor: item.bg, color: item.text }}
                    >
                      {item.level}
                    </span>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-800">{item.label}</h3>
                                        <p className="text-sm text-gray-600">{descriptions[idx]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition"
                                onClick={onClose}
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
