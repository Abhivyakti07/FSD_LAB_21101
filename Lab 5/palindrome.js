
function isPalindrome(str) {
    const normalizedStr = str
        .replace(/[^a-zA-Z0-9]/g, '') 
        .toLowerCase(); 

    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}


const testString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(testString);

console.log(`'${testString}' is ${result ? 'a palindrome' : 'not a palindrome'}.`);
