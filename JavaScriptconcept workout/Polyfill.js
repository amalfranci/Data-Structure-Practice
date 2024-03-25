let name = {
    
    firstname: "amal",
    lastname:"francis"
}

let printName = function() {
    console.log(this.firstname +" "+this.lastname)
}


let printMyname = printName.bind(name)
printMyname()


Function.prototype.mybind = function (...args)
{
  console.log(args[0])
    let obj=this
    return function ()
    {
        obj.call(args[0])
        
        }

    }



let printMyname2 = printName.mybind(name)

printMyname()