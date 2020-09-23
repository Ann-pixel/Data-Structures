//jshint esversion:6
//we are making a undirected  graph. a-b.
class Graph{
  constructor(){
    this.adjacencyList={};
  }
  addVertex(name){
    this.adjacencyList[name]= [];   //for dupes, this code will just override and set it to []. we can add a dupe check code like : if(!this.adjacencyList) this.adjacencyList[name]=[];
//     return this.adjacencyList;
  }
  addEdge(v1, v2){  //add both to both. because this is an undirected graph.
    this.adjacencyList[v1].push(v2);  //this code does not handle errors(eg invalid vertices.). a small if check can be added to see if v1, v2 exist.
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }
  removeEdge(vertex1, vertex2){  //only works with valid args.
    this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter(v => v !== vertex2);
   this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter(v => v !== vertex1);
    return this.adjacencyList;
  }
  removeVertex(vertex){
  while(this.adjacencyList[vertex].length){
    const adjacentVertex = this.adjacencyList[vertex].pop(); //delete items from the array of the vertex to be deleted
    this.removeEdge(vertex, adjacentVertex); // remove references to the vertex
  }
  delete this.adjacencyList[vertex]; //delete the actual array of the vertex.
  return this.adjacencyList;
  }

}



let g= new Graph();





g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");


g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Aspen");
g.addEdge("Los Angeles", "Hong Kong");

g.removeVertex("Hong Kong");
