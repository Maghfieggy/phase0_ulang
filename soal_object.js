/*
=================
Age data mining
=================

[INSTRUCTIONS]
Anda adalah seorang Data Scientist yang ditugaskan untuk mengolah data mentah
score ujian murid-murid ke dalam object informasi nilai yang mudah dibaca
berbentuk group-group yang berisi umur 17-18, 19-21, 22-25, nilai rata-rata dan
murid. buatlah <array of object> ke variable <ageData>
dari table data berikut sebelum diolah.
┌────┬─────────────┬─────────────┬───────┬──────────┬─────┐
│ id │ first_name  │  last_name  │ score │  gender  │ age │
├────┼─────────────┼─────────────┼───────┼──────────┼─────┤
│ 1  │ 'Carrissa'  │  'Murley'   │  53   │ 'Female' │ 20  │
│ 2  │ 'Winifield' │ 'Frisdick'  │  86   │  'Male'  │ 24  │
│ 3  │  'Romonda'  │  'Verling'  │  95   │ 'Female' │ 23  │
│ 4  │  'Yehudit'  │ 'Isakovic'  │  32   │  'Male'  │ 17  │
│ 5  │  'August'   │ "O' Mahony" │  73   │ 'Female' │ 21  │
│ 6  │   'Scott'   │   'Rubra'   │  51   │  'Male'  │ 19  │
└────┴─────────────┴─────────────┴───────┴──────────┴─────┘

[EXAMPLE]
Hasil yang diharapkan adalah object dengan format sebagai berikut:
{
  '17-18': [
       { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32, age: 17 },
       ...
  ],
  '19-21': [
      { ... },
      ...
  ],
  '22-25': [
       { ... },
       ...
  ],
  avg: 65,
}
note: buang data murid yang tidak relevan di object hasil dari function,
contohnya: gender dan age.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string &
  array untuk pemecahan masalah.
- Dilarang hardcode, kecuali nama key.
- Dilarang menggunakan regex .match dan lainnya!
*/

function graduationDetail() {
    // code anda disini
    var object = {
    	'17 - 18' : [],
    	'19 - 21' : [],
    	'22 - 25' : [],
    	avg : 0
    }
    var total = 0

    for (var i = 0; i < ageData.length;i++){
    	var data = {
    		id : ageData[i].id,
    		first_name : ageData[i].first_name,
    		last_name : ageData[i].last_name,
    		score : ageData[i].score,
    		age : ageData[i].age
    	};

    	total += ageData[i].score

    	if (ageData[i].age >= 17 && ageData[i].age <= 18){
    		object['17 - 18'].push(data)
    	}
    	if (ageData[i].age >= 19 && ageData[i].age <= 21){
    		object['19 - 21'].push(data)
    	}
    	if (ageData[i].age >= 22 && ageData[i].age <= 25){
    		object['22 - 25'].push(data)
    	}
    	object.avg = total / ageData.length

    }

  return object
}

// silahkan isi data di sini
var ageData = [{
  id: 1,
  first_name : 'Carrissa',
  last_name : 'Murley',
  score : 53,
  gender : 'Female',
  age : 20
},
{
  id: 2,
  first_name : 'Winifield',
  last_name : 'Frisdick',
  score : 86,
  gender : 'Male',
  age : 24
},
{
  id: 3,
  first_name : 'Romonda',
  last_name : 'Verling',
  score : 95,
  gender : 'Female',
  age : 23
},
{
  id : 4,
  first_name : 'Yehudit',
  last_name : 'Isakovic',
  score : 32,
  gender : 'Male',
  age : 17
},
{
  id : 5,
  first_name : 'August',
  last_name : 'O\' Mahony',
  score : 73,
  gender : 'Female',
  age : 21
},
{
  id : 6,
  first_name : 'Scott',
  last_name : 'Rubra',
  score : 51,
  gender : 'Male',
  age : 19
}]

console.log(graduationDetail(ageData));


/*
{
  '17-18': [
    { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32, age: 17 },
  ],
  '19-21': [
    { id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53, age: 20 },
    { id: 5, first_name: 'August', last_name: "O' Mahony", score: 73, age: 21 },
    { id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51, age: 19 }
  ],
  '22-25':[
    { id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86, age: 24 },
    { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95, age: 23 }
  ],
  avg: 65,
}
*/