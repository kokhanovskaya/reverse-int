module.exports = function reverse (n) {
  let strN = Math.abs(n).toString();

  let reversedStr = '';
  for (let i = strN.length - 1; i >= 0; i--) {
    reversedStr += strN[i];
    }
  return reversedStr
}
