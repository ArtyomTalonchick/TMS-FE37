// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     let current = n.toString();
//     const numbers = new Set([current]);
//     while (true) {
//         current = [...current].reduce((acc, item) => acc + (+item) ** 2, 0).toString();
//         if (current === "1") {
//             return true;
//         }
//         if (numbers.has(current)) {
//             return false;
//         }
//         numbers.add(current);
//     }
// };


// GPT1

// function isHappy(n) {
//     const seen = new Set();

//     while (n !== 1) {
//         let sum = 0;

        
//         for (let digit of n.toString().split('')) {
//         sum += digit * digit;
//         }

    
//         if (seen.has(sum)) {
//         return false;
//         }

//         seen.add(sum);
//         n = sum;
//     }

//     return true;
// } 



// GPT2

function isHappy(n) {
    let set = new Set();
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = sumOfSquaresOfDigits(n);
    }
    return n === 1;
}
  
function sumOfSquaresOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}