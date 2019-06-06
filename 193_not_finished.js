//=============================
// Couldn't get it fast enough.
//=============================

function isSquareFree(n) {
    let threshold = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= threshold; i++) {
        if (n % (i*i) == 0) {
            return false;
        }
    }
    return true;
}

function answer(n) {
    let result = 3;

    for (let i = 4; i < n; i++) {
        if (isSquareFree(i)) {
            result++;
        }
    }
    return result;
}