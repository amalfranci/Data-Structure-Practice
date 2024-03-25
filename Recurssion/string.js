function ReverseString(str)
{
    if (str === "" || str.length === 1)
    {
        return str
    }
    return str.slice(-1) + ReverseString(str.slice(0, -1))
    
}

console.log(ReverseString("amal"))