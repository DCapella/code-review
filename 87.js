function isPrime(n) {
    if (n == 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0) return false;

    const threshold = Math.sqrt(n);
    for (let i = 3; i <= threshold; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function getPrimes(n, power){
    let result = [];

    for (let i = 2; i**power <= n; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result;
}


function answer(n) {
    const primesSquared = getPrimes(n, 2);
    const primesCube = getPrimes(n, 3);
    const primesFour = getPrimes(n, 4);

    const thresholdI = primesSquared.length;
    const thresholdJ = primesCube.length;
    const thresholdK = primesFour.length;

    let result = 0;
    let finished = new Set();

    for (let i = 0; i < thresholdI; i++) {
        for (let j = 0; j < thresholdJ; j++) {
            for (let k = 0; k < thresholdK; k++) {
                let ppt = primesSquared[i]**2 + primesCube[j]**3 + primesFour[k]**4;
                if (ppt < n) {
                    if (!finished.has(ppt)) {
                        result++;
                        finished.add(ppt);
                    }
                }
            }
        }
    }
    return result;
}

// takes ~ 375 ms;