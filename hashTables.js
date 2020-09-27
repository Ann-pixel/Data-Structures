//jshint esversion:6
function basicHash( key, arrLength){
let total=0;
for(let char of key){
  let value = char.charCodeAt(0) -96;
  total= (total+value) % arrLength;
}
return total;
}

// basicHash("purple", 10);


// solves the problem of making it faster. lets say if string was million(even though not possible) long
// we would just loop the frist 100 if more than 100.
//using a prime number as a multiplier reduces collisions drastically
function somewhatBetterHash( key, arrLength){
let total=0;
let weirdPrime= 31;
for(let i=0 ; i < Math.min(key.length, 100); i++){
  let char = key[i];
  let value = char.charCodeAt(0) - 96;
  total= (total*weirdPrime + value) % arrLength;
}
return total;
}

//in somewhatBetterHash "pink" and "cyan" will give same results. that is a collision
//dealing with collisions
//seperate chaining: store collisions in the same spot. but in different arrays.
//[[key1, value], [key2, value]] in nested arrays.
//so, when key2 is called, we go to that spot: find key2. and serve corrosponding value.

//linear probing: slightly more complex. if a collision occurs. store the second value to come in the next available slot
//..then the next.. and so on
// this avoids storing multiple datas in the same spot.


class HashTable{
  constructor(size=17){ //default to 53.
    this.keyMap= new Array(size); //an array called keyMap of length size to store data.
  }
//same hash function as above
  hash( key){ //no need to pass size of hash table. since its in an array in 'this', accessed through this.keyMap
    let total=0;
    let weirdPrime= 31;
    for(let i=0 ; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total= (total*weirdPrime + value) % this.keyMap.length;
  }
return total;
}

  set(key, value){
    let idx= this.hash(key);
    if(!this.keyMap[idx]) {
      this.keyMap[idx]= [];
    }
    this.keyMap[idx].push([key, value]);

    return this.keyMap;
  }

  get(key){
     let idx= this.hash(key);
     if(this.keyMap){
      for(let i= 0; i<this.keyMap[idx].length; i++){
        if(this.keyMap[idx][i][0]=== key){
          return this.keyMap[idx][i]; //this give the entire subarr(key, val) to only return the value add [1] at the end coz we're storing key and then value.
        }
      }
     }
     return undefined;
  }
  keys(){  //returns an array of all keys
   let keysArr= [];
    for(let i=0; i<this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j=0; j<this.keyMap[i].length; j++){
//           valuesArr.push(this.keyMap[i][j][1]); //not checking for duplicates
            if(!keysArr.includes(this.keyMap[i][j][0])){ //checking for dupes
              keysArr.push(this.keyMap[i][j][0]);  //keys are stored at 0.
            }
        }
      }
    }
    return keysArr;
  }


  values(){ //return an array f all the values
    let valuesArr= [];
    for(let i=0; i<this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j=0; j<this.keyMap[i].length; j++){
//           valuesArr.push(this.keyMap[i][j][1]); //not checking for duplicates
            if(!valuesArr.includes(this.keyMap[i][j][1])){ //checking for dupes
              valuesArr.push(this.keyMap[i][j][1]);
            }
        }
      }
    }
    return valuesArr;
  }
}

//allows to set dupe keys. but when you get. only gives the first one inserted.
//most languages, when you add a dupe key. it just resets key to the new value.
//this code can be altered for that if needed.
let h= new HashTable();
h.set("maroon", "#800000");
h.set("yellow", "#FFFF00");
h.set("olive", "#808000");
h.set("salmon", "#FA8072");
h.set("lightcoral", "#F08080");
h.set("mediumvioletred", "#C71585");
h.set("plum", "#DDA0DD");
h.set("purple", "#DDA0DD");
h.set("plum", "double!");
