function groupAnimals(animals) {
  // you can only write your code here!
  function bubbleSort(arr) {

      var length = arr.length;
  
    for (var i = 0; i < length; i++) { 
       
        for (var j = 0; j < (length - i - 1); j++) { 
            
            if(arr[j] > arr[j+1]) {
                
                var tmp = arr[j];  
                arr[j] = arr[j+1]; 
                arr[j+1] = tmp;
            }
        }        
    }return arr;

}

var sort = bubbleSort(animals)
var output = [] 


for (var i = 0; i < sort.length;i++){
	var found = false
	for (var j = 0; j < output.length;j++){
		if (output[j][0][0] === sort[i][0]){
			found = true
			output[j].push(sort[i])
		}

	}
	if (found === false){
		output.push([sort[i]])
	}
}
return output

}




// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]