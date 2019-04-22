//push manual

var kata = ['Maghfi','Gifarry']

kata[kata.length] = 'Djayapratama'

console.log(kata)

// unshift manual

function unshiftmanual(arr,item)
{

var newArr = [item]
for (var i = 0; i < arr.length; i++){
	newArr.push(arr[i])
}
return newArr
}
console.log(unshiftmanual(['Gifarry','Djayapratama'],'Maghfi'))

// indeOf manual

function indexOfmanual (arr,item){

	var output = -1

	for (var i = 0; i < arr.length; i++){
		if (arr[i] === item){
			output = i
			break;
		}
	}
return output;

}



