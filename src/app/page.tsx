import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 text-gray-800">
        <main className="w-full max-w-4xl px-4 py-8">
          <HeroSection />

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              학생회 공약 이행 현황을 투명하게 추적하고, 여러분의 목소리가 학교에 전달되는 과정을 직접 확인하세요. 더 나은 캠퍼스를 위한 여정에 함께해주세요.
            </p>

            <a
                href="#"
                className="inline-block min-w-[150px] cursor-pointer rounded-lg h-14 px-8 text-white text-lg font-bold tracking-wide transition-transform duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundColor: "#308ce8" }}
            >
              <span className="flex items-center justify-center h-full">시작하기</span>
            </a>
          </div>
        </main>
      </div>
  );
}
