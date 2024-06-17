const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number' 
        || firstNum < 0 || secondNum < 0
    ) return 'ERROR';
    if (firstNum > secondNum) {
        // swaps firstNum and secondNum
        firstNum = [secondNum, secondNum = firstNum][0];
    }
    let answer = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
