'use strict';
const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        else {
            const adjacentVertex = this.adjacencyList.get(start);
            adjacentVertex.push(new Edge(end, weight));

            // let edge = new Edge(end, weight);
            // adjacentVertex.push(edge);
        }
    }

    breadthFirst(start) {
        if (this.adjacencyList.size === 0) {
            return "Empty graph";
        }
        if (!this.adjacencyList.has(start)) {
            return null;
        }
        let queue = [];
        let visited = new Set();
        let current;
        queue.push(start);
        visited.add(start);
        while (queue.length) {
            let front = queue.shift();
            current = this.adjacencyList.get(front);
            current.forEach((neighbor) => {
                if (!visited.has(neighbor.vertex)) {
                    queue.push(neighbor.vertex);
                    visited.add(neighbor.vertex);
                }
            });
        }
        return visited;
    }
}
module.exports=Graph;

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
const six = new Vertex(6);
// const seven = new Vertex(7);


myGraph.addVertex(zero)
myGraph.addVertex(one)
myGraph.addVertex(two)
myGraph.addVertex(three)
myGraph.addVertex(four)
myGraph.addVertex(five)
myGraph.addVertex(six)

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(two, six);
myGraph.addDirectedEdge(zero, zero);

// myGraph.addDirectedEdge(seven, two);



// for (const [k, v] of myGraph.adjacencyList.entries()) {
//     console.log('k = ', k, 'v = ', v);
// }
// console.log(myGraph);
console.log(myGraph.breadthFirst(zero));

