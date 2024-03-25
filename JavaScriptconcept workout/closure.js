function doSome(callback)
{
    setTimeout(function () {
        
        console.log("hello i am amal")
    }, 2000)
    callback()
}

doSome(function () {
    console.log("calllback is exicuted")
})