var characters =
  [
    { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
    { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
    { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
    { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
    { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
    { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
    { id: 726, name: 'Wanijima, Agito', role: 'Supporting', anime: 'Air gear' }
  ]
//output 
// 
//   {
//     Role: {
//       Main: ['Anna Liebert', 'Johan Liebert', 'Kenzou Tenma', 'Edward Elric', 'Alphonse Elric'],
//       Supporting: ['Hugo Bernhardt', 'Agito Wanijima']
//     },
//     Title: {
//       Monster: [
//         { id: 720, name: 'Liebert, Anna' },
//         { id: 721, name: 'Liebert, Johan' },
//         { id: 722, name: 'Tenma, Kenzou' },
//         { id: 723, name: 'Bernhardt, Hugo' }
//       ],
//       FMA: [
//         { id: 724, name: 'Elric, Edward' },
//         { id: 725, name: 'Elric, Alphonse' },
//       ],
//       "Air Gear": [
//         { id: 726, name: 'Wanijima, Agito' }
//       ]
//     }
//   }
function animeReport(arr){
	var object = {
		Role : {},
		Title : {}
	}

	for (var i = 0 ; i < arr.length ; i ++){
		var currentrole = arr[i].role
		var currentname = arr[i].name
		var split = currentname.split('')
		var currentanime = arr[i].anime
		var currentID = arr[i].id

		if (object.Role[currentrole] === undefined){
			object.Role[currentrole] = []
		}
		object.Role[currentrole].push(currentname)
		
		if (object.Title[currentanime] === undefined){
			object.Title[currentanime] = []
		}
		object.Title[currentanime].push({
			id : currentID,
			name : currentname
		})

		}


		return object

}
console.log(JSON.stringify(animeReport(characters),null,4))


function palindrome(array){
  var arr = []
  for (var r = array.length - 1; r >= 0; r--){
    arr.push(array[r])
  }
  return arr.join(', ')
}
