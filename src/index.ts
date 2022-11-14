/**
 * The function that calculates factorial(3! = 3 * 2 * 1)
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-05
 */

import promptSync from 'prompt-sync'
/**
 * The function that calculates the factorial
 *
 * @param {number} someInt The biggest number in the factorial
 * @returns {number} someInt * factorial(someInt - 1) The number -1
 */
function factorial (someInt: number): number {
  // This function reverse a string, suing recursion
  if (someInt < 0) {
    return -1
  } else {
    if (someInt === 1) {
      return 1
    } else {
      return someInt * factorial(someInt - 1)
    }
  }
}

/**
 * The main function
 * This main function calls a recursive function.
 *
 */

const prompt = promptSync()

const someIntString = prompt('Please enter the factorial: ')
const someInt = parseInt(someIntString)

console.log('')
if (isNaN(someInt)) {
  console.log('Invalid number!')
} else if (someInt === 0) {
  console.log("The factorial for 0! is 1")
} else {
  console.log(`The factorial for ${someInt}! is ${factorial(someInt)}`)
}
console.log('\nDone.')
