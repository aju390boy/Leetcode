/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
     let n = s.length;
    let pref = Array.from({ length: n }, () => Array(2).fill(0));
    let zeros = 0;
    let ones = 0;
    let res = 0;

    for (let i = 0; i < n; i++) {
        pref[i][0] += pref[Math.max(i - 1, 0)][0];
        pref[i][1] += pref[Math.max(i - 1, 0)][1];

        if (s[i] === '0') {
            zeros++;
            pref[i][1] += ones;
            res += pref[i][0];
        }
        if (s[i] === '1') {
            ones++;
            pref[i][0] += zeros;
            res += pref[i][1];
        }
    }
    return res;
};