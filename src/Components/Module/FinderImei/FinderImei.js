export function calculateImeiCheckDigit(imei) {
    // Convert IMEI to an array of integers
    let digits = imei.split('').map(Number);
    
    // Initialize an array to hold the processed digits
    let processedDigits = [];
    
    // Process every second digit from right to left
    for (let i = 0; i < digits.length; i++) {
        if ((digits.length - i) % 2 === 0) { // Even position from the right
            let doubledDigit = digits[i] * 2;
            if (doubledDigit > 9) {
                doubledDigit -= 9;
            }
            processedDigits.push(doubledDigit);
        } else {
            processedDigits.push(digits[i]);
        }
    }
    
    // Sum all the processed digits together
    let totalSum = processedDigits.reduce((acc, val) => acc + val, 0);
    
    // Calculate the check digit
    let checkDigit = (10 - (totalSum % 10)) % 10;
    
    return checkDigit;
}

// Example usage
// let imeiWithoutCheckDigit = "49015420323751"; // This should be a 14-digit IMEI without the check digit
// let checkDigit = calculateImeiCheckDigit(imeiWithoutCheckDigit);
// console.log(checkDigit); // Output: the calculated check digit