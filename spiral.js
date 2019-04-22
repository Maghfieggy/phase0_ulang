function spiral(n){

var angka = '123456789';
var arr = []
var arr1 = []
var counter = angka.length -1


for (var i = 0; i < n; i++){
  arr = []
  for (var j = 0; j < n; j++){
    arr.push(Number(angka[counter]))
    counter--

    if (arr.length === n){
    	arr1.push(arr)
    }
    
    
  }


}
  console.log(arr1)
}

spiral(3);