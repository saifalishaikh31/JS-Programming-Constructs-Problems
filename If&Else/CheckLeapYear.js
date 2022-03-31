const checkLeapYear = 2000;
if(checkLeapYear % 400==0)
{
    console.log("leap year");
}
else if(checkLeapYear % 100 == 0)
{
    console.log("Not Leap year");
}
else if(checkLeapYear % 4 ==0)
{
    console.log("Leap year");
}
else
{
    console.log("Not Leap year");
}