// Given an array of strings, it will find anagrams and return them grouped together.

// First off, we create a new Map. Then for each of the strings in the strs array we create an array called count
// (initialized with 26 0's representing a placeholder for each letter of the alphabet). From there we take each string
// and for each character we calculate its position in the count array through Unicode magic. I'm still a bit tripped up
// by line 14. Needs a bit more study but it's coming together in my head now more than before.
function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map();

  for (const str of strs) {
      const count = Array(26).fill(0);

      for (const char of str) {
          count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!anagramMap.has(key)) {
          anagramMap.set(key, []);
      }
      anagramMap.get(key).push(str);
  }

  return Array.from(anagramMap.values());

};
