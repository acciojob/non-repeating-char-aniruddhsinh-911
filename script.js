function firstNonRepeatedChar(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('abcde'));   // 'a'
console.log(firstNonRepeatedChar(''));        // null

    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('abcde'));   // 'a'
console.log(firstNonRepeatedChar(''));        // null

