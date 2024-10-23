/*********************************************************************************************

"Name Shuffler"

Write a function that returns a string in
which firstname is swapped with last name.

Example(Input --> Output)
    "john McClane" --> "McClane john"
    
********************************************************************************************/

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("John McClane"));
//Time: 748ms

/********************************************************************************************/

//FIRST APPROACH

/* function nameShuffler(str) {
    let name = str.split(" ");
  
    let temp = name[0];
    name[0] = name[1];
    name[1] = temp;
    return name.join(" ");
  } */
