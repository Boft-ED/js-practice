function isUnique(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) != i) {
            return false
        }
    }
    return true
    // return new Set(str).size === str.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
