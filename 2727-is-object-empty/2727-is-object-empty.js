/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(JSON.stringify(obj).length<1 || Object.keys(obj).length==0){
        return true;
    }else{
        return false;
    }
    
};