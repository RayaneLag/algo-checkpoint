// checkpoint algo2

function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }

  if (word[0] === word[word.length]) {
    return isPalindrome(word.slice(1, -1));
  } else {
    return false;
  }
}

const word1 = "radar";
console.log(`${word1} is a palindrome:`, isPalindrome(word1));

const word2 = "hello";
console.log(`${word2} is a palindrome:`, isPalindrome(word2));
