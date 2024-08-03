/**
 * Calculates the sum of all elements in an array using the reduce method.
 * 
 * @param {Array<number>} numbers - The array of numbers to sum up.
 * @param {number} [initialValue=0] - The initial value of the accumulator.
 * @returns {number} The sum of all elements in the array.
 * 
 * @example
 * const numbers = [1, 3, 5, 7];
 * const sum = sumArray(numbers, 10);
 * console.log(sum); // Output: 26
 */
function sumArray(numbers, initialValue = 0) {
  return numbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return (accumulator + currentValue);
  }, initialValue);
}

// Example
const newNumbers = [1, 3, 5, 7];
const newSum = sumArray(newNumbers, 10);
console.log(newSum); // Output: 26