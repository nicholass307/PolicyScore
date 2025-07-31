"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-800">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <div className="flex items-center space-x-3">
                            <img
                                alt="Instagram 로고"
                                className="max-h-15 w-auto object-contain"
                                src="/images/logo.png"
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            세종특별자치시 누리로 34(한솔동)
                            <br />
                            연락처: 044-410-4111
                        </p>
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
                                            학생회 소개
                                        </a>
                                    </li>
                                    <li>
                                    <span className="text-gray-600">회장: 손채원</span>
                                    </li>
                                    <li>
                                        <span className="text-gray-600">부회장: 박주영, 박민찬</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                                    개발
                                </h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                                            href="https://github.com/Monkshark"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>추희도</span>
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482
                          0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                          -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                          .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                          0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65
                          0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
                          c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027
                          .546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688
                          0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855
                          0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.48
                          A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                                            href="https://github.com/nicholass307"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>김선우</span>
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482
                          0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                          -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                          .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                          0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65
                          0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
                          c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027
                          .546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688
                          0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855
                          0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.48
                          A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2024 제 13대 학생회  &quot;새솔&quot;.  All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
