"use client";
import { useEffect, useState } from "react";
import SlotPercentage from "@/app/components/SlotPercentage";

function parseOpenAIResult(content: string) {
    const scoreMatch = content.match(/총점:\s*(\d+\.?\d*)점/);
    const totalScore = scoreMatch ? Number(scoreMatch[1]) : 0;

    const kpiMatches = [...content.matchAll(/- (.+?):\s*(\d+)점 → (.+)/g)];
    const kpis = kpiMatches.map((m) => ({
        name: m[1],
        reason: m[3],
    }));

    const opinionMatch = content.match(/추가 의견:\s*([\s\S]*)/);
    const overallOpinion = opinionMatch ? opinionMatch[1].trim() : "";

    return { totalScore, kpis, overallOpinion };
}

export default function ResultPage() {
    const [totalScore, setTotalScore] = useState(0);
    const [kpis, setKpis] = useState<{ name: string; reason: string }[]>([]);
    const [overallOpinion, setOverallOpinion] = useState("");

    useEffect(() => {
        const rawResult = localStorage.getItem("policy_result");

        if (rawResult) {
            const { totalScore, kpis, overallOpinion } = parseOpenAIResult(rawResult);
            setTotalScore(totalScore);
            setKpis(kpis);
            setOverallOpinion(overallOpinion);
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

                    <SlotPercentage finalValue={Math.round(totalScore)} />

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-800">주요 성과 지표 (KPI)</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                각 지표별 평가 내용입니다.
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
                                        평가 내용
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

                    {overallOpinion && (
                        <div className="bg-white rounded-xl shadow-lg mt-6 p-6">
                            <h3 className="text-xl font-bold text-slate-800">총평</h3>
                            <p className="mt-2 text-slate-700 whitespace-pre-line">{overallOpinion}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
