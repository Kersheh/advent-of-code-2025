import { getPuzzleConfig, readInput } from '../utils'
import { BatteryBank, parseBatteryBank } from './utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(3, 1)

const summateLargestPairBatteryJoltages = (input: Array<BatteryBank>) => {
  return input.reduce((total, bank) => {
    const maxJoltage = bank.batteryJoltageRatings
      .flatMap((first, i) => 
        bank.batteryJoltageRatings.slice(i + 1).map(second => first * 10 + second)
      )
      .reduce((max, joltage) => Math.max(max, joltage), 0)
    
    return total + maxJoltage
  }, 0)
}

// example
const inputExample = readInput<string>(import.meta.url, puzzleExampleInput).map(parseBatteryBank)
logExampleSolution(summateLargestPairBatteryJoltages(inputExample), 357)

// puzzle
const input = readInput<string>(import.meta.url, puzzleInput).map(parseBatteryBank)
logSolution(summateLargestPairBatteryJoltages(input))
