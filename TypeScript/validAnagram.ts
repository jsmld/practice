// Checks if two strings are valid anagrams of one another

// My current implementation uses the cleanString function to remove any non-aplhanumerical characters
// then lower case the string, split each character up as a single element in an array, then sort said array
// and join it back together as a string. Then I just compare the two "cleaned" strings.

// Since we use the sort method I think that we don't necessarily need to use the replace method to remove certain
// characters; simply put, I think validAnagram would work with Unicode characters as well but I'm not 100% sure.

function validAnagram (strOne: string, strTwo: string): boolean {
  return cleanString(strOne) === cleanString(strTwo)

  function cleanString (str: string): string {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
  }
}