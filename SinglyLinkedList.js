// jshint esversion:6
// create a node structure
// create a list structure

class Node{
  constructor(val){
    this.value= val;
    this.next= null;
  }
}
class SinglyLinkedList{
  constructor () {
    this.head=null;
    this.tail=null;
    this.length=0;
  }
  // constructor methods
  //====push
  push(val){
   let newNode= new Node(val);
   if(!this.head){
     this.head= newNode;
     this.tail=newNode;
   } else {
     this.tail.next=newNode; // add item to the end of the tail.
      this.tail= newNode;   //move the tail to the last addition.
   }
   this.length++;
   return this;
  }
  //====push

  //===pop
  pop(){
    if(this.length ===0) return undefined; //edge case
    let current= this.head;
    let newTail = current;
    while(current.next){      //while there is a next.
      newTail =current;       // save the current in a var
      current =current.next;  // increment current to next Node
    }
    this.tail=newTail;      //once end reached--change tail to 2ndlast
    this.tail.next=null;    //delete last node
    this.length--;          //decrease length
    if(this.length ===0 ){
      this.head =null;
      this.tail =null;
    }
    return current;       //return saved value of the last node
  }
  //===pop

  // ===shift
  shift(){
    if(this.length===0) return undefined;
    let currentHead= this.head;  //store value of first node.
    this.head= this.head.next;  //move head to the next node
    this.length--;              //decrement the length
      if(this.length===0){      //assign tail to null if 0 after decrementing
      this.tail=null;
    }
    return currentHead;     //return removed item
  }
  // ===shift
  //====unshift
  unshift(val){
    let newNode= new Node(val);
    if(!this.head) {   //if empty, assign new val to be head & tail
      this.head= newNode;
      this.tail= newNode;
    } else{
      newNode.next=this.head; //set current head to be after the new value
      this.head= newNode;     //move the head property to current val
    }
      this.length++;      //incr length
      return this;        // return new list
  }
  //====unshift
  //====get
  get(val){
    if(val<0 || val>= list.length) return undefined; //if val inapplicable
    let currentValue= this.head;    //save value of first node
    for(let i =0;i<val; i++){
        currentValue= currentValue.next; //keep saving the next value until required index is reached
    }
    return currentValue;  //return latest value.
  }
  //====get
  //====set
  set(idx, val){
    let foundNode=this.get(idx); //get the node at this index
    if (foundNode){
      foundNode.value= val;     //set value of node(.value comes from Node constructor)
      return true;
    } return false;
  }
  //====set
  //===insert
  insert(idx, val){
    if(idx<0 || idx>list.length) return false; //edge cases
    if(idx=== list.length) return !!this.push(val); //just adding in the end. two exclaimation points-
    if(idx ===0) return !!this.unshift(val);  //adding in the beginning. '!' turns o/p to negative boolean. '!!' makes it positive.
    else {
      let newNode =new Node(val);   //initiate new instance of node
      let foundNode = this.get(idx-1); //we're inserting a new node between two nodes. this gets the first of those two nodes.
      let temp= foundNode.next;     //saving the second of above mentioned nodes to a temp, because we are about to change it
      foundNode.next =newNode;    //connect the new node to the previous one.
      newNode.next=temp;        //assign the 'next' of this new node to be the saved secondnode.
      this.length++;
      return true;
    }

  }
    //=== insert

    //=== remove
  remove(idx){
    if(idx >= list.length || idx<0) return undefined; //edge cases
    if(idx ===list.length-1) return this.pop(); //remove last item
    if (idx === 0) return this.shift(); //remove first item
    else{
      let foundNode= this.get(idx-1);  // we're removing an item. so get the node before it and connect it to the one after the item to be removed.
      let delNode= foundNode.next;  // save the node to be deleted
      foundNode.next= delNode.next;      //connect the first node to the third removes the middle one.
      this.length--;              //dcr length
      return delNode.value;         //return value of the saved/deleted node

    }

  }
  //==remove
  //====reverse

  reverse(){
    let node = this.head; //node is the variable we're using to keep traverse through the list
    this.head= this.tail; //swap head and tail
    this.tail= node;
    let next;           //to keep track of the "old next in line"
    let prev=null;      // to keep track of the "new next in line". init to null because this is after the 'new tail' & called prev in ref to 'old head'


    for(let i=0; i<this.length; i++){
      next= node.next;  //the next item in the old list becomes 'next'
      node.next=prev;   //current node's next becomes 'prev' for the new list. eg: the first loop over, tail.next will be null.. and change thereafter
      prev = node;      // we shift these both along the list and start the process over.
      node = next;      // prev for the next cycle becomes the current node of this cycle. and node for the next cycle becomes the next item on list.
    }  //and so the circle of life continues... until the loop loops over or the coder gives up- whichever comes first.
    return this;
  }
//reverse=====
// to check if the reversing worked.
print(){
  let arr=[];
  let current= this.head;
  while(current){
    arr.push(current.value);
    current=current.next;
  }
  return arr;
}

}
// initialize an instance of SinglyLinkedList.
let list =new SinglyLinkedList();
// command can be like: list.push(), list.length, list.tail/head etc.
