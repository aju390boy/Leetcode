/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let frq=text.split('').reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1;
        return acc;
    },{})

    let bcount=frq['b'] || 0;
    let acount=frq['a'] || 0;
    let ncount=frq['n'] || 0;
    let ocount=frq['o']/2 || 0;
    let lcount=frq['l']/2 || 0;

    return Math.floor(Math.min(bcount,acount,ncount,lcount,ocount))

};