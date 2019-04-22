function angkaPalindrome(num) {
  // you can only write your code here!
while (true){

var output = '';
var str = String(num);

for (var i = str.length-1; i >= 0; i--){
	output += str[i]
}

if (output === str){
	return Number(num)
}
num ++
}
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

