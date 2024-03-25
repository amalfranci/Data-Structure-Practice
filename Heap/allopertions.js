class heap{

    constructor(array) {
        this.heap=array
    }

    heapify()
    {
        const n = this.heap.length
        for (let i = Math.floor((n / 2) - 1); i >= 0; i--){
            
            this.heapifyDown(i)
        }
    }
    heapifyDown(i) {
        let left = (2 * i) + 1
        let right = (2 * i) + 2
        let largest = i
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest=left
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest=right
        }

        if (largest !== i)
        {
            this.swapp(i, largest)
            this.heapifyDown(largest)
        }
        
        
    }

    swapp(i, j)
    {
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j]=temp
    }
      delete() {
        const result = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return result;
    }

    heapSort()
    {
        let sortArr = []
        while (this.heap.length > 0)
        {
            sortArr.push(this.delete())

        }
        return sortArr
    }

}
let arr = [56, 78, 3, 4, 22, 34,58,7]
const myHeap = new heap(arr)
myHeap.heapify()
console.log(myHeap)
// myHeap.delete()
console.log(myHeap.heapSort())