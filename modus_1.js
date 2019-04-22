function cariModus(arr) {
  // you can only write your code here!

  var modus =0
  var counter = 0

  for (var i = 0; i < arr.length;i++){
  	for (var j = 0; j < arr.length; j++){
  		if(arr[i] === arr[j] && i !== j){
  			counter++
  			modus = arr[i]
  		}
  		if (counter === 0 ){
  			modus = -1
  		}
  		if (counter > 4){
  			modus = -1
  		}
  	}
  	}
return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1