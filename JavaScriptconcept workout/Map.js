const calculator = {
    
    add: (a, b) => a + b,
    minus:(a,b)=> a-b
}

const myMap = new Map()

myMap.set(calculator.add, "this for add function")
myMap.set(calculator.minus, " this for minus function")

console.log(myMap)

function getDes(funname) {
    
    return myMap.get(funname)
}
console.log(getDes(calculator.minus))
console.log(getDes(calculator.add))