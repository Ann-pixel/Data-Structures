// jshint esversion:6
// Last in First out!
//using singly linked list and adding at the beginning- shift/ unshift property just calling them push and pop here.
//using shift-unshift because we need constant time.
// for a singly linked list, push and pop are not constant time.

class Node{
  constructor(val){
    this.value= val;
    this.next=null;
  }
}

class Stack{
  constructor(){
  this.first= null;
  this.last= null;
  this.length=0;
  }
  push(val){
    let newNode= new Node(val); //new node
    if(this.length===0) { // if stack is empty, assing the first and last property to the new node
      this.first=newNode;
      this.last=newNode;
    } else{             //add new node to the beginning. so first prop is new node and it's next prop is the older first  node
      let temp= this.first;
      this.first=newNode;
      this.first.next= temp;
    }
    return ++this.length; // return the incremented length
  }
  pop(){
    if(this.length===0) return null; //edge case
    let temp= this.first;  //save the first node(the node entered last)
    if(this.first===this.last){ //if only one item in the list, we'll seperately assign 'null' to last.
      this.last=null;  //and the first property will be assigned appropriately anyway, whether the list has one or many items
    }
    this.first = this.first.next;  //set the first prop to second. so-- last in first out!
    this.length--;
  return temp.value;
  }
}


let stack= new Stack;
