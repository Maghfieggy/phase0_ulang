function spiral2(num){

var result = []

for (var i = 0; i < num; i++){
	var mulai = i + 1
	var inside = []
	for (var j = 0; j < num; j++){
		inside.push(mulai)
		mulai += num

	}
	result.push(inside)

}

return result 

}


console.log(spiral2(3))