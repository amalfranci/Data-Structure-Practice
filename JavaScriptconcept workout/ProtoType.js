let object = {
    
    name: "amal",
    city: "kannur",
    getIntro: function () {
        console.log(this.name + " from " +this.city)
        
    }
}

let object2 = {
    
    name:"anand"
}

object2.__proto__ = object

object2.getIntro()