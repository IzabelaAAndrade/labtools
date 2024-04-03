let nPlates = document.querySelector("#nPlates")
let nReplicates = document.querySelector("#nRep")
let desiredC = document.querySelector("#desiredConc")
let storageC = document.querySelector("#storageConc")
let totalV = 0
let dose0 = 0
let cv = 0
let volumes = "Results: <br>";
let finalV = 0
let inicialV = 0
let waterAt = 0
let calculationsAB = document.querySelector("#calculationsAB")
let resultsAB = document.querySelector("#resultsAB")

function treatmentCalculations(){
    waterAt = 0
    finalV = 0
    cv = 0
    volumes = "<b>Results:</b> <br>"
    inicialV = 0
    totalV = 0
    totalV = nPlates.value * nReplicates.value * 50;
    cv = totalV
    let n = 0
    for(let i=0; i<6; i++){
        cv = cv/3
        finalV += cv
        waterAt = totalV-cv
        n = i+1
        volumes = volumes + "<b>Dose "+ n + ": </b>"+ cv.toFixed(2)+ "uL Main Solution + "+waterAt.toFixed(2) +"uL culture medium<br>"
    }
    finalV += totalV + 50
    inicialV = (desiredC.value * Math.round(finalV)) / (storageC.value*1000)
    volumes = volumes + "<b>Main solution: </b> " + inicialV.toFixed(2) + "uL drug "+" + "+ Math.round(finalV) + "uL culture medium"
    resultsAB.innerHTML = volumes
}

calculationsAB.addEventListener('click', treatmentCalculations)

