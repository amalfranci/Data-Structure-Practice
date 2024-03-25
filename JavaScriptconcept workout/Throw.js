function divide(a, b) {
  if (b === 0) {
    throw 'Cannot divide by zero'; // Throwing a string as an exception
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // Normal operation
  console.log(divide(5, 0));  // This will throw an exception
} catch (error) {
  console.error('Error:', error); // Catching and handling the exception
}
