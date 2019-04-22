function loop(i){
	console.log(i)

	if (i === 1){
		console.log('stop')
	} else{
		i--
		loop(i)
	}

}

loop(10)