function solution(n)
{
    let sum = 0;
    
    const arrStr = n.toString();
    const arrSpread = [...arrStr];
    
    for (let i = 0; i < arrSpread.length; i++) {
        sum += Number(arrSpread[i]);
    }
    return sum;
}