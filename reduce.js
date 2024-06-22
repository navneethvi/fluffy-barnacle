const numbers = [1, 2, 3, 4, 50, 6, 4];
const names = ["Ananthu", "Navaneeth", "Abhi", "Mohan"];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

const max = numbers.reduce((max, curr) => (curr > max ? curr : max), 0);

console.log(max);

const largestString = names.reduce((largest, curr) => {
    if(largest.length < curr.length) {
        largest = curr
    }
    return largest
},"");

console.log(largestString);