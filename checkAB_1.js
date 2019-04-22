function checkAB(num) {
  // you can only write your code here!
  var split = num.split('')
  // console.log(split)
  for ( var i = 0 ; i < split.length ; i ++){
  	// console.log(split[i])

  	if (split[i] === 'a' && split[i+4] === 'b' ){
  		return true
  	}

  	if (split[i] === 'b' && split[i+4] === 'a'){
  		return true
  	}
 	
  }
  return false


}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false