// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''))
    return reversed * Math.sign(n) //sign untuk nentuin n itu negatif, positif atau zero, klo minus bakal di kali -1 berarti
}
// function reverseInt(n) {
//     const reverse = () => {
//         return parseInt(n.toString().split('').reverse().join(''))
//     }
//     return n < 0 ? -reverse() : reverse()
// }
module.exports = reverseInt;
