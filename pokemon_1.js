var pokemonList2 = [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 99, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
]

function gottaGroupEmAll(list) {

  var output = {}

  for (var i = 0 ; i < list.length ; i ++){
    var currentType = list[i].type
    var currentName = list[i].name
    var currentAttack = list[i].status.attack
    var status = list[i].status.hp + list[i].status.defense + currentAttack

    if (output[currentType] === undefined){
      output[currentType] = {
        type : currentType,
        pokemonList : [],
        highestAttack : {name : currentName, attack : currentAttack},
        bestStatus : {}
      }
    }
     output[currentType].pokemonList.push(currentName) 
     if (currentAttack > output[currentType].highestAttack.attack){
        output[currentType].highestAttack.attack = {name : currentName, attack : currentAttack}
     }
     output[currentType].bestStatus = {name : currentName, overallStat : status}
    
  }
  return Object.values(output)
  
}
console.log(gottaGroupEmAll(pokemonList2))


// //output: 
// // [{
// //   type: 'Flying',
// //   pokemonList: ['Beedrill', 'Gliscor'],
// //   highestAttack: { name: 'Beedrill', attack: 72 },
// //   bestStatus: { name: 'Gliscor', overallStat: 250 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
// // },
// // {
// //   type: 'Bug',
// //   pokemonList: ['Caterpie'],
// //   highestAttack: { name: 'Caterpie', attack: 30 },
// //   bestStatus: { name: 'Caterpie', overallStat: 130 }
// // }]




