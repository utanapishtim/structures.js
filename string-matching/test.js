const naive = require('./naive')

const ALGOS = [naive]

const TESTS = [
  ["ACCATGCA", "CAT", 2],
  ["CATTGA", "CAT", 0],
  ["GGCACACATG", "CACAT", 4],
  ["CAAAT", "CAT", -1],
]

let assert = (bool) => {
  if (!bool) throw new Error('ASSERTION ERROR!')
}

assert(ALGOS.every((algo) => TESTS.every(([source, string, expected]) => algo(source, string) === expected)))


console.log(`${ALGOS.length * TESTS.length} tests passing!`)
