console.log("Unit Conversion");
let choice = 1;
let num = 10;
switch (choice) {
    case 1:
        let feetInch = num * 12;
        console.log("Feet to Inch : " + feetInch);
      break;
    case 2:
        let feetMeter = num / 3.2808;
        console.log("Feet to Meter : " + feetMeter);
      break;
    case 3:
        let inchFeet = num / 12;
        console.log("Inch to Feet : " + inchFeet);
      break;
    case 4:
        let meterFeet = num * 3.2808;
        console.log("Meter to Feet : " + meterFeet);
      break;
    default:
        console.log("This is not a Choice");
      break;
  }