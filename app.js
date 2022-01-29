let distributionMode = document.getElementById("distMode");
let distance = document.getElementById("distance");
const calculateButton = document.getElementById('calculateBtn');
const resultP = document.getElementById("resultText");
const resetBtn = document.getElementById('reset');
// console.log(distance);

let baseSubsidyP2D =10;
let baseSubsidyP2Depot = 5;
let baseSubsidyD2D = 5;
let subsidy;
// console.log(userChoice);

function subsidyCalculation (choice, distance) {
    if (choice == "1") {
        if (distance <= 50) {
            subsidy = baseSubsidyP2D + (distance * 0.2);
        } else if (distance > 50 && distance <101) {
            subsidy = baseSubsidyP2D + (distance * 0.18);
        } else if (distance > 100 && distance < 151) {
            subsidy = baseSubsidyP2D + (distance * 0.17);
        } else if (distance > 150 && distance < 201) {
            subsidy = baseSubsidyP2D + (distance * 0.15);
        } else if (distance > 200 && distance < 251) {
            subsidy = baseSubsidyP2D + (distance * 0.14);
        } else if (distance > 250 && distance < 301) {
            subsidy = baseSubsidyP2D + (distance * 0.13);
        } else if (distance > 300 && distance < 351) {
            subsidy = baseSubsidyP2D + (distance * 0.13);
        } else if (distance > 350 && distance < 401) {
            subsidy = baseSubsidyP2D + (distance* 0.12);
        } else if (distance > 400 && distance < 501) {
            subsidy = baseSubsidyP2D + (distance * 0.10);
        } else if (distance > 500) {
            subsidy = baseSubsidyP2D + (distance * 0.10);
        }
    }  else if (choice == "2") {
        if (distance <= 50) {
            subsidy = baseSubsidyP2Depot + (distance * 0.15);
        } else if (distance > 50 && distance <101) {
            subsidy = baseSubsidyP2Depot + (distance * 0.13);
        } else if (distance > 100 && distance < 151) {
            subsidy = baseSubsidyP2Depot + (distance * 0.12);
        } else if (distance > 150 && distance < 201) {
            subsidy = baseSubsidyP2Depot + (distance * 0.11);
        } else if (distance > 200 && distance < 251) {
            subsidy = baseSubsidyP2Depot + (distance * 0.10);
        } else if (distance > 250 && distance < 301) {
            subsidy = baseSubsidyP2Depot + (distance * 0.09);
        } else if (distance > 300 && distance < 351) {
            subsidy = baseSubsidyP2Depot + (distance * 0.08);
        } else if (distance > 350 && distance < 401) {
            subsidy = baseSubsidyP2Depot + (distance* 0.08);
        } else if (distance > 400 && distance < 501) {
            subsidy = baseSubsidyP2Depot + (distance * 0.07);
        } else if (distance > 500) {
            subsidy = baseSubsidyP2Depot + (distance * 0.07);
        }
    } else if (choice == "3") {
        if (distance <= 50) {
            subsidy = baseSubsidyD2D + (distance * 0.15);
        } else if (distance > 50 && distance <101) {
            subsidy = baseSubsidyD2D + (distance * 0.13);
        } else if (distance > 100 && distance < 151) {
            subsidy = baseSubsidyD2D + (distance * 0.12);
        } else if (distance > 150 && distance < 201) {
            subsidy = baseSubsidyD2D + (distance * 0.11);
        } else if (distance > 200 && distance < 251) {
            subsidy = baseSubsidyD2D + (distance * 0.10);
        } else if (distance > 250 && distance < 301) {
            subsidy = baseSubsidyD2D + (distance * 0.09);
        } else if (distance > 300 && distance < 351) {
            subsidy = baseSubsidyD2D + (distance * 0.08);
        } else if (distance > 350 && distance < 401) {
            subsidy = baseSubsidyD2D + (distance * 0.08);
        } else if (distance > 400 && distance < 501) {
            subsidy = baseSubsidyD2D + (distance * 0.07);
        } else if (distance > 500) {
            subsidy = baseSubsidyD2D + (distance * 0.07);
        }
    }

}

calculateButton.onclick = function showResult() {
    let distanceValue = parseInt(distance.value);
    let userChoice = distributionMode.value;
    subsidyCalculation(userChoice, distanceValue);
    resultP.innerHTML = `<p class="fw-bold mt-5 px-5">Total Subsidy Amount Taka ${subsidy}</p>`;
    // console.log(userChoice);
    // console.log(distanceValue);
    // console.log(subsidy);

}

resetBtn.onclick = function () {
    document.location.reload(true);
}