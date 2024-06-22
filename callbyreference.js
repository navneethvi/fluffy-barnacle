
function Mutate(obj){
    obj.name = "Pegpilot"
    console.log(`The object inside the function : ${obj.name}`);
}

let myObj = {name : "Navaneeth V"}

Mutate(myObj)

console.log(`The object outside the function : ${myObj.name}`);