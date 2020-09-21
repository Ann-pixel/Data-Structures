//jshint esversion:6
//FIFO first in first constructor
// we add to the tail and remove from the head, to maintain O(1)


class Node{
  constructor(val){
    this.value= val;
    this.next=null;
  }
}

class Queue{
  constructor(){
  this.head= null;
  this.tail= null;
  this.length=0;
  }

 enqueue(val){ //adding to the tail
   let newNode= new Node(val); //init a new node
   if(this.length===0) {
     this.head= newNode;  //if empty set both to newNode
     this.tail= newNode;
   } else{
      this.tail.next= newNode;  //if not empty, add the newNode to the end
      this.tail= newNode;   //make it the tail
   }
   return ++this.length;  //return the incremented length
 }

 dequeue(){           //removing the first one in. starting with the head
   if(this.length===0) return null; //edge case
   let temp= this.head;     //save this for return
   if (this.head=== this.tail){   //only one item in list, assign the tail-
     this.tail= null;        // -to be null. the head will get assigned anyway in the next line.
   }                  //coz that needs to happen regardless of this 'if' condition

   this.head= temp.next; //assign the head to be the next node in line.
   temp.next=null;    //sever --> way tie b/n node and list
   this.length--;   //dcr length
   return temp.value; //return removed node.

 }
}


let queue= new Queue();
