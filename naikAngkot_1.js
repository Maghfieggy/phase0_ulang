function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var awal = 0
  var akhir = 0
  var output = []
  // if (arrPenumpang.length === 0){
  // 	return []
  // }

  for (var i = 0 ; i < arrPenumpang.length; i++){
  	for (var j = 0 ; j < rute.length ; j++){
  		if(arrPenumpang[i][1] === rute[j]){
  			 awal = j
  		} if (arrPenumpang[i][2] === rute[j]){
  			 akhir = j
  		}
  	}

  	output.push({
  			penumpang : arrPenumpang[i][0],
  			naikDari : arrPenumpang[i][1],
  			tujuan : arrPenumpang[i][2],
  			bayar : Math.abs((akhir - awal) * 2000)
  		})
  }
  return output

}

//TEST CASE
console.log(naikAngkot([['fira', 'A', 'F'], ['Icha', 'A', 'D']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]