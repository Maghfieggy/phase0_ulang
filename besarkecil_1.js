function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var tmp = ''

  for (var i = 0; i < kalimat.length; i++){
  	
		for (var j = 0 ; j < uppercase.length;j++ ){
			if (kalimat[i] === uppercase[j] ){
				tmp += lowercase[j]
			} else if (kalimat[i] === lowercase[j]){
				tmp += uppercase[j]
			}
		}  

  	
  	
  }
  return tmp
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"