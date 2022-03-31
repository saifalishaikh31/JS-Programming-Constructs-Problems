let a =20;
let b =12;
let c =31;

let res1 = a + b * c;
let res2 = a % b + c;
let res3 = c + a / b;
let res4 = a * b + c;

console.log(res1+" "+res2+" "+res3+" "+res4);

let max = Math.max(res1,res2,res3,res4);
let min = Math.min(res1,res2,res3,res4);

console.log("Maximum value :" + max);
console.log("Minimum value :" + min);