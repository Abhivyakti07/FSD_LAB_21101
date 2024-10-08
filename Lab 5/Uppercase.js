// Function to check if the first character of a string is uppercase
function isFirstCharUppercase(str) {
    // Check if the string is not empty
    if (str.length === 0) {
        return false; // Return false for empty strings
    }
    
    // Get the first character of the string
    const firstChar = str.charAt(0);

    // Check if the first character is uppercase
    return firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase();
}

// Example usage
const testString1 = "Hello world!";
const testString2 = "hello world!";
const testString3 = "";

console.log(`'${testString1}' has an ${isFirstCharUppercase(testString1) ? 'uppercase' : 'not uppercase'} first character.`);
console.log(`'${testString2}' has an ${isFirstCharUppercase(testString2) ? 'uppercase' : 'not uppercase'} first character.`);
console.log(`'${testString3}' has an ${isFirstCharUppercase(testString3) ? 'uppercase' : 'not uppercase'} first character.`);
