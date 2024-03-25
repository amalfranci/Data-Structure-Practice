function Person(name)
{
    this.name = name
    this.Print = () => {
        
        return `hello i am ${this.name} `
    }
    
    
}


const amal = new Person('amal')
console.log(amal.Print())