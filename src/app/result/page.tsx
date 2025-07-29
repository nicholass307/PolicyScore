import SlotPercentage from "@/app/components/SlotPercentage";

export default function ResultPage() {
    const kpis = [
        { name: "학업 지원", reason: "튜터링 프로그램 학생 참여율 증가." },
        { name: "캠퍼스 생활 개선", reason: "새로운 휴게 공간 성공적 조성." },
        { name: "진로 개발", reason: "진로 워크숍 및 채용 박람회 높은 참석률." },
        { name: "학생 복지", reason: "정신 건강 지원 프로그램에 대한 긍정적 피드백." },
        { name: "소통 및 투명성", reason: "정기적인 업데이트 및 학생회와의 공개 포럼 개최." },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <main className="flex-1">
                <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            예상 이행률
                        </h2>
                        <p className="mt-4 text-lg text-slate-500">
                            현재 진행 상황과 데이터를 기반으로 예측된 공약 이행률입니다.
                        </p>
                    </div>

                    <SlotPercentage finalValue={Math.floor(Math.random() * 101)} />

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-800">주요 성과 지표 (KPI)</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                각 지표별 이행률 보완 사유입니다.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        KPI 지표
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        보완 사유
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                {kpis.map((kpi, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                                            {kpi.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                            {kpi.reason}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
