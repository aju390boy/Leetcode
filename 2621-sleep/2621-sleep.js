/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((res,rej)=>{
setTimeout((sleep,millis)=>{
    let t = Date.now()
    res(Date.now() - t)
},millis)
 
    })

  
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */