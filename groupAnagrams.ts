// Given an array of strings, it will find anagrams and return them grouped together.

// First off, we create a new Map. Then for each of the strings in the strs array we create an array called count
// (initialized with 26 0's representing a placeholder for each letter of the alphabet). From there we take each string
// and for each character in the string we calculate its position in the count array and increment by 1 to show that that
// char exists however many times ('aabbbc' would look like [2,3,1,0,0,0...]). Then for each str we create a key which is
// the count array join together ('aabbbc' -> '2,3,1'). We then check if the anagramMap has the key and if not we set it in
// the map and give it an empty array as the value. If it does have it we get the array by the key set in the map and push the
// str to it. Finally after going through all the strings in strs returns an array of all the values in the map (where each value
// is just an array of grouped anagrams)
function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map();

  for (const str of strs) {
      const count = Array(26).fill(0)

      for (const char of str) {
          count[char.charCodeAt(0) - "a".charCodeAt(0)]++
      }

      const key = count.join(",")
      if (!anagramMap.has(key)) {
          anagramMap.set(key, [])
      }
      anagramMap.get(key).push(str)
  }

  return Array.from(anagramMap.values())

};
