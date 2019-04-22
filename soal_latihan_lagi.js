  
function soal2(param)
{
    // your code here
    var output = []
    
    if (param % 2 !== 1){
      for (var i = 0 ; i < Math.ceil(param/2);i++){
        var inside = []
        for (var j = 0; j < param;j++){
          if (Math.floor(param/2)-i <= j && Math.floor(param/2)+i >= j ){
            return output.push('*')
          } else{
            return output.push(' ')
          }
        }
      }

    }

    return output
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input