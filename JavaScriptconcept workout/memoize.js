const memoizAddtion = () => {
    
    let cache = {}

    return (value) => {
        
        if (value in cache)
        {
            console.log("Fetching form cache")
            return cache[value]
        } else {
            console.log("calulating result")
            let result = value + 10
            cache[value] = result
            return result
            }
    }
    
}

const additon = memoizAddtion()
console.log(additon(20))
console.log((additon(34)))
console.log(additon(20))