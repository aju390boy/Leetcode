/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let word = s.split(' ');
    if(word.length!==pattern.length) return false;
    let cap = new Map();
    let map = new Map();
    for(let i=0;i<word.length;i++){
        if(map.has(pattern[i])){
            let r=map.get(pattern[i]);
            if(r!==word[i]) return false;
        }else{
            if(!cap.has(word[i])){
              map.set(pattern[i],word[i]);
              cap.set(word[i],pattern[i]);
            }else{
                let t=cap.get(word[i]);
                if(t!==pattern[i]) return false;
            }
           

        }
    }
    return true;
};