function find(num, total=0)
{
    if (num === 0)
    {
        return total
    }
   return find(num-1,total=total+num)
}

console.log(find(5))