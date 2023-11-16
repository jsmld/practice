// This function determines if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// For this challenge strings were used to represent the digits from 1 - 9 with '.' representing empty cells but I
// believe the code would still work with numbers with a few type tweaks and changing '.' to be 0

function isValidSudoku(board: string[][]): boolean {
  // This for loop checks for valid rows
  for (const row of board) {
    const filteredRows = row.filter((num) => num !== '.')
    if (new Set(filteredRows).size !== filteredRows.length) return false
  }

  // This checks for valid columns and sub-boxes
  const subBoxes: { [boxIndex: number]: string[]} = {} 

  for (let i = 0; i < 9; i++) {
    const col: string[] = []
    for (let j = 0; j < 9; j++){
      const cell = board[j][i]
      if (cell === '.') continue
      col.push(cell)

      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      if (!subBoxes[boxIndex]) {
        subBoxes[boxIndex] = [cell]
      } else {
        if (subBoxes[boxIndex].find((num) => num === cell)) return false
        subBoxes[boxIndex].push(cell)
      }
    }
    if (new Set(col).size !== col.length) return false
  }
  return true
}