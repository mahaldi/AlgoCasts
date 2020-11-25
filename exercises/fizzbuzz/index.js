// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(let current = 1 ; current <= n ; current++) {
        let printed = null
        if (current % 3 === 0 && current % 5 === 0) printed = 'fizzbuzz'
        else if(current % 5 === 0) printed = 'buzz'
        else if(current % 3 === 0) printed = 'fizz'
        else printed = current
        console.log(printed)
    }
}

module.exports = fizzBuzz;
