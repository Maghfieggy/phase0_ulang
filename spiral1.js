function spiral1(num){

var counter = 0
var result = [];

for (var i = 0; i < num; i++){
	var inside = []
	for (var j = 0; j < num; j++){
		counter ++
		if (i % 2 === 1){
			inside.unshift(counter)
		} else {
			inside.push(counter)
		}
	}
	result.push(inside)
}

return result
}


console.log(spiral1(3))



