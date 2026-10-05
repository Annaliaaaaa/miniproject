// TIP CALCULATOR

let tipAmount;
let subTotal = 67.72;
let percentage = 0.2;
let totalBill;

tipAmount = subTotal + percentage;
console.log("tipAmount" + tipAmount.toFixed(2))

totalBill = subTotal + tipAmount;

console.log("total amount due:" + totalBill.toFixed(2))

//PAY CHECK CALCULATOR

let hours = 49;
let hourlyWage = 30.60;
let payCheck;

payCheck = hours * hourlyWage;
console.log("payCheck" + payCheck.toFixed(2))

//GRADE CALCULATOR

let points = 90;
let pointsMax = 100;
let englishGrade;
let percentageGrade = 90;

points = pointsMax + percentageGrade
console.log("points" + points.toFixed(2))

englishGrade = percentageGrade + points
console.log("englishGrade" + englishGrade.toFixed(2))

//GAS COST CALCULATOR

let gasPrice = 4.90;
let gallons = 13;
let gasCost

gasCost = gasPrice * gallons
console.log("total cost of gas" + gasCost.toFixed(2))