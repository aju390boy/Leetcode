/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    let t='';
    let start='';
    let end='';
    let rest='';

    for(let i=0;i<s.length;i++){
        if(s[i]===y){
            start+=s[i]
        }else if(s[i]===x){
            end+=s[i]
        }else{
         rest+=s[i]
        }
    }
    t+=start;
    t+=rest;
    t+=end;
    return t;
    
};