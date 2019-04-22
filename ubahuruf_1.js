function ubahHuruf(kata) {
  // you can only write your code here!

  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var output = ''

 for (var i = 0 ; i < kata.length; i++){
 	var indexOf = abjad.indexOf(kata[i])
 	// console.log(output)
 	output += abjad[indexOf+1]

 }
  	
  return output

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu