console.log("start");

setTimeout(()=>{
    console.log("setTimeOut");
})

Promise.resolve().then(()=>{
    console.log("Promise");
})

console.log("end");