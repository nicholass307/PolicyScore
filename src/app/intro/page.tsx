export default function IntroPage() {
    return (
        <main className="flex-grow">
            <div className="relative h-96">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('images/campus.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                        학생회 소개
                    </h1>
                    <p className="text-xl md:text-2xl font-light">
                        한솔고등학교 제13대 학생회 ‘새솔’은 책임 있는 약속, 투명한 자치, 모두가 함께 만들어가는 학교를 지향합니다.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                            <p className="text-xl">
                                저희는 실천 가능하고 지속 가능한 공약을 고민하는 학생자치를 실현하고자 끊임없이 노력하였습니다.
                                공약은 단순한 선거의 수단이 아니라, 학생들의 생활에 직접적으로 닿는 변화의 시작이라 믿기에,
                                ‘새솔’은 실현 가능한 공약을 고민하고,
                                모두가 체감할 수 있는 변화로 이어지는 학생자치의 선두주자가 되고자 합니다.
                            </p>
                            <p className="text-xl">
                                한솔고는 다양한 학교 공동체 구성원이 협력하는 교육 환경 속에서 학생 자치의 자율성과 책임을 존중하고 키워왔습니다.
                                그런 환경 속에서 ‘새솔’은 세종시 내 여러 고등학교의 공약 데이터를 기반으로
                                공약의 실현 가능성을 과학적으로 분석하고 평가하는 웹 기반 시스템을 직접 기획·개발하게 되었습니다.
                                AI 기술과 통계 분석을 접목한 이번 프로젝트는 책임 있는 학생자치를 향한 진지한 고민과 행동의 산물입니다.
                            </p>
                            <p className="text-xl">
                                학생 한 사람, 한 사람의 목소리가 실제 변화로 이어지기를 바라는
                                저희의 바람이 본 프로그램을 통해 미래의 학생들에게 전해졌으면 합니다.
                                한솔고등학교 학생회 '새솔'의 이 도전에 따뜻한 관심과 응원을 부탁드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
