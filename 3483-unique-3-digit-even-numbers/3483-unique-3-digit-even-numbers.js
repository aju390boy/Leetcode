/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let count = 0;
    
    // 1. Build a frequency map of the available digits
    let freqMap = new Array(10).fill(0);
    for (let i = 0; i < digits.length; i++) {
        freqMap[digits[i]]++;
    }
    
    // 2. Loop strictly through all possible valid 3-digit even numbers
    for (let num = 100; num <= 998; num += 2) {
        // Extract individual digits using math (O(1) space)
        let ones = num % 10;
        let tens = Math.floor(num / 10) % 10;
        let hundreds = Math.floor(num / 100);
        
        // Count how many of each digit this specific number needs
        let requiredFreq = new Array(10).fill(0);
        requiredFreq[hundreds]++;
        requiredFreq[tens]++;
        requiredFreq[ones]++;
        
        // 3. Check if our available digits can satisfy the requirement
        if (
            freqMap[hundreds] >= requiredFreq[hundreds] &&
            freqMap[tens] >= requiredFreq[tens] &&
            freqMap[ones] >= requiredFreq[ones]
        ) {
            count++;
        }
    }
    
    return count;
};