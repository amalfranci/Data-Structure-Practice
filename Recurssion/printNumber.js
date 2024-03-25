function Print(number) {

    if (number===0)
    {
       return 
    }
    console.log(number)
    return Print(number-1)
    


}

Print(5)