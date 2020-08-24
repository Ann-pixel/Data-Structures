//jshint esversion:6
//each parent has no more than two children.
//each parent is greater than the child.
//left is filled out before right
//            41
//       39        33
//    18   27   12
//the above is represented in an array such that children of each parent can be found at left- 2n+1, right- 2n+2
//conversly- parent to each child can be found at math.floor((n-1)/2). flooring accomodates for odd numbers. 'n' is the index of the element

class MaxBinaryHeap {
  constructor(val) {
    this.values = []; //init with an existing array.
  }
  insert(val) { //inserted using a seperate function. can be done using the same funciton. this looks cleaner to me
    this.values.push(val);
    return this.bubble(); //start by just inserting the new value
  } //find its correct position in the 'bubble' method.


  bubble() {
    let idx = this.values.length - 1; //new value will be the last idx
    let element = this.values[idx];
    while (idx > 0) { //so it doesnt find this.values[-1] for eg.
      let parentIdx = Math.floor((idx - 1) / 2); //value of parent using the above formula
      let parent = this.values[parentIdx];
      if (element <= parent) break; //then it is in the right spot. no need to 'bubble up'
      this.values[parentIdx] = element; //swap values of parent with the element if parent<element
      this.values[idx] = parent;
      idx = parentIdx; //swap indices too. so loop doesnt keep looping indefinetly.
    }
    return this.values; //return the array that represents a max binary heap.
  }



  extractMax() {    //extract the highest value. (the 0th element)
    const max = this.values[0];
    const end = this.values.pop(); //remove last element and assign to end. if last element removed.. length is 0 & no need to go over the sink down func and reassigning values[0]
    if (this.values.length > 0) { //make sure we dont keep removing and inserting the last element over and over again.
      this.values[0] = end; //assign the last to the beginning of the array. so the last child becomes the root.
      this.sinkDown(); // call sink down to find an appropriate position for the root. so as to keep it a Binary Max Heap.
    }
    return max; // return and remove the highest number= root.
  }


//  sink down can be done recursively too. this is more readable.

  sinkDown() {    //function to find a spot for new root that follows Binary Max Heap rules.
    //assigning things for a simpler code.
    let idx = 0;
    let length = this.values.length;
    const element = this.values[0];

    while (true) {      //run until conditions within run
      let leftChildIdx = 2 * idx + 1;   //assigning math to simplify code
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;  //initiate what would be the actual element children. not assigning yet, coz we need to check for validity (<length)
      let swap = null;      // variable to store the idx of the number to be swapped. and to keep track of whether or not any swap was made (to help exit loop)

      if (leftChildIdx < length) {    //checking for validity.
        leftChild = this.values[leftChildIdx];  //now assign the value
        if (leftChild > element) {    //if the child is greater than parent. they get swapped.
          swap = leftChildIdx;      //storing swap idx to use in the end
        }
      }
      if (rightChildIdx < length) {   //checking for right idx validity
        rightChild = this.values[rightChildIdx];  //assign value of right child
        if ((swap === null && rightChild > element) ||  //is swap is null still, means leftchild was smaller
          (swap !== null && rightChild > leftChild)) {  //if both children are greater, parent is swapped with the eldest/greatest/highest child.
          swap = rightChildIdx;                //if swap is not null, but right >left. swap with left.
        }
      }

      if (swap === null) break;     //if no swaps were made in the itiration, the heap is ready to return
      this.values[idx] = this.values[swap]; //else, make the swap and go again.
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
