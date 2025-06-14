// Iterate over each character in the input string
for (let i = 0; i < inputString.length; i++) {
    // If the character is a vowel, increment the counter
    if (vowels.includes(inputString[i])) {
        vowelCount++;
    }
}

return vowelCount;
}

// Example usage:
const inputString = "Hello, this is an example string.";
console.log(countVowels(inputString));