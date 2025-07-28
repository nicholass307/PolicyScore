import type { Metadata } from "next";
import { Noto_Sans_KR, Public_Sans } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-noto-sans-kr",
});

const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-public-sans",
});

export const metadata: Metadata = {
    title: "학생회 공약 이행률 추적",
    description: "공약 이행 상황을 시각적으로 확인하세요",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${notoSansKr.variable} ${publicSans.variable}`}>
        <body className="bg-gray-50 text-gray-800 font-sans">{children}</body>
        </html>
    );
}
