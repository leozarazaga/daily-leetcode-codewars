/*********************************************************************************************

"Number of people in the bus"

A bus makes several stops in the city, picking
up and dropping off passengers at each stop.

You are given a list of pairs, where the first
number represents passengers boarding at a stop,
and the second number represents passengers
disembarking at that stop.

Your task is to find the number of passengers
remaining on the bus after the last stop.

Keep in mind that the bus starts empty at the
first stop and the result cannot be negative
due to test case constraints.

Example 1:
    Input: passengers = [[10,0],[3,5],[5,8]];
    Output: 5

Example 2:
    Input: passengers = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
    Output: 17
    
********************************************************************************************/

var number = function (busStops) {
    
    let totalPassengers = 0;

    for (let i of busStops) {
        const [on, off] = i;
        totalPassengers += on;
        totalPassengers -= off;
    }
    return totalPassengers;
}

console.log(number([[10, 0], [3, 5], [5, 8]])); 
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); 
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])); 
console.log(number([[0, 0]])); 
// Time: 762ms

/********************************************************************************************/

//FIRST APPROACH

/*
var number = function (busStops) {

     let totalPassengers = 0;

     for (let i = 0; i < busStops.length; i++) {
         let on = busStops[i][0];
         let off = busStops[i][1]
 
         totalPassengers += on;
         totalPassengers -= off;
     }
     return totalPassengers;
 }
*/