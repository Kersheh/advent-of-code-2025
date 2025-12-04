import type { TurnTemplateLiteral, Turn } from './utils'
import { STARTING_POSITION, RANGE, parseTurn, nextPosition } from './utils'
import { getPuzzleConfig, readInput } from '../utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(1, 2)

const countZeroCrossings = (start: number, turn: Turn) => {
  const { distance, direction } = turn

  if (direction === 'R') {
    const distanceToFirstZero = start === 0 ? RANGE : (RANGE - start)

    if (distance < distanceToFirstZero) return 0

    return 1 + Math.floor((distance - distanceToFirstZero) / RANGE)
  } else {
    const distanceToFirstZero = start === 0 ? RANGE : start

    if (distance < distanceToFirstZero) return 0

    return 1 + Math.floor((distance - distanceToFirstZero) / RANGE)
  }
}

const executeAllTurnsAndCountZeroCrossings = (turns: Array<Turn>) => {
  const x = turns.reduce((acc, val) => {
    return {
      position: nextPosition(val, acc.position),
      zeroPositionCrossedCounter: acc.zeroPositionCrossedCounter + countZeroCrossings(acc.position, val)
    }
  }, { position: STARTING_POSITION, zeroPositionCrossedCounter: 0 })

  return x.zeroPositionCrossedCounter
}

// example puzzle 2
const inputExample = readInput<TurnTemplateLiteral>(import.meta.url, puzzleExampleInput).map(parseTurn)
// console.debug(inputExample)
logExampleSolution(executeAllTurnsAndCountZeroCrossings(inputExample), 6)

// puzzle 2
const input = readInput<TurnTemplateLiteral>(import.meta.url, puzzleInput).map(parseTurn)
// console.debug(input)
logSolution(executeAllTurnsAndCountZeroCrossings(input))
