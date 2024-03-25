function Remove(arr)
{
  let larget=0
  let second=0
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>larget)
    {
      second=larget
      larget=arr[i]
    }
    else if(arr[i]>second && larget>second){
      second=arr[i]
      
    }
  }
  const result=arr.reduce((acc,val)=>{
    if(val != larget && val != second){
      acc=acc+val
    }
    return acc
  },0)
  return result
  
}
const  arr=[4,7,8,3]
console.log(Remove(arr))