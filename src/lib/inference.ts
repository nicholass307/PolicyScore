import fs from "fs";
import path from "path";

let cptData: any = null;

export async function loadCPT() {
    if (!cptData) {
        const filePath = path.join(process.cwd(), "public", "bayes_model.json");
        const data = fs.readFileSync(filePath, "utf-8");
        cptData = JSON.parse(data);
    }
    return cptData;
}

function getMostProbableState(stateProbs: Record<string, number>): string {
    return Object.entries(stateProbs).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

function findClosestCPTKey(
    cpt: Record<string, any>,
    inputValues: string[]
): string {
    let closestKey = "";
    let minDistance = Infinity;
    for (const key of Object.keys(cpt)) {
        const parts = key.split(",");
        let distance = 0;
        for (let i = 0; i < parts.length; i++) {
            distance += Math.abs(Number(parts[i]) - Number(inputValues[i] || 0));
        }
        if (distance < minDistance) {
            minDistance = distance;
            closestKey = key;
        }
    }
    return closestKey;
}

export async function predictOutcome(inputs: Record<string, string>) {
    const cpt = await loadCPT();
    const evidence = { ...inputs };

    const prepNode = cpt["공약준비도"];
    const parentValues = prepNode.parents.map((p: string) => evidence[p] || "1");

    let prepCPT = prepNode.cpt[parentValues.join(",")];
    if (!prepCPT) {
        const closestKey = findClosestCPTKey(prepNode.cpt, parentValues);
        console.warn("🔄 CPT key fallback (근접값 사용):", closestKey);
        prepCPT = prepNode.cpt[closestKey];
    }

    const prepState = getMostProbableState(prepCPT);
    const results: Record<string, string> = {};

    for (const metric of ["참여의향", "만족도", "일정타당성", "정보접근성"]) {
        const node = cpt[metric];
        let metricCPT = node.cpt[prepState];
        if (!metricCPT) {
            const closestKey = findClosestCPTKey(node.cpt, [prepState]);
            console.warn(`🔄 ${metric} CPT fallback:`, closestKey);
            metricCPT = node.cpt[closestKey];
        }
        results[metric] = getMostProbableState(metricCPT);
    }

    return results;
}
