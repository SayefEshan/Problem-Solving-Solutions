// Write a function to calculate the sum of the first N natural numbers.
// In this problem, you need to implement the sum_of_natural_numbers function and calculate the sum of the first N natural numbers. The function should take an integer n as input and return the sum of the numbers from 1 to N.
// Make sure to consider both the time complexity (how long it takes to run the function) and the space complexity (how much memory is used) in your solution.
// Hint: You can use a simple loop to add the numbers from 1 to N iteratively.Think about the time complexity of the loop and whether there is any additional space used to store variables during the calculation.

function sumOfNaturalNumbers(n) {
  let totalSum = 0;

  for (let i = 1; i <= n; i++) {
    totalSum += i;
  }

  return totalSum;
}

function sumOfNaturalNumbers(n) {
  const totalSum = (n * (n + 1)) / 2;

  return totalSum;
}
