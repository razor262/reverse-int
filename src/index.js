let one = 0
let two = 0
let tree = 0
let four = 0

module.exports = function reverse(n) {
    one = String(n)
    two = one.split('')
    tree = two.reverse()
    four = tree.join('')
    return Number(four)
};

/* If we need loop

    let reversedNumber = 0;
    let reminder = 0;
    let modulusOfN = n > 0 ? n : -n;

    while (modulusOfN > 0) {
        reminder = modulusOfN % 10;
        reversedNumber = reversedNumber * 10 + reminder;
        modulusOfN = Math.floor(modulusOfN / 10);
    }

    return reversedNumber;
*/
