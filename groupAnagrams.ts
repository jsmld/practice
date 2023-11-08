function groupAnagrams(strs: string[]): string[][] {
  const res = new Map();

  for (const str of strs) {
      const count = Array(26).fill(0);

      for (const char of str) {
          count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
      }

      const key = count.join(",");
      if (!res.has(key)) {
          res.set(key, []);
      }
      res.get(key).push(str);
  }

  return Array.from(res.values());

};
