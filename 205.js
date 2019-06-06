function answer205() {
    let fourByNine = [];
    for (let i = 0; i <= 36; i++) {
        fourByNine.push(0);
    }

    let sixBySix = [];
    for (let i = 0; i <= 36; i++) {
        sixBySix.push(0);
    }

    // Ugly I know
    for (let a = 1; a <= 4; a++) {
        for (let b = 1; b <= 4; b++) {
            for (let c = 1; c <= 4; c++) {
                for (let d = 1; d <= 4; d++) {
                    for (let e = 1; e <= 4; e++) {
                        for (let f = 1; f <= 4; f++) {
                            for (let g = 1; g <= 4; g++) {
                                for (let h = 1; h <= 4; h++) {
                                    for (let i = 1; i <= 4; i++) {
                                        temp = a+b+c+d+e+f+g+h+i;
                                        fourByNine[temp]++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let a = 1; a <= 6; a++) {
        for (let b = 1; b <= 6; b++) {
            for (let c = 1; c <= 6; c++) {
                for (let d = 1; d <= 6; d++) {
                    for (let e = 1; e <= 6; e++) {
                        for (let f = 1; f <= 6; f++) {
                            temp = a+b+c+d+e+f;
                            sixBySix[temp]++;
                        }
                    }
                }
            }
        }
    }

    // Actual solution
    let wins = 0;
    for (let i = 0; i <= 36; i++) {
        for (let j = (i+1); j <= 36; j++) {
            wins += sixBySix[i] * fourByNine[j];
        }
    }

    let total = (4**9)*(6**6);
    return (wins/total).toFixed(7);
}