// Returns an array of all the integers between two given integers, including the two given.

// I had to type the `arr` as `number[]` because it was inferring type of `never[]`. So when I was pushing `a`
// to the `arr` it was throwing an error of `type number cannot be assignable to type never`.

function between(a: number, b: number): number[] {
  let arr: number[] = []
  while(a <= b) {
    arr.push(a)
    a++
  }
  return arr
}

// I also saw a really fancy solution which uses Array.from to generate an array and then
// populate it at the same time by adding the first arg with the index of each element.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from

function fancyBetween(a: number, b: number): number[] {
  return Array.from({length: b - a + 1}, (_, j) => j + a);
}