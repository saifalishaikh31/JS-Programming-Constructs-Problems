let Num = 3;

function isPrimeNumber() 
{
  let temp;
    var isPrime = true;
    for (let i = 2; i <= Num / 2; i++)
     {
      temp = Num % i;
      if (temp == 0) {
        isPrime = false;
        break;
      }
    }
     if (isPrime) 
    {
        console.log(Num + " is a Prime Number");
    }
    else
    {
        console.log(Num + " is not a Prime Number");
    } 
}
isPrimeNumber();