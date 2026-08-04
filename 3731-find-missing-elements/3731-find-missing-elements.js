/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let uniq=nums.sort((a,b)=>a-b);
    let result=[];
    let value=[];
    for(let i=uniq[0];i<=uniq[uniq.length-1];i++){
        result.push(i);
    }
    for(let i=0;i<result.length;i++){
        if(!uniq.includes(result[i])){
             value.push(result[i])
        }
    }
    return value;
};