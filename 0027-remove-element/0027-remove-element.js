/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let low=0;
   for(let i=0;i<nums.length;i++){
    if(nums[i]!=val){
        nums[low]=nums[i];
        low++;
    }
   }
   console.log(nums)
   return low
    
};