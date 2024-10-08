
function isLeapYear(year) {
    
    if (year % 4 === 0) {
        
        if (year % 100 === 0) {
            
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true;
        }
    } else {
        return false; 
    }
}

const year = 2024;
const result = isLeapYear(year);

console.log(`${year} is ${result ? 'a leap year' : 'not a leap year'}.`);
