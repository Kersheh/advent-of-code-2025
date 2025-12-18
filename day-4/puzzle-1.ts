import { getPuzzleConfig, readInput } from '../utils'
import { findAccessibleRolls, parseGrid } from './utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(4, 1)

const countAccessibleRolls = (lines: string[]): number =>
  findAccessibleRolls(parseGrid(lines)).length
  
// example
const inputExample = readInput<string>(import.meta.url, puzzleExampleInput)
logExampleSolution(countAccessibleRolls(inputExample), 13)

// puzzle
const input = readInput<string>(import.meta.url, puzzleInput)
logSolution(countAccessibleRolls(input))