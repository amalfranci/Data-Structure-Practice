class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linked {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // Append a node at the end
    push(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Remove the last node
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // Remove the first node
    shift() {
        if (!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // Add a node at the beginning
    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = this.head;
        }
        this.length++;
        return this;
    }

    // Find index of a node with given value
    findIndex(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // Remove a node at given index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let pre = this.head;
        let current = pre.next;
        for (let i = 1; i < index; i++) {
            pre = current;
            current = current.next;
        }
        pre.next = current.next;
        this.length--;
        return current;
    }

    // Reverse the linked list
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let pre = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    }

    // Find the middle node of the linked list
    middle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

const SingleLinked = new Linked(34);
SingleLinked.push(56);
SingleLinked.push(78);
console.log(SingleLinked);
console.log('Index of value 56:', SingleLinked.findIndex(56));
console.log('Middle node:', SingleLinked.middle().value);
SingleLinked.reverse();
console.log('Reversed:', SingleLinked);
