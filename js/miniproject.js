let tipOutput = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput');

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function () {
    // TIP CALCULATOR

    let tipAmount;
    let subTotal = document.getElementById(subTotalInput).valueAsNumber;
    let percentage = document.getElementById('percentageInput').valueAsNumber;
    let totalBill;

    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;

    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);

    tipOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;

})

let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function () {
    //PAY CHECK CALCULATOR

    let hours = document.getElementById('hoursInput').valueAsNumber;
    let hourlyWage = document.getElementById('hourlywageInput');
    let payCheck;

    payCheck = hours * hourlyWage;
    payCheck = payCheck.toFixed(2);

    checkOutput.innerHtml = "$" + payCheck;

})

let grade = document.getElementById("gradeButton");
gradeBtn.addEventListener('click', function () {
    //GRADE CALCULATOR

    let points = document.getElementById('pointsInput').valueAsNumber;
    let pointsMax = document.getElementById('pointsMaxInput').valueAsNumber;
    let englishGrade;
    let percentageGrade = document.getElementById('percentageGradeInput').valueAsNumber;

    points = pointsMax + percentageGrade
    englishGrade = percentageGrade + points

    pointsMax = pointsMax.toFixed(2);
    englishGrade = englishGrade.toFixed(2);

    gradeOutput.innerHtml = englishGrade + "%";

})

let gasBtn = document.getElementById("gasButton");
gasBtn.addEventListener('click', function () {
    //GAS COST CALCULATOR

    let gasPrice = document.getElementById('gasPriceInput').valueAsNumber;
    let gallons = document.getElementById('gallonsInput').valueAsNumber;
    let gasCost

    gasCost = gasPrice * gallons
    gasCost = gasCost.toFixed(2);

    gasOutput.innerHTML = "$" + gasCost;

})