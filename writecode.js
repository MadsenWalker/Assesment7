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

// complexity is a 0(n^2)

function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}

//complexity ) 0(n)

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
//complexity 0(n)

function isPangram(str)
{
    let mark = new Array(26).fill(false);
    let index;
 
    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z')
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);

        else if ('a' <= str[i] && str[i] <= 'z')
             index = str.charCodeAt(i) - 'a'.charCodeAt(0);

        else continue;
 
        mark[index] = true;
    }

    for (let i = 0; i <= 25; i++)
        if (mark[i] == false)
            return false;

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//complexity 0(n)