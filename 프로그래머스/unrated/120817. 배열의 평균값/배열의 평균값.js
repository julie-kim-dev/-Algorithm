function solution(numbers) {
    let count = numbers.length;
    let sum = 0;
    for ( let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    let agv = sum / count;
    return agv;
}