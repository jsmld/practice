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

// Here's a fancy solution I found which uses a Map, loops over the numbers array and creates a `difference`
// using the current number in the array and target. It then accesses the Map to check if this difference exists already
// then returns an array of the index of the difference and the index of the current number; otherwise it sets the current number
// and its index in the Map

// Returning [-1] at the end resolves the return type 

function fancyTwoSum(numbers: number[], target: number): number[] {
  const numberMap = new Map()
  for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i]
      const difference = target - number
      if (numberMap.has(difference)) return [numberMap.get(difference), i]
      numberMap.set(number, i)
  }
  return [-1]
};
