export type IdRangeTemplateLiteral = `${number}-${number}`

export type IdRange = {
  start: number
  end: number
}

export const parseIdRange = (range: IdRangeTemplateLiteral): IdRange => {
  const [start, end] = range.split('-').map(Number)

  return { start, end }
}

export const getAllValuesInRange = (range: IdRange): Array<string> =>
  Array.from(
    { length: range.end - range.start + 1 },
    (_, i) => (range.start + i).toString()
  )