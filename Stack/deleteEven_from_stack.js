function deleteEvenNumber(stack) {
    
    let tempStack = []
    
    while (stack.length > 0) {
        const element = stack.pop()
        if (element % 2 !== 0) {
            tempStack.push(element)
        }


    }
    while (tempStack.length > 0) {
        
        stack.push(tempStack.pop())
    }
}


const stack=[1,3,4,5,6,7,8,9,10]
deleteEvenNumber(stack)
console.log(stack)