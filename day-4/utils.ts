export type Grid = Array<Array<'.' | '@'>>

const directions = [
  [-1, -1], [-1,  0], [-1,  1],
  [0,  -1],           [0,  1],
  [1,  -1], [1,  0],  [1,  1]
] as const

export const countMooreNeighbours = (grid: Grid, row: number, col: number): number =>
  directions
    .map(([dRow, dCol]) => [row + dRow, col + dCol])
    .filter(([newRow, newCol]) => 
      newRow >= 0 && newRow < grid.length && 
      newCol >= 0 && newCol < grid[0].length
    )
    .filter(([newRow, newCol]) => grid[newRow][newCol] === '@')
    .length

export const findAccessibleRolls = (grid: Grid): Array<{ rowIdx: number, colIdx: number }> =>
  grid
    .flatMap((row, rowIdx) => row.map((cell, colIdx) => ({ cell, rowIdx, colIdx })))
    .filter(({ cell }) => cell === '@')
    .filter(({ rowIdx, colIdx }) => countMooreNeighbours(grid, rowIdx, colIdx) < 4)

export const parseGrid = (lines: Array<string>): Grid =>
  lines.map(line => line.split('') as Array<'.' | '@'>)
