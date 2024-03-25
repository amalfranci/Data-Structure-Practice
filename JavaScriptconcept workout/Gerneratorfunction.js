function* generateSq()
{
    console.log("amal")
    yield 1;
    console.log('anand')
    yield 2;
    console.log("akhile")
    yield 3;

}

const seq = generateSq()

console.log(seq.next())
console.log(seq.next().value)