let distributionMode = document.getElementById("distMode");
let distance = document.getElementById("distance");
const calculateButton = document.getElementById('calculateBtn');
const resultP = document.getElementById("resultText");
const resetBtn = document.getElementById('reset');
// console.log(distance);

let baseSubsidyP2D = 10;
let baseSubsidyP2Depot = 5;
let baseSubsidyD2D = 5;
let subsidy;
// console.log(userChoice);

function subsidyCalculation (userChoice, distanceValue) {
    switch (userChoice == "1") {
        case distance <= 50:
            subsidy = baseSubsidyP2D + (distanceValue * 0.2);
            break;
        case distance <= 100:
            subsidy = baseSubsidyP2D + (distanceValue* 0.18);
            break;
        case distance <= 150:
            subsidy = baseSubsidyP2D + (distanceValue * 0.17);
            break;
        case distance <= 200:
            subsidy = baseSubsidyP2D + (distanceValue * 0.15);
            break;
        case distance <= 250:
            subsidy = baseSubsidyP2D + (distanceValue * 0.14);
            break;
        case distance <= 300:
            subsidy = baseSubsidyP2D + (distanceValue* 0.13);
            break;
        case distance <= 400:
            subsidy = baseSubsidyP2D + (distanceValue * 0.13);
            break;
        case distance >= 500:
            subsidy = baseSubsidyP2D + (distanceValue * 0.12);
            break;
    }
    switch (userChoice == "2") {
        case distance <= 50:
            subsidy = baseSubsidyP2Depot + (distanceValue * 0.15);
            break;
        case distance <= 100:
            subsidy = baseSubsidyP2Depot + (distanceValue * 0.13);
            break;
        case distance <= 150:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.12);
            break;
        case distance <= 200:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.11);
            break;
        case distance <= 250:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.10);
            break;
        case distance <= 300:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.09);
            break;
        case distance <= 400:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.08);
            break;
        case distance >= 500:
            subsidy = baseSubsidyP2Depot + (distanceValue* 0.07);
            break;
    }
    switch (userChoice == "3") {
        case distance <= 50:
            subsidy = baseSubsidyD2D+ (distanceValue * 0.15);
            break;
        case distance <= 100:
            subsidy = baseSubsidyD2D + (distanceValue* 0.13);
            break;
        case distance <= 150:
            subsidy = baseSubsidyD2D + (distanceValue* 0.12);
            break;
        case distance <= 200:
            subsidy = baseSubsidyD2D + (distanceValue* 0.11);
            break;
        case distance <= 250:
            subsidy = baseSubsidyD2D + (distanceValue* 0.10);
            break;
        case distance <= 300:
            subsidy = baseSubsidyD2D + (distanceValue * 0.09);
            break;
        case distance <= 400:
            subsidy = baseSubsidyD2D + (distanceValue * 0.08);
            break;
        case distance >= 500:
            subsidy = baseSubsidyD2D + (distanceValue * 0.07);
            break;
    }
}

calculateButton.onclick = function showResult() {
    let distanceValue = parseInt(distance.value);
    let userChoice = distributionMode.value;
    subsidyCalculation(userChoice, distanceValue);
    resultP.innerHTML = `<p class="fw-bold mt-5 px-5">Total Subsidy Amount ${subsidy}</p>`;
    // console.log(subsidy);
    // console.log(distanceValue);

}

resetBtn.onclick = function () {
    document.location.reload(true);
}