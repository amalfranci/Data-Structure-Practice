function createPerson(name) {
    
    return {
        
        name,
        print() {
            
            return `i am ${this.name}`
        }
    }
}

const me = createPerson('amal')
const you = createPerson('Rahul')
console.log(you.print())