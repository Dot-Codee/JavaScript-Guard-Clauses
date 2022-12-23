# JavaScript-Guard-Clauses

A guard clause is a programming construct that allows you to exit a function early if certain conditions are not met. It is a concise and effective way to handle edge cases and improve the readability of your code.

Let's start by looking at `example1` from our repository in Javascript:

```
function divide(x, y) {
  if (y === 0) {
    return;
  }

  return x / y;
}

console.log(divide(10, 2)); // Outputs 5
console.log(divide(10, 0)); // Outputs undefined
```

In this example, we have a function called "divide" that takes two arguments: "x" and "y". The function has an "if" statement that checks if the value of "y" is equal to 0. If it is, the function returns immediately without performing the division.

This is an example of a guard clause. The "if" statement acts as a guard, preventing the function from continuing if the condition is not met. Guard clauses are often used to prevent errors and improve the reliability of a function.

Guard clauses can be used to check for other conditions as well. Here's usage in `example2`:

```
function findIndex(array, value) {
  if (!array || !array.length) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex([1, 2, 3], 2)); // Outputs 1
console.log(findIndex([], 2)); // Outputs -1
console.log(findIndex(null, 2)); // Outputs -1
```

In this example, we have a function called "findIndex" that takes an array and a value as arguments. The function has two guard clauses: one that checks if the "array" argument is null or an empty array, and one that checks if the "array" argument is not an array. If either of these conditions is true, the function returns -1 immediately.

Guard clauses are a useful tool in Javascript that can help you improve the readability and reliability of your code. I hope this document has given you a good understanding of what guard clauses are and how to use them! **Happy coding**!


