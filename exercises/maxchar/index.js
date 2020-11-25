// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {}
    let max = 0
    let charMax = ''
    
    for(let char of str) {
        if(charMap[char]) charMap[char]++
        else charMap[char] = 1
    }

    for(let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char]
            charMax = char
        }
    }
    return charMax
}
// function maxChar(str) {
//     let objected = {}
//     str.toString().split('').forEach((character) => {
//         objected[character] = {
//             char: character.toString(),
//             total: 0
//         }
//     })
//     str.toString().split('').forEach((character) => {
//         if(character === objected[character].char) {
//             objected[character].total += 1
//         }
//     })
//     let totalTheMost = 0
//     const entries = Object.entries(objected)
//     for(const [char, value] of entries) {
//         if(value.total > totalTheMost) totalTheMost = value.char
//     }
//     return totalTheMost
// }
module.exports = maxChar;
