function isPalindrome(s) {
	var noSpace = s.split(" ").join("");
  stringReverse = noSpace.split("").reverse().join("");
  return noSpace == stringReverse;
}

module.exports = isPalindrome;
