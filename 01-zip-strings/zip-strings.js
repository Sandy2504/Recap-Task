function zipStrings(strA, strB) {
  let result = "";
  let maxLengthA = strA.length;
  let maxLengthB = strB.length;
  let maxLength = Math.max(maxLengthA, maxLengthB);

  for (let i = 0; i < maxLength; i++) {
    if (i < maxLengthA) {
      result += strA[i];
    }
    if (i < maxLengthB) {
      result += strB[i];
    }
  }
  return result;
}

console.log(zipStrings("abc", "123"));

console.log(zipStrings("abc", "1"));

console.log(zipStrings("a", "123"));

console.log(zipStrings("", "123"));

console.log(zipStrings("abc", ""));
