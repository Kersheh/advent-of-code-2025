import type { IdRangeTemplateLiteral, IdRange } from './utils'
import { getAllValuesInRange, parseIdRange } from './utils'
import { getPuzzleConfig, readInput } from '../utils'

const {
  puzzleExampleInput,
  puzzleInput,
  logExampleSolution,
  logSolution
} = getPuzzleConfig(2, 2)

const summateAllInvalidIdsByExhaustiveRepeatingSubStrings = (idRanges: Array<IdRange>) => {
  const allInvalidIds = idRanges.flatMap(getAllValuesInRange).filter((id) =>
    Array.from({ length: Math.floor(id.length / 2) }, (_, i) => i + 1).some((subStrLength) => {
      if (id.length % subStrLength !== 0) return false

      const repetitions = id.length / subStrLength
      if (repetitions < 2) return false

      return id.slice(0, subStrLength).repeat(repetitions) === id
    })
  )
  
  return allInvalidIds.reduce((sum, id) => sum + parseInt(id, 10), 0)
}

// example
const inputExample = readInput<IdRangeTemplateLiteral>(import.meta.url, puzzleExampleInput, ',').map(parseIdRange)
logExampleSolution(summateAllInvalidIdsByExhaustiveRepeatingSubStrings(inputExample), 4174379265)

// puzzle
const input = readInput<IdRangeTemplateLiteral>(import.meta.url, puzzleInput, ',').map(parseIdRange)
logSolution(summateAllInvalidIdsByExhaustiveRepeatingSubStrings(input))
