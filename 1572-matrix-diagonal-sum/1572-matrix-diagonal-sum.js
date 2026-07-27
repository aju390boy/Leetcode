/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
     let sum = 0;
    let first = 0, last = mat.length - 1;

    for (let i = 0; i < mat.length; i++) {
        sum += (mat[i][first] + mat[i][last]);
        first++;
        last--;
    }

    if (mat.length % 2 === 1) sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];

    return sum;
};