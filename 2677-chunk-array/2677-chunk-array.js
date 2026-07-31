/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunks=[];
    let index=0;

    while(index< arr.length){
        chunks.push(arr.slice(index,size+index));
        index+=size
    }
    return chunks
    
};
