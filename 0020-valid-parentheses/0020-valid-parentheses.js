/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let x=[];
    const obj = {'[':']','{':'}','(':')'};
    for(let val of s){
       if(obj[val]){
        x.push(obj[val])
       }else{
        let m=x.pop()
        if(m!=val) return false;
       }
    }
    return x.length===0;
    
};