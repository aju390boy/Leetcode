/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
     let result=[]
     let res=0;
    for(i=0;i<arr.length;i++){
        res=fn(arr[i],i)
        if(res){
        result.push(arr[i])
        }
    }
    return result
    
};