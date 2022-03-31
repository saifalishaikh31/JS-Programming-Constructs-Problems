let arrayMinMax=[];

for(let i = 1 ; i <=5 ; i++)
{
     let result = Math.floor(Math.random() * 900) +100;
     arrayMinMax[i]= result;
     console.log(arrayMinMax[i]);
}

var maxVal = Math.max(arrayMinMax);
var minVal = Math.min(arrayMinMax);

console.log(maxVal);
console.log(minVal);