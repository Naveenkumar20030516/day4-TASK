console.log("      Doing the below programs in anonymous function & IIfe               ");
(function() {
    // Print odd numbers in an array
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Print odd numbers in an array:");
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
      }
    }
  
    // Convert all the strings to title caps in a string array
    let strings = ["hello", "world", "javascript"];
    console.log("Convert all the strings to title caps in a string array:");
    let titleCaps = [];
    for (let i = 0; i < strings.length; i++) {
      let words = strings[i].split(' ');
      let capitalizedWords = [];
      for (let j = 0; j < words.length; j++) {
        let word = words[j];
        let titleCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(titleCaseWord);
      }
      titleCaps.push(capitalizedWords.join(' '));
    }
    console.log(titleCaps);
  
    // Sum of all numbers in an array
    let sumNumbers = [1, 2, 3, 4, 5];
    console.log("Sum of all numbers in an array:");
    let sum = 0;
    for (let i = 0; i < sumNumbers.length; i++) {
      sum += sumNumbers[i];
    }
    console.log(sum);
  
    // Return all the prime numbers in an array
    let primeNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Return all the prime numbers in an array:");
    let primes = [];
    
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    }
  
    for (let i = 0; i < primeNumbers.length; i++) {
      if (isPrime(primeNumbers[i])) {
        primes.push(primeNumbers[i]);
      }
    }
    console.log(primes);
  
    // Return all the palindromes in an array
    let wordsArray = ["hello", "level", "world", "radar"];
    console.log("Return all the palindromes in an array:");
    let palindromes = [];
    
    function isPalindrome(str) {
      let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      let reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  
    for (let i = 0; i < wordsArray.length; i++) {
      if (isPalindrome(wordsArray[i])) {
        palindromes.push(wordsArray[i]);
      }
    }
    console.log(palindromes);
  
    // Return median of two sorted arrays of the same size
    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    console.log("Return median of two sorted arrays of the same size:");
    
    function findMedian(arr1, arr2) {
      let mergedArray = [...arr1, ...arr2].sort(function(a, b) {
        return a - b;
      });
      let length = mergedArray.length;
      let median;
      if (length % 2 === 0) {
        let mid1 = mergedArray[length / 2 - 1];
        let mid2 = mergedArray[length / 2];
        median = (mid1 + mid2) / 2;
      } else {
        median = mergedArray[Math.floor(length / 2)];
      }
      return median;
    }
  
    let median = findMedian(arr1, arr2);
    console.log(median);
  
    // Remove duplicates from an array
    let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
    console.log("Remove duplicates from an array:");
    let uniqueArray = [];
    for (let i = 0; i < duplicateArray.length; i++) {
      if (uniqueArray.indexOf(duplicateArray[i]) === -1) {
        uniqueArray.push(duplicateArray[i]);
      }
    }
    console.log(uniqueArray);
  
    // Rotate an array by k times
    let originalArray = [1, 2, 3, 4, 5];
    let k = 2;
    console.log("Rotate an array by k times:");
    let rotatedArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      let newIndex = (i + k) % originalArray.length;
      rotatedArray[newIndex] = originalArray[i];
    }
    console.log(rotatedArray);
  })();
console.log("               ARROW FUNCTION          ");
  (() => {
    // Print odd numbers in an array
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Print odd numbers in an array:");
    numbers.forEach((number) => {
      if (number % 2 !== 0) {
        console.log(number);
      }
    });
  
    // Convert all the strings to title caps in a string array
    const strings = ["hello", "world", "javascript"];
    console.log("Convert all the strings to title caps in a string array:");
    const titleCaps = strings.map((str) =>
      str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    console.log(titleCaps);
      
    // Sum of all numbers in an array
    const sumNumbers = [1, 2, 3, 4, 5];
    console.log("Sum of all numbers in an array:");
    const sum = sumNumbers.reduce((total, num) => total + num, 0);
    console.log(sum);
  
    // Return all the prime numbers in an array
    const primeNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Return all the prime numbers in an array:");
    
    const isPrime = (num) => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    };
  
    const primes = primeNumbers.filter((num) => isPrime(num));
    console.log(primes);
  
    // Return all the palindromes in an array
    const wordsArray = ["hello", "level", "world", "radar"];
    console.log("Return all the palindromes in an array:");
    
    const isPalindrome = (str) => {
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      const reversedStr = cleanedStr.split("").reverse().join("");
      return cleanedStr === reversedStr;
    };
  
    const palindromes = wordsArray.filter((word) => isPalindrome(word));
    console.log(palindromes);
  })();
