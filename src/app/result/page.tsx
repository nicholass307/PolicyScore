"use client";
import { useEffect, useState } from "react";
import SlotPercentage from "@/app/components/SlotPercentage";
import ResetButton from "@/app/components/ResetButton";
const KPI_LABELS: Record<string, string> = {
    participation: "재참여 의향",
    satisfaction: "만족도",
    feasibility: "일정 타당성",
    accessibility: "정보 접근성",
};

export default function ResultPage() {
    const [totalScore, setTotalScore] = useState(0);
    const [kpis, setKpis] = useState<
        { name: string; score?: number; reason: string; recommendation: string }[]
    >([]);
    const [overallOpinion, setOverallOpinion] = useState("");

    useEffect(() => {
        const rawResult = localStorage.getItem("policy_result");

        if (rawResult) {
            try {
                const parsed = JSON.parse(rawResult);

                setTotalScore(Math.round(parsed.final_score || 0));

                const kpiItems: {
                    name: string;
                    score?: number;
                    reason: string;
                    recommendation: string;
                }[] = [];

                const feedback = parsed.feedback || {};
                const scores = parsed.predicted_kpis_by_GPT || {};

                for (const key of Object.keys(KPI_LABELS)) {
                    const label = KPI_LABELS[key] || key;
                    const reason = feedback[key]?.reason || "";
                    const recommendation = feedback[key]?.recommendation || "";
                    const score = scores[key];

                    kpiItems.push({ name: label, reason, recommendation, score });
                }

                setKpis(kpiItems);
                setOverallOpinion(parsed.overall_review || "");
            } catch (error) {
                console.error("결과 JSON 파싱 오류:", error);
            }
        }
    }, []);

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

                    <SlotPercentage finalValue={totalScore} />

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-800">
                                주요 성과 지표 (KPI)
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                각 지표별 점수, 평가 내용 및 개선 추천입니다.
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
                                        점수
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        평가 및 추천
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
                                            {kpi.score ?? "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-pre-line text-sm text-slate-600">
                                            {`${kpi.reason}\n${kpi.recommendation}`}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {overallOpinion && (
                        <div className="bg-white rounded-xl shadow-lg mt-6 p-6">
                            <h3 className="text-xl font-bold text-slate-800">총평</h3>
                            <p className="mt-2 text-slate-700 whitespace-pre-line">
                                {overallOpinion}
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex justify-center mt-6">
                    <ResetButton />
                </div>
            </main>
        </div>
    );
}
