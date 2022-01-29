const distributionMode = document.getElementById("distMode");
const distance = parseInt(document.getElementById("distance").value);
// console.log(distance);

let baseSubsidyP2D = 10;
let userChoice = distributionMode.value;
let subsidy;
// console.log(userChoice);

function subsidyCalculation () {
    switch (userChoice == 1) {
        case distance <= 50:
            subsidy = baseSubsidyP2D + (distance * 0.2);
            break;
        case distance <= 100:
            subsidy = baseSubsidyP2D + (distance * 0.18);
            break;
        case distance <= 150:
            subsidy = baseSubsidyP2D + (distance * 0.17);
            break;
        case distance <= 200:
            subsidy = baseSubsidyP2D + (distance * 0.15);
            break;
        case distance <= 250:
            subsidy = baseSubsidyP2D + (distance * 0.14);
            break;
        case distance <= 300:
            subsidy = baseSubsidyP2D + (distance * 0.13);
            break;
        case distance <= 400:
            subsidy = baseSubsidyP2D + (distance * 0.12);
            break;
    }
}