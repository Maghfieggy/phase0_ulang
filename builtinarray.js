var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){

// console.log(input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung'))
input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
input.splice(4,5, 'pria','SMA Internasional Metro')
// console.log(input);

var tanggal = ''
tanggal = input[3].split('/')
// console.log(tanggal)

var join = tanggal.join('-');
// console.log(join)

var slice = input[1].slice(0,15)
// console.log(slice)



console.log(input);
switch(tanggal[1]){
	case '01' : 
	console.log('Januari')
	break;
	case '02' : 
	console.log('Februari')
	break;
	case '03' : 
	console.log('Maret')
	break;
	case '04' : 
	console.log('April')
	break;
	case '05' : 
	console.log('Mei')
	break;
	case '06' : 
	console.log('Juni')
	break;
	case '07' : 
	console.log('July')
	break;
	case '08' : 
	console.log('Agustus')
	break;
	case '09' : 
	console.log('September')
	break;
	case '10' : 
	console.log('October')
	break;
	case '11' : 
	console.log('November')
	break;
	case '12' : 
	console.log('Desember')
	break;

}
console.log(tanggal)
console.log(join)
console.log(slice)

}

dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */