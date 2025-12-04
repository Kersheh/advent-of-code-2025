import { readFileSync } from 'fs'

export const readInput = <T>(fileUrl: string, filename: string, delimiter: string | RegExp = '\n'): Array<T> => {
  const input: string = readFileSync(new URL(filename, fileUrl), 'utf-8')
  return input.trim().split(delimiter) as Array<T>
}

const logExampleSolution = <T>(dayNum: number, puzzleNum: number, answer: T, expectedAnswer: T) => {
  console.debug(`Day ${dayNum} - Puzzle Solution ${puzzleNum} [Example]`)
  console.debug(answer)
  console.assert(answer === expectedAnswer, `Expected ${expectedAnswer} but got ${answer}`)
}

const logSolution = <T>(dayNum: number, puzzleNum: number, answer: T) => {
  console.debug(`Day ${dayNum} - Puzzle Solution ${puzzleNum}`)
  console.log(answer)
}

export const getPuzzleConfig = (dayNum: number, puzzleNum: number) => ({
  puzzleExampleInput: `./input/puzzle-${puzzleNum}-example.txt`,
  puzzleInput: `./input/puzzle-${puzzleNum}.txt`,
  logExampleSolution: <T>(answer: T, expectedAnswer: T) => logExampleSolution(dayNum, puzzleNum, answer, expectedAnswer),
  logSolution: <T>(answer: T) => logSolution(dayNum, puzzleNum, answer)
})