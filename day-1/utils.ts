const MIN_POSITION = 0
const MAX_POSITION = 99
export const STARTING_POSITION = 50
export const RANGE = MAX_POSITION - MIN_POSITION + 1

export type TurnTemplateLiteral = `${'L' | 'R'}${number}`

export type Turn = {
  direction: 'L' | 'R'
  distance: number
}

export const parseTurn = (move: TurnTemplateLiteral): Turn => {
  const direction = move.charAt(0) as 'L' | 'R'
  const distance = parseInt(move.slice(1), 10)

  return { direction, distance }
}

export const nextPosition = (turn: Turn, position = STARTING_POSITION) => {
  const moveDistance = turn.direction === 'R'
    ? position + turn.distance
    : position - turn.distance

  return ((moveDistance - MIN_POSITION) % RANGE + RANGE) % RANGE + MIN_POSITION
}
