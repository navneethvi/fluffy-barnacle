const numbers = [1,2,3,4,5]

numbers.forEach((num, index, arr)=> arr[index] = num * 2) // this will mutate the numvbers array

console.log(numbers);

