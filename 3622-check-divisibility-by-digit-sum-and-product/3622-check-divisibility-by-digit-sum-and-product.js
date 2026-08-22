/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let s=n.toString()
    console.log(typeof s)
    let add=0;
    let mul=1;
    let total=0
    let m=0;
     console.log(s)
    
    for(let i = 0;i <s.length;i++){
        let d=Number(s[i])
        add+=d;
        mul*=d;
    }
    console.log(`add : ${add}`)
    console.log(`mul : ${mul}`)
total=mul+add;



console.log(total)

return n%total==0 
    
};