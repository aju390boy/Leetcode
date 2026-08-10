function countDigits(x: number): number {
    const abs = Math.trunc(Math.abs(x));

    // Math.log*(0) returns -Infinity
    if (abs === 0) return 1;

    return Math.trunc(Math.log10(abs) + 1);
}

function isPalindrome(x: number): boolean {
    // negatives will never be (e.g. -1 vs 1-)
    if (x < 0) return false;

    // 1-digit numbers
    if (x >= 0 && x <= 9) return true;

    const totalDigits = countDigits(x);
    let ref = x;
    
    for (let i = 1; i <= totalDigits; i += 2) {
        const l = Math.trunc(ref / Math.pow(10, totalDigits - i));
        const r = ref % 10;
        
        if (l !== r) return false;

        ref = Math.trunc(ref / 10);
        ref = ref % Math.pow(10, totalDigits - i - 1);
    }
    return true;
};