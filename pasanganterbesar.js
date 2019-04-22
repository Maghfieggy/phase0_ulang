function pasanganTerbesar(num) {
  // you can only write your code here!

 var a = String(num);
 var max = Number(a[0]+a[1]);	
 
  for (var i = 0; i < a.length-1; i++) {  
     if (max < Number(a[i]+a[i+1])) {
      max = Number(a[i]+a[i+1]);

    }
  }
  return (max);

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99