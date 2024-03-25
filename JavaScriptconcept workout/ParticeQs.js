var employe = {
    
    firstname: "amal",
    lastName: "fra"
}

var employe2 = {
    
    firstname: "anand",
    lastName: "francis"
}

function PrintName(place,age)
{
    console.log(this.firstname+ " from "+place+" age is "+age)
}


PrintName.call(employe)
PrintName.apply(employe2,['kannuur',23])
