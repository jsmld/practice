// Our encode works by getting the length of each string and then adding that length as a number with
// a delimiter (# in this case) to the front of the string, then joining all the strings together as one string
function encode(strs: string[]): string {
  const encodedStrings: string[] = []
  for (const str of strs) {
    encodedStrings.push(`${str.length}#${str}`)
  }
  return encodedStrings.join('')
}

// Our decode works by having two variables, current and start. We first find the number of characters in one of the encoded
// strings by incrementing current until we hit the delimiter. Once we hit it we then turn that slice of characters into a number
// and use it to push that amount of characters after the delimiter to our decodedString array. Then we increment current to the next string
function decode(str: string): string[] {
  const decodedString : string[] = []
  let current = 0

  while (current < str.length) {
    const start = current
    while (str[current] !== '#') {
      current++
    }
    const strLength = Number(str.slice(start, current))
    current++
    decodedString.push(str.slice(current, current + strLength))
    current += strLength;
  }
  return decodedString
}