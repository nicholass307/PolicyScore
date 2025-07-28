"use client";
import React, { useState } from "react";
import FiveScaleSelect from "../components/FiveScaleSelect";

export default function PledgeFormPage() {
    const [approvalRate, setApprovalRate] = useState<number>(3);
    const [planningIntegrity, setPlanningIntegrity] = useState<number>(3);
    const [gradeEquity, setGradeEquity] = useState<number>(3);
    const [totalBudget, setTotalBudget] = useState<string>("");
    const [requiredBudget, setRequiredBudget] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            approvalRate,
            planningIntegrity,
            gradeEquity,
            totalBudget: Number(totalBudget),
            requiredBudget: Number(requiredBudget),
        };
        console.log("제출된 평가 입력값:", data);
    };

    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-8">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-[var(--text-primary)]">
                        공약 평가 입력
                    </h2>
                    <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
                        5점 척도 및 예산 정보를 입력해주세요.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-[#0c7ff2] hover:bg-[#0a6fce] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c7ff2] transition-all duration-300"
                        >
                            저장하기
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
