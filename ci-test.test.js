const {sum} = require('./server/ci-test')

test('sum 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})