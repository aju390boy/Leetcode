/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result=nums.reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1;
        return acc;
    },{});
    let mejority=Object.keys(result).reduce((acc,val)=>{
        if(result[val]<result[acc]){
            val=acc;
        }
        return val;
    })
    return Number(mejority);
    
};