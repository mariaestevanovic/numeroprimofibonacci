function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function isFibonacciPrime(num) {
  const fibonacciNumbers = [0, 1];
  let current = 1;

  while (current <= num) {
    if (isPrime(current) && current === num) {
      return true;
    }

    const next = fibonacciNumbers[0] + fibonacciNumbers[1];
    fibonacciNumbers[0] = fibonacciNumbers[1];
    fibonacciNumbers[1] = next;
    current = next;
  }

  return false;
}

function checkFibonacciPrime() {
  const numberInput = document.getElementById('number');
  const resultElement = document.getElementById('result');
  const number = parseInt(numberInput.value);

  if (isFibonacciPrime(number)) {
    resultElement.textContent = number + ' é um número primo de Fibonacci.';
  } else {
    resultElement.textContent = number + ' não é um número primo de Fibonacci.';
  }
}
