function fibonachi(num) {
    const result = [0,1];

    for(let i=2; i <= num; i++) {

        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }

    return result[num];

}

console.log(fibonachi(1))
console.log(fibonachi(2))
console.log(fibonachi(3))
console.log(fibonachi(4))
console.log(fibonachi(5))
console.log(fibonachi(6))
console.log(fibonachi(7))