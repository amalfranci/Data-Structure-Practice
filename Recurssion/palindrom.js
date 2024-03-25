function Plind(str,start=0,end=str.length-1)
{
  if(start>=end) return true
  
  if(str[start]!=str[end]) return false
  
  else{
    
  return  Plind(str,start+1,end-1)
    
  }
    
}

console.log(Plind("dad"))