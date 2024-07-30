countCharacters = (str) => {
  let characterCount = {}
  for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i)
      if (!characterCount[ch]) {
          characterCount[ch] = 1
      } else {
          characterCount[ch]++
      }
  }
  console.log("Occurence of each letter in the given string is: ", characterCount)
}

let str = "hello world"








const longestSubstring = (word) => {
  let longest = 0;
  for (let i = 0; i < word.length; i++) {
      let currentString = new Set();
      for (let j = i; j < word.length; j++) {
          if (currentString.has(word[j])) {
              break;
          } else {
              currentString.add(word[j]);
          }
      }
      longest = Math.max(longest, currentString.size);
  }
  return longest;
};

let word = "abcabcbb";
console.log("Length of longest substring without repeating characters: ", longestSubstring(word));
