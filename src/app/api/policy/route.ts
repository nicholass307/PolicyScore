import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const {
        pledgeName,
        pledgeDescription,
        approvalRate,
        planningIntegrity,
        gradeEquity,
        resourceReadiness,
        budgetScore
    } = body;

    const content = `공약: ${pledgeName}\n설명: ${pledgeDescription}\n\n- 승인율: ${approvalRate}\n- 자원준비: ${resourceReadiness}\n- 형평성: ${gradeEquity}\n- 기획충실: ${planningIntegrity}\n- 예산적정: ${budgetScore}\n`;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "ft:gpt-4.1-mini-2025-04-14:personal:policyscore-v2:BywcdrpJ",
                messages: [
                    {
                        role: "user",
                        content,
                    },
                ],
                max_tokens: 2048,
                temperature: 0.5,
            }),
        });

        const data = await response.json();

        console.log("OpenAI API 응답:", JSON.stringify(data, null, 2));

        return NextResponse.json(data);
    } catch (error) {
        console.error("OpenAI API 오류:", error);
        return NextResponse.json({ error: "OpenAI API 호출 실패" }, { status: 500 });
    }
}
