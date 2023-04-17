let addToZero = (array) => {
  let value = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] + array[j] === 0) {
          value = true;
        }
      }
    }
  }
  console.log(value);
};

addToZero([1, 2, 3, 4, 5, 6, -7]);
addToZero([]);
// -> False
addToZero([1]);
// -> False
addToZero([1, 2, 3]);
// -> False
addToZero([1, 2, 3, -2]);
// -> True


function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}


const findLongestWord = (words) => {
  let longestWordLength = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length
    }
  }
  return longestWordLength
}
console.log(findLongestWord(["hi", "hello"]))
