function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length ; i++){
  for(let j = i + 1; j < array.length ; j++){
    if (array[i] + array[j] === target){
      return true
    } 
  }
  } return false
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))
console.log(hasTargetSum([-7, 10, 4, 8], 3))
console.log(hasTargetSum([1, 2, 3, 4], 5))
console.log(hasTargetSum([1, 2, 5], 4))
/*
Basically, 2 elements of the array should add up to the target.
for example if we have an array with [15, 23, 3, 4, 5] and a target of 20,
when we run the  function the return should be true because yes, 15 and 5 bring 20

we shoulc have an expression that takes in the add function that adds 2 elements that will bring the target
 we should also have another expression that compares the array elements and the target
*/
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
for (let i = 0) ... this will represent the first element
for (let j = i + 1) the +1 will help us avoid the i and j from comparing the same elements

then the i and j will be run through an if statement that will check if the elements add up.
there is no need for the else statment because if the a statement is not true its false so we 
just return the false.
*/

/*
  Add written explanation of your solution here
   for this we will use 2 for loop whereby, it will iterate and loop through the elements
 of the array and looking for 2 numbers that when added up together will be equal to the target

 the two elements found through the loops, will be run through an if statement
 that will eneter the condition that will check whether the two elements are equal 
 to the target when added together.

we will the call some arrays and targets to prove that our code is working 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
