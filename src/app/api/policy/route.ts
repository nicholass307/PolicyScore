import OpenAI from "openai";
import { NextResponse } from "next/server";
import { predictOutcome } from "@/lib/inference";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const body = await req.json();

    const {
        pledgeName,
        pledgeDescription,
        approvalRate,
        planningIntegrity,
        gradeEquity,
        resourceReadiness,
        budgetScore,
    } = body;

    console.log("📥 API 요청 값:", {
        pledgeName,
        pledgeDescription,
        approvalRate,
        planningIntegrity,
        gradeEquity,
        resourceReadiness,
        budgetScore,
    });

    try {
        const bayesResult = await predictOutcome({
            승인율: String(approvalRate),
            자원준비: String(resourceReadiness),
            형평성: String(gradeEquity),
            기획충실: String(planningIntegrity),
            예산적정: String(budgetScore),
        });

        console.log("📊 베이지안 예측 결과:", bayesResult);

        const response = await openai.responses.create({
            model: "ft:gpt-4.1-mini-2025-04-14:personal:policyscore-v2:BywcdrpJ",
            prompt: {
                id: "pmpt_6889ef57d37c81979c9611eb958103ce02fe369cb2a980de",
                version: "31",
                variables: {
                    policy_name: String(pledgeName),
                    policy_info: String(pledgeDescription),
                    approval_rate: String(approvalRate),
                    resource_readiness: String(resourceReadiness),
                    fairness: String(gradeEquity),
                    planning_fidelity: String(planningIntegrity),
                    budget_appropriateness: String(budgetScore),
                    re_engagement_intent: String(bayesResult["참여의향"] ?? "3"),
                    satisfaction: String(bayesResult["만족도"] ?? "3"),
                    schedule_validity: String(bayesResult["일정타당성"] ?? "3"),
                    information_accessibility: String(bayesResult["정보접근성"] ?? "3"),
                },
            },
            text: { format: { type: "text" } },
            max_output_tokens: 2048,
            temperature: 0.5,
            store: true,
        });

        let rawText = "";
        if (
            response.output?.length &&
            (response.output[0] as any).content?.length
        ) {
            rawText = (response.output[0] as any).content[0].text;
        }

        let parsedResult;
        try {
            parsedResult = JSON.parse(rawText);
        } catch (e) {
            console.error("❌ JSON 파싱 실패, 원문 반환:", rawText);
            return NextResponse.json({ raw: rawText });
        }

        console.log("✅ 최종 GPT 응답:", parsedResult);

        return NextResponse.json(parsedResult);
    } catch (error: any) {
        console.error(
            "🚨 OpenAI API 오류 상세:",
            error.response?.data || error.message || error
        );
        return NextResponse.json(
            { error: "OpenAI API 호출 실패" },
            { status: 500 }
        );
    }
}
