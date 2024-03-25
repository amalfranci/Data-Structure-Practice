function Sum(n)
{
  if(!n)
  {
    return 0
  }
  
  let last= n%10
  let num= Math.floor(n/10)
  return Sum(num) +last
  
}

console.log(Sum(234))