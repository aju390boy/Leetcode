/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    let idx = -1;
    let n = nums.length;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    if (idx === -1) {
        reverse(0, n - 1);
        return;
    }

    reverse(idx + 1, n - 1);

    let newj = -1;
    for (let j = idx + 1; j < n; j++) {
        if (nums[idx] < nums[j]) {
            newj = j;
            break;
        }
    }

    [nums[idx], nums[newj]] = [nums[newj], nums[idx]];
};