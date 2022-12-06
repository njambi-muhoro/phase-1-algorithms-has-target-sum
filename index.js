function hasTargetSum(array, target) {
  
  for(let i=0; i<array.length; i++){
    let difference = target - array[i];
    for(let j= i+1; j<array.length; j++){
      if(array[j] === difference){
          return true;
      }
  }
}
   return false;   
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. i and j represent the index of items in the array
  2. In the first loop we shall start by iterating the first element with an index of zero(0) and meets the conditions in the loop
  3. After one loop cycle we shall loop the second for loop that starts at the index of one(1)
  4. inside the nested for loop we have some comparison to make in regards to the first loop cycle of the first for loop and the 
     the first loop cycle for the second for loop
  5. The comparison is: if we sum the first index of the first loop and the first index of the second loop
     and they equal true we return true if that's not the case we continue looping till we get a solution if its not we return false
*/

/*
  Add written explanation of your solution here
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
