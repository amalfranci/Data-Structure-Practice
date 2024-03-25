function map(array, transformationFun)
{
    let result = []
    for (let element of array)
    {
        result.push(transformationFun(element))
    }
    return result
}

function Dounble(x)
{
    return x * 2
}

function Square(x)
{
    return x*x
}

let numbers = [4, 3, 5, 2]
let doubleArray = map(numbers, Dounble)
console.log(doubleArray)