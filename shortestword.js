// Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.
//Test Case :- var s = "Dogecoin Waves Bitcoin Ripple Mine Lisk MadeSafeCoin BTC Ethereum LiteCoin Ripple Ethereum Lisk Ripple 21inc Factom" Solution :- 3 

var s = s.split(" ")
var lengthArray = [];
for (var index = 0; index < s.length; index++) {
			lengthArray.push(s[index].length)	
		}	
  lengthArray = lengthArray.sort(function(a, b) {
  return a - b;
});
	System.log(lengthArray);
