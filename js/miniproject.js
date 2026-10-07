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

    tipAmountOutput.innerHTML = "$" + tipAmount;
    totalBillOutput.innerHTML = "$" + totalBill;

})

let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function () {
    //PAY CHECK CALCULATOR

    let hoursWorked = document.getElementById('hoursWorkedInput').valueAsNumber;
    let hourlyRate = document.getElementById('hourlyRateInput');
    let payCheck;

    payCheck = hoursWorked * hourlyRate;
    payCheck = payCheck.toFixed(2);

    paycheckAmountOutput.innerHtml = "$" + payCheck;

})

let grade = document.getElementById("gradeButton");
gradeBtn.addEventListener('click', function () {
    //GRADE CALCULATOR

    let pointsEarned = document.getElementById('pointsEarnedInput').valueAsNumber;
    let totalPoints = document.getElementById('totalPointsInput').valueAsNumber;
    let englishGrade;
    let percentageGrade = document.getElementById('percentageGradeInput').valueAsNumber;

    pointsEarned = totalPoints + percentageGrade
    englishGrade = percentageGrade + points

    pointsMax = pointsMax.toFixed(2);
    englishGrade = englishGrade.toFixed(2);

    percentGradeOutput.innerHtml = englishGrade + "%";

})

let gasBtn = document.getElementById("gasButton");
gasBtn.addEventListener('click', function () {
    //GAS COST CALCULATOR

    let gasPrice = document.getElementById('gasPriceInput').valueAsNumber;
    let tankGallons = document.getElementById('tankGallonsInput').valueAsNumber;
    let gasCost

    gasCost = gasPrice * gallons
    gasCost = gasCost.toFixed(2);

    gasOutput.innerHTML = "$" + gasCost;

})

// FIX THE NAMES