import HeroSection from "./components/HeroSection";
import ShinyButton from "@/app/components/ShinyButton";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 text-gray-800">
        <main className="w-full max-w-4xl px-4 py-8">
          <HeroSection />

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8">
                실제 세종시 관내 고등학교 학생회의 공약 데이터를 기반으로, <br/>공약의 실현가능성을 예측·분석하는 학생회 공약 평가 플랫폼입니다. <br/> 공약의 실행력을 사전에 검토함으로써, <br/> 보다 책임감 있는 학생자치 문화와 실효성 있는 공약 실현을 지원합니다.
            </p>

            <ShinyButton/>
          </div>
        </main>
      </div>
  );
}
