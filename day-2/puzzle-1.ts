import type { IdRangeTemplateLiteral, IdRange } from './utils'
import { getAllValuesInRange, parseIdRange } from './utils'
import { getPuzzleConfig, readInput } from '../utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(2, 1)

const summateAllInvalidIdsByMirroredStrings = (idRanges: Array<IdRange>) => {
  const allInvalidIds = idRanges.flatMap(getAllValuesInRange).filter((id) => {
    if (id.length % 2 !== 0) return false

    const midIndex = id.length / 2
    const firstHalf = id.slice(0, midIndex)
    const secondHalf = id.slice(midIndex)
    
    return firstHalf === secondHalf
  })

  return allInvalidIds.reduce((sum, id) => sum + parseInt(id, 10), 0)
}

// example
const inputExample = readInput<IdRangeTemplateLiteral>(import.meta.url, puzzleExampleInput, ',').map(parseIdRange)
logExampleSolution(summateAllInvalidIdsByMirroredStrings(inputExample), 1227775554)

// puzzle
const input = readInput<IdRangeTemplateLiteral>(import.meta.url, puzzleInput, ',').map(parseIdRange)
logSolution(summateAllInvalidIdsByMirroredStrings(input))
