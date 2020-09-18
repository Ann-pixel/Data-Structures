// jshint esversion:6
//like a heap.
//instead of the values, this compares the priority.
// this is a 'min heap' implementation. as opposed to max in the previous exersice.
// only change in the comparators.
class PriorityQueue{
  constructor(val){
    this.values=[];
  }
  insert(val, priority){
    let newNode= new Node(val, priority);
    this.values.push(newNode);
     return this.bubble();
    }


   bubble(){
        let idx= this.values.length-1;
        let element= this.values[idx];
        while(idx>0){
        let parentIdx= Math.floor((idx-1)/2);
        let parent= this.values[parentIdx];
         if(element.priority >= parent.priority) break;
        this.values[parentIdx]= element;
        this.values[idx] =parent;
        idx= parentIdx;
      }
       return this.values;
  }
  extractMax(){
      const min= this.values[0];
      const end= this.values.pop();
      if(this.values.length >0){
        this.values[0]= end;
        this.sinkDown();
      }
      return min;
      }
  sinkDown(){
    let idx=0;
    let length= this.values.length;
    const element = this.values[0];

    while (true){
      let leftChildIdx= 2*idx+1;
      let rightChildIdx= 2*idx+2;
      let leftChild, rightChild;
      let swap=null;

      if(leftChildIdx<length){
        leftChild= this.values[leftChildIdx];
        if(leftChild.priority < element.priority){
          swap= leftChildIdx;
        }
      }
      if(rightChildIdx <length){
        rightChild= this.values[rightChildIdx];
        if((swap===null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)){
        swap= rightChildIdx;
        }
      }

      if(swap ===null) break;
      this.values[idx] = this.values[swap];
      this.values[swap]= element;
      idx = swap;
    }
  }
}
let p = new PriorityQueue();

class Node{
  constructor(val, priority){
    this.value= val;
    this.priority= priority;
  }
}

p.insert("common cold", 5);
p.insert("gunshot wound", 1);
p.insert("high fever", 4);
p.insert("broken arm", 2);
p.insert("glass in foot", 3);
