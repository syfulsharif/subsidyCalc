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

function subsidyCalculation (choice, distance) {
    
    switch (choice == "1") {
        case distance <= 50:
            subsidy = baseSubsidyP2D + (distance * 0.2);
            break;
        case distance > 50 && distance <101:
            subsidy = baseSubsidyP2D + (distance * 0.18);
            break;
        case distance > 100 && distance < 151:
            subsidy = baseSubsidyP2D + (distance * 0.17);
            break;
        case distance > 150 && distance < 201:
            subsidy = baseSubsidyP2D + (distance * 0.15);
            break;
        case distance > 200 && distance < 251:
            subsidy = baseSubsidyP2D + (distance * 0.14);
            break;
        case distance > 250 && distance < 301:
            subsidy = baseSubsidyP2D + (distance * 0.13);
            break;
        case distance > 300 && distance < 351:
            subsidy = baseSubsidyP2D + (distance * 0.13);
            break;
        case distance > 350 && distance < 401:
            subsidy = baseSubsidyP2D + (distance* 0.12);
            break;
        case distance > 400 && distance < 501:
            subsidy = baseSubsidyP2D + (distance * 0.10);
            break;
        case distance > 500:
            subsidy = baseSubsidyP2D + (distance * 0.10);
            break;
    }
    switch (choice == "2") {
        case distance <= 50:
            subsidy = baseSubsidyP2Depot + (distance * 0.15);
            break;
        case distance > 50 && distance <101:
            subsidy = baseSubsidyP2Depot + (distance * 0.13);
            break;
        case distance > 100 && distance < 151:
            subsidy = baseSubsidyP2Depot + (distance * 0.12);
            break;
        case distance > 150 && distance < 201:
            subsidy = baseSubsidyP2Depot + (distance * 0.11);
            break;
        case distance > 200 && distance < 251:
            subsidy = baseSubsidyP2Depot + (distance * 0.10);
            break;
        case distance > 250 && distance < 301:
            subsidy = baseSubsidyP2Depot + (distance * 0.09);
            break;
        case distance > 300 && distance < 351:
            subsidy = baseSubsidyP2Depot + (distance * 0.08);
            break;
        case distance > 350 && distance < 401:
            subsidy = baseSubsidyP2Depot + (distance* 0.08);
            break;
        case distance > 400 && distance < 501:
            subsidy = baseSubsidyP2Depot + (distance * 0.07);
            break;
        case distance > 500:
            subsidy = baseSubsidyP2Depot + (distance * 0.07);
            break;
    }
    switch (choice == "3") {
        case distance <= 50:
            subsidy = baseSubsidyD2D + (distance * 0.15);
            break;
        case distance > 50 && distance <101:
            subsidy = baseSubsidyD2D+ (distance * 0.13);
            break;
        case distance > 100 && distance < 151:
            subsidy = baseSubsidyD2D+ (distance * 0.12);
            break;
        case distance > 150 && distance < 201:
            subsidy = baseSubsidyD2D + (distance * 0.11);
            break;
        case distance > 200 && distance < 251:
            subsidy = baseSubsidyD2D + (distance * 0.10);
            break;
        case distance > 250 && distance < 301:
            subsidy = baseSubsidyD2D + (distance * 0.09);
            break;
        case distance > 300 && distance < 351:
            subsidy = baseSubsidyD2D+ (distance * 0.08);
            break;
        case distance > 350 && distance < 401:
            subsidy = baseSubsidyD2D + (distance* 0.08);
            break;
        case distance > 400 && distance < 501:
            subsidy = baseSubsidyD2D + (distance * 0.07);
            break;
        case distance > 500:
            subsidy = baseSubsidyD2D + (distance * 0.07);
            break;
    }
}

calculateButton.onclick = function showResult() {
    let distanceValue = parseInt(distance.value);
    let userChoice = distributionMode.value;
    subsidyCalculation(userChoice, distanceValue);
    resultP.innerHTML = `<p class="fw-bold mt-5 px-5">Total Subsidy Amount ${subsidy}</p>`;
    console.log(userChoice);
    console.log(distanceValue);
    console.log(subsidy);

}

resetBtn.onclick = function () {
    document.location.reload(true);
}