// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to find prime numbers between two inputs
  function findPrimes() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
  
    // Clear previous results
    errorDiv.innerHTML = '';
    resultDiv.innerHTML = '';
  
    // Check for errors
    if (isNaN(num1) || isNaN(num2)) {
      errorDiv.innerHTML = '<p>Please enter both numbers.</p>';
      return;
    }
  
    if (num1 >= num2) {
      errorDiv.innerHTML = '<p>First number should be smaller than second number.</p>';
      return;
    }
  
    // Find and display prime numbers between num1 and num2
    let primes = [];
    for (let i = num1 + 1; i < num2; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    if (primes.length > 0) {
      resultDiv.innerHTML = '<p>Prime numbers between ' + num1 + ' and ' + num2 + ': ' + primes.join(', ') + '</p>';
    } else {
      resultDiv.innerHTML = '<p>No prime numbers found between ' + num1 + ' and ' + num2 + '.</p>';
    }
  }
  