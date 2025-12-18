import { getPuzzleConfig, readInput } from '../utils'
import { findAccessibleRolls, Grid, parseGrid } from './utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(4, 2)

const removeRolls = (grid: Grid, rolls: Array<{ rowIdx: number, colIdx: number }>): Grid =>
  grid.map((row, rowIdx) =>
    row.map((cell, colIdx) =>
      rolls.some(r => r.rowIdx === rowIdx && r.colIdx === colIdx) ? '.' : cell
    )
  )

const countTotalRemovableRolls = (grid: Grid, total = 0): number => {
  const accessible = findAccessibleRolls(grid)
  return accessible.length === 0
    ? total
    : countTotalRemovableRolls(removeRolls(grid, accessible), total + accessible.length)
}
  
// example
const inputExample = readInput<string>(import.meta.url, puzzleExampleInput)
logExampleSolution(countTotalRemovableRolls(parseGrid(inputExample)), 43)

// puzzle
const input = readInput<string>(import.meta.url, puzzleInput)
logSolution(countTotalRemovableRolls(parseGrid(input)))
