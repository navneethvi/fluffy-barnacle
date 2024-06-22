Promise.resolve().then(() => console.log("From Promise"));


const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        1==='1' ? resolve("Promise Resolved") : reject("Promise rejected")
    },3000)
})

p.then((res)=>console.log(res)).catch((err)=>console.log(err))

