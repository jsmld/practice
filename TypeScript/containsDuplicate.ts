// Checks if an array of numbers contains any duplicates.

// Putting the array into a Set object which stores unique values and those
// values can only occur once, then comparing if the size of the Set is NOT 
// equal to the length of the array will return true if there are duplicates
// or false if there are not.

// NOTE: This example uses an array of numbers but would work with an array of
// any primative value or object reference

function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
};
