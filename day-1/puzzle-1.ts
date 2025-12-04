import type { TurnTemplateLiteral, Turn } from './utils'
import { STARTING_POSITION, nextPosition, parseTurn } from './utils'
import { getPuzzleConfig, readInput } from '../utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(1, 1)

const executeAllTurnsAndCountZeroPositions = (turns: Array<Turn>) => {
  const x = turns.reduce((acc, val) => {
    const next = nextPosition(val, acc.position)

    return {
      position: next,
      zeroPositionCounter: next === 0 ? acc.zeroPositionCounter + 1 : acc.zeroPositionCounter
    }
  }, { position: STARTING_POSITION, zeroPositionCounter: 0 })

  return x.zeroPositionCounter
}

// example
const inputExample = readInput<TurnTemplateLiteral>(import.meta.url, puzzleExampleInput).map(parseTurn)
logExampleSolution(executeAllTurnsAndCountZeroPositions(inputExample), 3)

// puzzle
const input = readInput<TurnTemplateLiteral>(import.meta.url, puzzleInput).map(parseTurn)
logSolution(executeAllTurnsAndCountZeroPositions(input))
