const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        1===1 ? resolve("Promise Resolved") : reject("Promise Rejected")
    },3000)
})

console.log("First");

const fn = async () => {
    console.log("Start");
    const p = await pr
    console.log("End");
}

fn()

console.log("Second");


setTimeout(()=>{
    console.log("From setTimeOut");
},1000)

// First
// Start
// Second
// From setTimeOut
// End