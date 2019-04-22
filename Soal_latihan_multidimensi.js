/* 
====================
Count Place Distance
====================

[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti

[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 

Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/


function countDistance(arr, money) {
  // code anda disini
  var jarak = 0
  var awal 
  var akhir
  var sisa_uang = 0
  var jumlah_x = 0

  var found = false
  for (var i = 0; i < arr.length;i++){
    for (var j = 0; j < arr[i].length;j++){
      jarak++
      if (arr[i][j] === 'o' && found == false ){
        awal = jarak
        found = true

      }
      if (arr[i][j] === 'o' && found == true){
        akhir = jarak
      }
      var jaraktempuh = akhir - awal -1
     if (arr[i][j] === 'x'){
      jumlah_x++
      

    } 

  }

  var biaya = jumlah_x * 10000
  sisa_uang = money - biaya;
  if (sisa_uang <= 0){
        return 'uang anda habis ' + 'jarak tempuh : ' + Math.abs(jaraktempuh * 10) + 'Km'
      }

  }

return 'Sisa uang : ' + sisa_uang + ' jarak tempuh : ' + jaraktempuh * 10 + 'Km' 
}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */

console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/

console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/