// The Proxy object allows you to create an object that can be used in place of the original object,
//     but which may redefine fundamental Object operations like getting, setting, and defining properties.
//     Proxy objects are commonly used to log property accesses,
//     validate, format, or sanitize inputs, and so on.


const target = {
  
  message1: "hello",
  message2: "everyOne"
}

const handler={
  
  get(target,prop,reciver){
    if(prop==='message1'){
      return 'word'
    }
    return Reflect.get(...arguments)
  }
}
const peoxy3=new Proxy(target,handler)

console.log(peoxy3.message1)
console.log(peoxy3.message2)