function applyopertion(operation, x, y)
{
    const result = operation(x, y)
    return result
}

function add(x, y)
{
    return x+y
}
function mul(x, y)
{
    return x*y
}

const sumRes = applyopertion(add, 10, 20)
console.log("sum" + sumRes)
const Multiplication = applyopertion(mul, 20, 10)
console.log("mul ",Multiplication)