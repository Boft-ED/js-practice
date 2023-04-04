function highestFrequency(array) {
    const map = {}
    let max = 0
    let maxstr = array[0]

    for (let i = 0;  i < array.length; i++) {
        const current = array[i]
        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }

        if (map[current] > max) {
            max = map[current]
            maxstr = current
        }
    }
    return maxstr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
