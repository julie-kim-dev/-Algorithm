function solution(arr) {
    let arrLength = arr.length;
    let sum = 0;
    for (let i = 0; i < arrLength; i++) {
        sum += arr[i];
    }
    let answer = sum / arrLength;
    return answer;
}