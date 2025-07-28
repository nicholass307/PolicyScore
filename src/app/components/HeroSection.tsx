export default function HeroSection() {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
                src="/images/student-union-hero.png"
                alt="학생회 이미지"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center p-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                    학생의 힘으로, 약속을 현실로
                </h1>
            </div>
        </div>
    );
}
