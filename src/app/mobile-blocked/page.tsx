"use client";

import Image from "next/image";
import { useState } from "react";
import { MdDevices } from "react-icons/md";

export default function MobileBlockedPage() {
    const [copiedMessage, setCopiedMessage] = useState("");

    const copyToClipboard = (email: string) => {
        navigator.clipboard.writeText(email);
        setCopiedMessage(`${email} 복사되었습니다`);
        setTimeout(() => setCopiedMessage(""), 3000);
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md text-center bg-white p-8 rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)]">
                <div className="flex justify-center mb-6">
                    <MdDevices className="text-[#1070cf]" size={50} />
                </div>
                <h1 className="text-2xl font-bold text-[#1e293b] mb-3">
                    PC 환경에 최적화되어 있습니다
                </h1>
                <p className="text-[#64748b] mb-8">
                    원활한 서비스 이용을 위해 PC 환경에서 접속해주세요.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-8">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06r16tefDBS_KfchyX7GThWymETm8ivsx_r9UOkYjdXyVIuQUJ69vPi7t7EIapFRQFBll46Kq5Jfhe0wNDSmDxrzMis-J0aqI6GzLd7qsSB0X0sq2ee7YFPlhGGOChzRiANxgI0Ec_tmrViKvvAf6aA5lORSVDz-krQ3FjvLd6CfidfIc5doK2_QLNz8e-wCBHVnnS2l21MmhrOE4Iw5qqfLjT0K0F7aHSOaCZUvgtdElIP3wOc3vHVwfPPJnoW3GbQlx0vSvBw"
                        alt="PC 화면 예시"
                        className="rounded-md shadow-md w-full h-auto"
                        width={400}
                        height={250}
                    />
                </div>
                <div className="text-sm text-[#64748b]">
                    <p className="mb-2">학생회 공약 이행률 추적 웹사이트</p>
                    <p>
                        문의:{" "}
                        <button
                            onClick={() => copyToClipboard("manner0814@sjhansol.sjeduhs.kr")}
                            className="text-[#1070cf] hover:underline"
                        >
                            manner0814@sjhansol.sjeduhs.kr
                        </button>
                    </p>
                </div>
            </div>
            {copiedMessage && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slideUp">
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
        </div>
    );
}
