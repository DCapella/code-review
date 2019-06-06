
//==========================
// First try AKA brute force
//==========================

// function noCF(n,d) {
//     if (n == 1) {
//         return true
//     } else if (!(d%n)) {
//         return false
//     }

//     let hcf = 1
//     for (let i = 2; i <= n/2; i++) {
//         if (!(n % i) && !(d % i)) {
//             return false
//         }
//     }
//     return true
// }

// function seventyTwo(threshold) {
//     let results = 0

//     for (let d = 2; d <= threshold; d++) {
//         for (let n = 1; n < threshold; n++) {
//             if (n < d && noCF(n, d)) {
//                 results++
//             }
//         }
//     }
//     return results
// }

//==========================
// Second Try
//==========================

// function etf(threshold) {
//     let numbers = [];

//     for (let i = 0; i < threshold; i++) {
//         numbers.push(true);
//     }
    
//     for (let i = 2; i <= threshold**0.5; i++) {
//         if (numbers[i]) {
//             for (let j = i*i; j <= threshold; j += i) {
//                 numbers[j] = false;
//             }
//         }
//     }
//     return numbers.lastIndexOf(true);
// }

// results = 0;
// for (let i = 1; i < 1000000; i++) {
//     results += etf(i);
// }


//==========================
// Solution
//==========================

function answer(threshold) {
    let numbers = [];
    for (let i = 0; i <= threshold; i++) {
        numbers.push(i);
    }

    let result = 0
    for (let i = 2; i <= threshold; i++) {
        if (numbers[i] == i) {
            for (let j = i; j <= threshold; j += i) {
                numbers[j] = numbers[j] / i * (i-1);
            }
        }
        result += numbers[i];
    }
    return result;
}

answer(1000000);