const names = ["Ananthu", "Navaneeth", "Abhi", "Mohan"]

const mapped = names.map((name)=>{
    return name+ ' NV'
})

console.log(mapped)


const nums = [1,2,3,4,5]

const double = nums.map(num=> num*2)

console.log(double);

const higherThanFive = double.map(d=> d > 5 ? d : 0)


console.log(higherThanFive);