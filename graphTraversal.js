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



//depth first recursive traversing.
dfsTraverseRecursive(start){
let result= [];
let visited= {};
const adjacencyList= this.adjacencyList; //helper func's 'this' is different

 function dfsHelper(vertex){
   if(!vertex) return null; //if no arg
   visited[vertex]= true; //an object to mark traversed
   result.push(vertex);   //array to return path of traversing
    adjacencyList[vertex].forEach((neighbor)=> { //check each subArr(neighbor)
      if (!visited[neighbor]){ //if neighboris visited, skip
        dfsHelper(neighbor); //if not visited. call helper func on it.
      }
    });
  //     A
  //   /    \
  // B       C
  // |       |
  // D   __  E
  //   \    /
  //     F
// this would return ["A", "B", "D", "E", "C", "F"];
  return result;
 }
return dfsHelper(start);
}


//Depth first iterative solution
dfsTraverseItirative(start){
 let stack= [start]; //LIFO -using an array to keep track of state. as opposed to the call stack used in recursive
 let result=[];
 let visited={};
 let vertex;

 visited[start]= true;

 while(stack.length){
   console.log(stack);
  vertex= stack.pop();
  result.push(vertex);

 this.adjacencyList[vertex].forEach(v => {
   if(!visited[v]){
     visited[v]= true;
     stack.push(v);
   }
 });

 }
 return result;
 //     A
 //   /    \
 // B       C
 // |       |
 // D   __  E
 //   \    /
 //     F
// this would return ["A", "C", "E", "F", "D", "B"];
}


// breadth first traversal
bfsTraverse(start){
  let queue= [start]; //FIFO use a queue instead of a stack
  let result=[];
  let visited={};
  let vertex;

  visited[start]= true;

  while(queue.length){
    vertex= queue.shift();
    result.push(vertex);

    this.adjacencyList[vertex].forEach(v =>{
      if (!visited[v]){
        visited[v]= true;
        queue.push(v);
      }
    });
  }
  return result;
  //     A
  //   /    \
  // B       C
  // |       |
  // D   __  E
  //   \    /
  //     F
 // this would return ["A", "B", "C", "D", "E", "F"];
}






}

let g= new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
