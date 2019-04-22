function urutkanAbjad(str) {
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
var output = ''
var arr = []
for (var i = 0; i < str.length;i++){
	arr.push(str[i])
	output = bubbleSort(arr)

}
return output.toString()

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
