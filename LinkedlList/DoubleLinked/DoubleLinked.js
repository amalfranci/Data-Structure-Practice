class Node{

    constructor(value)
    {
        this.value = value
        this.next = null
        this.prev=null

    }
}
class DublyLinkedList{

    constructor(value)
    {
        const newNode = new Node(value)
        
        
        
            this.head = newNode
            this.tail = this.head
            this.length=1
            
    }
    push(value) {
        
        const newNode = new Node(value)
        
        if (!this.head)
        {
            
            this.head = newNode
            this.tail = newNode
            
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail=newNode
        }
        this.length++
        return this
    }
}

let myDoublyLinked = new DublyLinkedList(45)
myDoublyLinked.push(4888)
console.log(myDoublyLinked)

