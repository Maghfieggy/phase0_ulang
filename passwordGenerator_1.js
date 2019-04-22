function changeVocals (str) {
  //code di sini
  var abjad1 = 'aiueoAIUEO'
  var abjad2 = 'bjvfpBJVFP'
  var output = ''

  for (var i = 0 ; i < str.length ; i++){
  	var found = false
  	for (var j = 0 ; j < abjad1.length; j++){
  		if (str[i] === abjad1[j]){
  			output += abjad2[j]
  			found = true
  		}
  	}
  	if (found === false){
  		output += str[i]
  	}

  	

  }
  return output
}

function reverseWord (str) {
  //code di sini
  var result = ''
  for (var i = str.length -1 ; i >= 0 ; i--){
  	result += str[i]

  }
}

function setLowerUpperCase (str) {
  //code di sini
  var output1 = ''


  for (var i = 0 ; i < str.length ; i++){
  	
  		if (str[i] === str[i].toLowerCase()){
  			output1 += str[i].toUpperCase()
  		} else if (str[i] === str[i].toUpperCase()){
  			output1 += str[i].toLowerCase()
  		}
  	
  }
  return output1

}

function removeSpaces (str) {
  //code di sini
  output2 = ''
  for (var i = 0 ; i < str.length ; i++){
  	if (str[i] != ' '){
  		output2 += str[i]

  	}
  }
  return output2
}

function passwordGenerator (name) {
  //code di sini

  if (name.length < 5){
  	return 'Minimal Karakter yang diinputkan adalah 5 karakter'
  } else {
  	return (changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name)))))
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'