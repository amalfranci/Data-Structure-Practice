let name = {
    
    firsname: "amal",
    lastname: "francis",
    printFullName: function (homeTown,state) {
        console.log(this.firsname +"  "+this.lastname+" "+homeTown+" "+state)
    }
}

let name2 = {
    
    firsname: "anand",
    lastname:"francis"
}

name.printFullName.call(name2)
name.printFullName.apply(name2, ["Taliparamba", "kannur"])
const result = name.printFullName.bind(name2, ["iritty", "kannur"])
result()
