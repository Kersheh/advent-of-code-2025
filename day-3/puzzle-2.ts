import { getPuzzleConfig, readInput } from '../utils'
import { BatteryBank, parseBatteryBank } from './utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(3, 2)

const summateLargestJoinedBatteryJoltages = (input: Array<BatteryBank>, numBatteries: number) => {
  return input.reduce((total, bank) => {
    const digits = bank.batteryJoltageRatings
    const n = digits.length
    
    const result = Array.from({ length: numBatteries }).reduce<{ value: bigint; startIndex: number }>(
      (acc, _, i) => {
        const remainingToSelect = numBatteries - i - 1
        const maxStartIndex = n - remainingToSelect - 1
        
        const { bestDigit, bestIndex } = digits
          .slice(acc.startIndex, maxStartIndex + 1)
          .reduce(
            (best, digit, j) => digit > best.bestDigit 
              ? { bestDigit: digit, bestIndex: acc.startIndex + j } 
              : best,
            { bestDigit: digits[acc.startIndex], bestIndex: acc.startIndex }
          )
        
        return {
          value: acc.value * BigInt(10) + BigInt(bestDigit),
          startIndex: bestIndex + 1
        }
      },
      { value: BigInt(0), startIndex: 0 }
    ).value
    
    return total + result
  }, BigInt(0))
}

// example
const inputExample = readInput<string>(import.meta.url, puzzleExampleInput).map(parseBatteryBank)
logExampleSolution(summateLargestJoinedBatteryJoltages(inputExample, 12), BigInt(3121910778619))

// puzzle
const input = readInput<string>(import.meta.url, puzzleInput).map(parseBatteryBank)
logSolution(summateLargestJoinedBatteryJoltages(input, 12))
