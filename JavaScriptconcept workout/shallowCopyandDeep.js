let developer = {
    name: "amal",
    person2: {
        place: 'kannur',
        age:25
    }
    
}


// let developer2 ={...developer}

// shallow copy
let developer2 = JSON.parse(JSON.stringify(developer))
developer.name="Joseph"

console.log(developer)
console.log(developer2)