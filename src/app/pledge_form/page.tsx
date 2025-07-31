"use client";
import React, { useState } from "react";
import FiveScaleSelect from "../components/FiveScaleSelect";
import { useRouter } from "next/navigation";

export default function PledgeFormPage() {
    const router = useRouter();

    const [pledgeName, setPledgeName] = useState("");
    const [pledgeDescription, setPledgeDescription] = useState("");
    const [approvalRate, setApprovalRate] = useState(3);
    const [planningIntegrity, setPlanningIntegrity] = useState(3);
    const [gradeEquity, setGradeEquity] = useState(3);
    const [resourceReadiness, setResourceReadiness] = useState(3);
    const [totalBudget, setTotalBudget] = useState("");
    const [requiredBudget, setRequiredBudget] = useState("");
    const [loading, setLoading] = useState(false);

    const calculateBudgetScore = (total: number, required: number): number => {
        if (total <= 0 || required < 0) return 0;

        const percentage = (required / total) * 100;

        if (percentage >= 80) return 1;
        if (percentage >= 60) return 2;
        if (percentage >= 40) return 3;
        if (percentage >= 20) return 4;
        return 5;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const total = Number(totalBudget);
        const required = Number(requiredBudget);
        const budgetScore = calculateBudgetScore(total, required);

        const data = {
            pledgeName,
            pledgeDescription,
            approvalRate,
            planningIntegrity,
            gradeEquity,
            resourceReadiness,
            totalBudget: total,
            requiredBudget: required,
            budgetScore,
        };

        try {
            const res = await fetch("/api/policy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errText = await res.text();
                console.error("서버 오류:", errText);
                alert("API 요청 실패: " + errText);
                setLoading(false);
                return;
            }

            const resultData = await res.json();
            console.log("서버에서 받은 응답:", resultData);

            localStorage.setItem("policy_result", JSON.stringify(resultData));
            router.push("/result");
        } catch (error: any) {
            console.error("API 호출 오류:", error.message || error);
            alert("네트워크 오류: " + (error.message || "서버 연결 실패"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg text-slate-700 font-semibold">
                        공약 평가 중입니다...
                    </p>
                </div>
            ) : (
                <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-[var(--text-primary)]">
                            공약 평가 입력
                        </h2>
                        <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
                            공약 기본 정보와 5점 척도 및 예산 정보를 입력해주세요.
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                공약 이름
                            </label>
                            <input
                                type="text"
                                className="form-input-custom h-12 px-4"
                                value={pledgeName}
                                onChange={(e) => setPledgeName(e.target.value)}
                                placeholder="예: 도서관 좌석 20% 증설"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                공약 설명
                            </label>
                            <textarea
                                className="form-input-custom w-full h-24 px-4 py-2"
                                value={pledgeDescription}
                                onChange={(e) => setPledgeDescription(e.target.value)}
                                placeholder="공약의 상세 설명을 입력하세요."
                                required
                            />
                        </div>

                        <FiveScaleSelect
                            label="학교측 승인률"
                            value={approvalRate}
                            onChange={setApprovalRate}
                        />
                        <FiveScaleSelect
                            label="공약 기획 충실도"
                            value={planningIntegrity}
                            onChange={setPlanningIntegrity}
                        />
                        <FiveScaleSelect
                            label="수혜 학년 형평성"
                            value={gradeEquity}
                            onChange={setGradeEquity}
                        />
                        <FiveScaleSelect
                            label="자원 준비도"
                            value={resourceReadiness}
                            onChange={setResourceReadiness}
                        />

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                전체 예산 (만 원)
                            </label>
                            <input
                                type="number"
                                min={0}
                                className="form-input-custom h-12 px-4"
                                value={totalBudget}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    if (val >= 0 || e.target.value === "") {
                                        setTotalBudget(e.target.value);
                                    }
                                }}
                                placeholder="예: 300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                공약 이행 필요 예산 (만 원)
                            </label>
                            <input
                                type="number"
                                min={0}
                                className="form-input-custom h-12 px-4"
                                value={requiredBudget}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    if (val >= 0 || e.target.value === "") {
                                        setRequiredBudget(e.target.value);
                                    }
                                }}
                                placeholder="예: 120"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-[#0c7ff2] hover:bg-[#0a6fce] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c7ff2] transition-all duration-300"
                            >
                                평가 요청
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </main>
    );
}
