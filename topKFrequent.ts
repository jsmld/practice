// Given an integer array nums and an integer k, it will return the k most frequent elements.

function topKFrequent(nums: number[], k: number): number[] {
  let map: { [key: number]: number } = {};
  let bucket: Set<number>[] = [];
  let result: number[] = [];

  // This gets each of the numbers in nums and the amount they occur.
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  // This is the crucial part where we organize the numbers into sets based on their frequency.
  // If it's the first time we encounter a frequency, we create a new set; otherwise, we add
  // the number to the existing set with that frequency.
  for (let [numStr, freq] of Object.entries(map)) {
    let num = parseInt(numStr, 10);
    if (!bucket[freq]) {
      bucket[freq] = new Set([num]);
    } else {
      bucket[freq].add(num);
    }
  }
  // We work backwards from the end of the array (since we set up the bucket to have the highest
  // frequency at the end). From there we check if there is a set at the current index and if so
  // we convert the set into an array and push its element/elements into the result array. Then we
  // check if the length of the results array matches the k value and break if it does. 
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...Array.from(bucket[i]));
    if (result.length === k) break;
  }

  return result;
}

