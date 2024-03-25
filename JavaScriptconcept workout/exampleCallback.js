function PrintName(name)
{
    console.log("my name is "+name)
}


function Myex(callback) {

    const name = "amal"
    callback(name)

}

Myex(PrintName)