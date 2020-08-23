//jshint esversion:6
class Node {
  constructor(val){
    this.value=val;
    this.next=null;
    this.prev=null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head=null;
    this.tail= null;
    this.length=0;
  }
// ======= methods=====

  //push======
  push(val){
    let newNode= new Node(val);   //new instance of a node
    if(this.length===0){ //edge case
      this.head=newNode;
      this.tail= newNode;
      this.length++;
    } else{
      this.tail.next=newNode; //add new node to the end of the list
      newNode.prev=this.tail; //give newnode a prev attr
      this.tail= newNode;  //make new node the tail
      this.length++;      //incr length
    }
  return this;
  }
//=====push

//pop======
pop(){
  if(this.head===null) return undefined; //edge case
   let temp= this.tail;  //save the last item to return it
  if (this.length ===1) { //only one item, remove it
    this.head=null;
    this.tail=null;
  } else{
    this.tail= temp.prev;  //make previous item the new tail
    temp.prev=null;       //sever ties <-- this way bet last item and list
    this.tail.next= null; //sever ties --> that way bet last item and list.
  }
   this.length--;       //dcr length
  return temp.value;
}
//====pop

//shift===
shift(){
  if(this.length===0) return undefined; //edge case0
  let foundNode= this.head;   //save current head to return
  if(this.length===1) {
    this.head= null;      //only one item- remove it.
    this.tail= null;
  } else{
    this.head= foundNode.next;  //give the second node the head attr
    foundNode.next=null;     //sever ties --> this way b/n list and node
    this.head.prev=null;    //sever ties <-- that way b/n list and node
  }
  this.length--;      //dcr length
  return foundNode;    //return the whole node or foundNode.value
}
//===shift

//unshift===
unshift(val){
  let newNode= new Node(val); //create new node with the value
  if(this.length===0){      //list empty
    this.head= newNode;
    this.tail=newNode;
  } else{
    this.head.prev=newNode;  //make a <-- way tie b/n list and node
    newNode.next= this.head;  //make a --> way tie b/n list and node
    this.head= newNode;   //set new node to be the head
  }
  this.length++;      //incr length
  return this;
}
//===unshift
//get===
get(idx){
  if(idx< 0 || idx>=this.length) return undefined; //edge case
  let foundNode;          //foundNode will be a start point for both cases
  if(idx<= (this.length)/2){ //if idx falls in the first half of the list. start  from the head
    foundNode= this.head;
    let i=0;
    while(i !== idx){
      foundNode= foundNode.next; //keep looping and saving the next until idx is reached
      i++;
    }
  }
  if(idx> (this.length)/2){ //if idx falls in the second half, start from the end
  foundNode= this.tail;
   let j= this.length-1;
   while(j!==idx){
     foundNode= foundNode.prev; // keep looping and storing the prev until idx is reached.
     j--;
   }
  }
  return foundNode.value;
}
//===get
// set====
set(val, idx){
  let foundNode= this.get(idx);   //get the node at this index
  if(foundNode!== null) {       //if found
  foundNode.value= val;   //assign a diff value to it & return true
  return true;
  }
  return false;     //else, false

}
// ===set
//insert===
insert(val, idx){
    if(idx<0 || idx>this.length) return undefined; //edge case
    if(idx===0) return !!this.unshift(val);  //thats unshifting '!' for boolean return
    if(idx===this.length) return !!this.push(val); //thats popping

    let newNode= new Node(val);   //initiate new node
    let foundNode= this.get(idx-1);   //find the node previous to the index
    foundNode.next.prev= newNode; // making a 1st tie(<--) b/n new node and node at idx
    newNode.next= foundNode.next;  //making a 2nd tie(-->) b/n new node & node at idx
    foundNode.next=newNode;   //making a --> tie b/n node at idx-1 & new node
    newNode.prev= foundNode; //making a <-- tie b/n new node & node at idx-1
    this.length++;  //'coz we added an item;
    return true;
  }
//===insert
//remove===
remove(idx){
    if(idx<0 ||idx >= this.length) return undefined; //edge cases
    if(idx===0) return this.shift();          //thats shift
    if(idx===list.length-1) return this.pop(); //thats pop

    let foundNode= this.get(idx);   //store the node at that idx in a var
    let beforeNode= foundNode.prev; //define the previous and next nodes for easy reading..
    let afterNode= foundNode.next;
    foundNode.prev=null;        //set the found node's prev and next to null
    foundNode.next= null;
    afterNode.prev=beforeNode;  //patch up the space between the two nodes on either side
    beforeNode.next=afterNode;
    this.length--;        //drc length
    return foundNode;     //return the node that was removed

  }
//===remove

}




let list= new DoublyLinkedList();
