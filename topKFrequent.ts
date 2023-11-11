// Given an integer array nums and an integer k, it will return the k most frequent elements.

function topKFrequent(nums: number[], k: number): number[] {
  let map: { [key: number]: number } = {};
  let bucket: Set<number>[] = [];
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let [numStr, freq] of Object.entries(map)) {
    let num = parseInt(numStr, 10);
    if (!bucket[freq]) {
      bucket[freq] = new Set([num]);
    } else {
      bucket[freq].add(num);
    }
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...Array.from(bucket[i]));
    if (result.length === k) break;
  }

  return result;
}

