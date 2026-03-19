/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1=0;
    let num2=0;

    for(i=1;i<=n;i++){
        if(i%m==0){
            num1+=i;
        }else{
            num2+=i;
        }
    }
    console.log(`num1 ${num1}`);
        console.log(`num2 ${num2}`)


    return num2-num1
    
};