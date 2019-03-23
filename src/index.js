module.exports = function getZerosCount(number, base) {
  let degree=base;
  let FACTORS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,	223, 227,	229, 233,	239, 241, 251, 257, 263];
  let primeFactors=[]; //простые множители
  let a=base;
  let zero=[];
  let minZero=[];
    for (let i=0; i<=FACTORS.length; i++) {   //search prime factors in "base"
    if (a%FACTORS[i]==0) {
      primeFactors.push(FACTORS[i]);
      a=a/FACTORS[i];
      i=i-1;
    }
  }
  
  for (let j=0; j<primeFactors.length; j++) {
    let zero=0; i=1; let bb=0;
   
    while (Math.floor(number/Math.pow(primeFactors[j],i))) {
      zero=zero+(Math.floor(number/Math.pow(primeFactors[j],i)));
      i=i+1;
    }
      for (let i=0; i<=primeFactors.length; i++)
        if  (primeFactors[j]==primeFactors[i])  {
          bb=bb+1;
        }
          minZero.push(Math.floor(zero/bb));
  }
return Math.min.apply(Math, minZero);}