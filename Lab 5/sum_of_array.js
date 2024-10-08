
function sumArray(arr) {
    // Initialize the sum to 0
    let sum = 0;
    
    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Add the current element to the sum
        sum += arr[i];
    }
    
    // Return the total sum
    return sum;
}


const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);

console.log(`The sum of the array is: ${totalSum}`);
