class Graph{

    constructor() {
        
        this.adjacencyList={}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
 addEdge(vertex1, vertex2) {
        
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    dfsFirstSerach(startingVertex) {
        const result = []
        const visited = {}
        const stack = [startingVertex]
        visited[startingVertex] = true
        while (stack.length) {
            
            const currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
                
            
        }
        return result
    }
    breadthFirstSearch(startingVertex) {
        const result = [];
        const visited = {};
        const queue = [startingVertex];

        visited[startingVertex] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const Mygraph = new Graph();

Mygraph.addVertex('1');
Mygraph.addVertex('2');
Mygraph.addVertex('3');
Mygraph.addVertex('4');
Mygraph.addVertex('5');

Mygraph.addEdge('1', '2');
Mygraph.addEdge('1', '3');
Mygraph.addEdge('2', '4');
Mygraph.addEdge('2', '5')
console.log(Mygraph.dfsFirstSerach('1'))
console.log(Mygraph.breadthFirstSearch('1'))