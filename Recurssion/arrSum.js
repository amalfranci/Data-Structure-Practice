

function Multifly(arr)
{
  if(arr.length===0)
  {
    return 1
  }
  else{
    
    return arr[arr.length-1] * Multifly(arr.slice(0,arr.length-1))
  }
}

const arr=[3,4,5,7]

console.log(Multifly(arr))