// Given an array of numbers, return an array of two different indices of two numbers that add up to the target

// I made two loops, one starting from the beginning of the array and one starting at array[1]
// I added the check that i and j aren't the same because in this case we want two different indices

// I returned [-1] to satisfy the return type in case it returned undefined

function twoSum(nums: number[], target: number): number[] {
  let indices: number[] = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if (i !== j && nums[i] + nums[j] === target){
              indices.push(i, j)
              return indices
          }
      }
  }
  return [-1]
};

// Here's a fancy solution I found with a good explanation. Once I understand Map a bit better,
// I'll remove all these comments.

function fancyTwoSum(numbers: number[], target: number): number[] {
  // create a map as a method of key value storage for O(1) search / access
  // Array has an O(n) search-time, so we opt for the map
  const numberMap = new Map()

  // start by looping through each number (we use a traditional
  // for-loop here since it allows us to use "break" or "return" if we find
  // the number we're looking for before reaching the end of the array)
  for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i]

      // here we find the difference between the target and number...
      // "difference" represents the number that needs to be added
      // onto "number" (the current number we're looping over) in order
      // to equal the function's target number
      const difference = target - number

      // check numberMap for the difference value. if we already
      // looped over this number, that means it's in our map, therefore
      // we can retrieve the value from our map (O(1)), get its index, and return
      // the index we're currently looping over to complete the problem
      if (numberMap.has(difference)) return [numberMap.get(difference), i]

      // if we haven't already looped over the number, store it
      // and its index in a JS Map (hash table) so we can
      // get an O(1) search / access check to see if we looped over the
      // number previously
      numberMap.set(number, i)
  }
  // I added this to satisfy the return type
  return [-1]
};
