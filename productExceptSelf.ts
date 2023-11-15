// Given an integer array nums, this will return an array answer such that answer[i] is equal to the
// product of all the elements of nums except nums[i].

// We have a zeroCount variable to confirm number of 0's in nums. This is then used straight away to check
// if we have more than one, because then we can just return an array of 0's equal to the length of nums.
// Then we calculate the total product of all the nums in nums except for the 0's.
// Then we map over nums replace the current value with either: the totalProduct if the num is 0, 0 if the
// zeroCount is 1, or totalProduct/num

function productExceptSelf(nums: number[]): number[] {
  const zeroCount = nums.filter(num => num === 0).length

  if (zeroCount > 1) {
      return nums.map(() => 0)
  }

  const totalProduct = nums.reduce((acc, num) => (num !== 0 ? acc * num : acc), 1)

  return nums.map(num => (num === 0 ? totalProduct : (zeroCount === 1 ? 0 : totalProduct / num)))
};
