"use client";
import { useState } from "react";

export default function Footer() {
    const [copiedMessage, setCopiedMessage] = useState("");

    const copyToClipboard = (email: string) => {
        navigator.clipboard.writeText(email);
        setCopiedMessage(`${email} 복사되었습니다`);
        setTimeout(() => setCopiedMessage(""), 3000);
    };

    return (
        <footer className="bg-gray-50 text-gray-800 relative">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://sjhansol.sjeduhs.kr"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    className="max-h-15 w-auto object-contain"
                                    src="/images/logo.png"
                                    alt="한솔고등학교 로고"
                                />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            세종특별자치시 누리로 34(한솔동)
                            <br/>
                            연락처: 044-410-4111
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <a
                                href="https://www.instagram.com/hansolhs_official/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="h-6 w-6 text-gray-500 hover:text-pink-500 transition-colors"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
                                    <path
                                        d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                                    학생회
                                </h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        <a className="text-gray-600 hover:text-blue-600" href="/intro">
                                            학생회 소개 페이지
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-gray-600">전교 회장: 손채원</span>
                                    </li>
                                    <li>
                                        <span className="text-gray-600">전교 부회장: 박주영, 박민찬</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                                    개발
                                </h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <span>추희도</span>
                                            <a
                                                href="https://github.com/Monkshark"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-gray-500 hover:text-gray-900 transition-colors"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.877-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                                </svg>
                                            </a>
                                            <button
                                                onClick={() => copyToClipboard("manner0814@sjhansol.sjeduhs.kr")}
                                            >
                                                <svg
                                                    className="h-5 w-5 text-gray-500 hover:text-blue-500 transition-colors"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm0 2.99V20h16V6.99l-8 8-8-8z"/>
                                                </svg>
                                            </button>
                                            <a
                                                href="https://www.instagram.com/void___main"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    className="h-6.5 w-6.5 text-gray-500 hover:text-pink-500 transition-colors"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
                                                    <path
                                                        d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <span>김선우</span>
                                            <a
                                                href="https://github.com/nicholass307"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-gray-500 hover:text-gray-900 transition-colors"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.877-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                                </svg>
                                            </a>
                                            <button onClick={() => copyToClipboard("nnicholass@daum.net")}>
                                                <svg
                                                    className="h-5 w-5 text-gray-500 hover:text-blue-500 transition-colors"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm0 2.99V20h16V6.99l-8 8-8-8z"/>
                                                </svg>
                                            </button>
                                            <a
                                                href="https://www.instagram.com/ksunwoo7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    className="h-6.5 w-6.5 text-gray-500 hover:text-pink-500 transition-colors"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
                                                    <path
                                                        d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-l font-semibold uppercase tracking-wider text-gray-900">
                                    자료 제공
                                </h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <div className="flex items-center">
                                        <a
                                            href="https://bangok.sjeduhs.kr/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <img
                                                className="max-h-15 w-auto object-contain"
                                                src="/images/logo_bangok.png"
                                                alt="반곡고등학교 로고"
                                            />
                                        </a>
                                    </div>

                                    <div className="flex items-center">
                                        <a
                                            href="https://saerom.sjeduhs.kr"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <img
                                                className="max-h-15 w-auto object-contain"
                                                src="/images/logo_saerom.png"
                                                alt="새롬고등학교 로고"
                                            />
                                        </a>
                                    </div>

                                    <div className="flex items-center">
                                        <a
                                            href="https://sejong.sjeduhs.kr"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <img
                                                className="max-h-15 w-auto object-contain"
                                                src="/images/logo_sejong.png"
                                                alt="세종고등학교 로고"
                                            />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2025 제 13대 학생회 &#39;새솔&#39;. All rights reserved.
                    </p>
                </div>
            </div>

            {copiedMessage && (
                <div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slideUp">
                    {copiedMessage}
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    20% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    80% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                }

                .animate-slideUp {
                    animation: slideUp 3s ease-in-out forwards;
                }
            `}</style>

        </footer>
    );
}
