/*
 * Complete the 'uniqueArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */
//const ar = [1, 2, 2, 3, 4, 4]

function uniqueArraySum(ar) {
const uniqueNumbers = [...new Set(ar)];
const sumUniqueElements = uniqueNumbers.reduce((acc, num) => acc + num,0);
return sumUniqueElements;
}

module.exports = uniqueArraySum;
