function solution(n) {
    const nArr = String(n).split("").sort((a, b) => b - a).join("");
    return Number(nArr);
}