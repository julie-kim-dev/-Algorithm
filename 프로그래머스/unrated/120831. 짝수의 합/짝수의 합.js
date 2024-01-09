// 1
function solution(n) {
    let answer = 0;
    for ( let i = 0; i <= n; i++) {
        if ( i % 2 === 0) {
            answer += i;
        }
    }
    return answer;
}


// 2
function solution(n) {
    let answer = 0;
    for ( i = 2; i <= n; i += 2) {
        answer += i;
    }
    return answer;
}
