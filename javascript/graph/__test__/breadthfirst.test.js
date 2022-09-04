const Graph = require('../graph');
const Vertex = require('../vertex');

describe("Testing Graphs", () => {

    it("Testing breadth first", () => {

        const myGraph = new Graph();
        myGraph.addVertex(1);
        myGraph.addVertex(2);
        myGraph.addVertex(3);
        myGraph.addVertex(4);
        myGraph.addVertex(5);
        myGraph.addDirectedEdge(1, 2);
        myGraph.addDirectedEdge(1, 3);
        myGraph.addDirectedEdge(2, 3);
        myGraph.addDirectedEdge(2, 4);
        myGraph.addDirectedEdge(4, 5);
        myGraph.addDirectedEdge(5, 3);
        expect(myGraph.breadthFirst(1)).toEqual(new Set([1, 2, 3, 4, 5]));
        let myGraph2 = new Graph();
        expect(myGraph2.breadthFirst("")).toEqual("Empty graph");
        myGraph2.addVertex();
        expect(myGraph2.breadthFirst("")).toEqual(null);
    });
   

  

})