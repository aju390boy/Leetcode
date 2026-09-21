/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function backtrack(row) {
        if (row === n) {
            res.push(board.map(r => r.join("")));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = 1; i <= Math.min(row, col); i++) {
            if (board[row - i][col - i] === 'Q') return false;
        }
        for (let i = 1; i <= Math.min(row, n - 1 - col); i++) {
            if (board[row - i][col + i] === 'Q') return false;
        }
        return true;
    }

    backtrack(0);
    return res;
};