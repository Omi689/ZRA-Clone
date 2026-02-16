
==// Initialize variables
let basicPay=0;
let allowance=0;
let statutoryContribution=0;
let grossValue=0;
let nationalHealthInsuranceValue=0;
let napsaValue=0;
let totalContribution=0;
let totalDeductions=0;
let netPayValue=0;

function calculatePay(){
    // Retrieve input values and converting them to floats
    basicPay=parseFloat(document.getElementById("basicPay").value) || 0;
    allowance=parseFloat(document.getElementById("allowance").value) || 0;
    statutoryContribution=parseFloat(document.getElementById("statutoryContribution").value) || 0;

    // Calculate Gross Pay
    grossValue = basicPay + allowance;

    // National Health Insurance is 1% of Basic Pay
    nationalHealthInsuranceValue=basicPay * 0.01;

    // NAPSA is 5% of Basic Pay
    napsaValue=basicPay*0.05;
    // Calculate Total Deductions and Contributions
    totalDeductions=napsaValue + nationalHealthInsuranceValue + statutoryContribution;
    totalContribution = totalDeductions;

    //Calculate Net Pay

    netPayValue = grossValue - totalDeductions;

    // Update the UI with calculated values
    document.getElementById("grossValue").textContent = grossValue.toFixed(2);
    document.getElementById("nationalHealthInsuranceValue").textContent = nationalHealthInsuranceValue.toFixed(2);
    document.getElementById("napsaValue").textContent=napsaValue.toFixed(2);
    document.getElementById("totalContributionValue").textContent=totalContribution.toFixed(2);
    document.getElementById("totalDeductionsValue").textContent=totalDeductions.toFixed(2);
    document.getElementById("netPayValue").textContent = netPayValue.toFixed(2);
     
}  
// Function to clear all fields and reset values
function clearFields(){
    document.getElementById("grossValue").textContent = "0.00";
    document.getElementById("nationalHealthInsuranceValue").textContent = "0.00";
    document.getElementById("napsaValue").textContent="0.00";
    document.getElementById("totalContributionValue").textContent="0.00";
    document.getElementById("totalDeductionsValue").textContent="0.00";
    document.getElementById("netPayValue").textContent = "0.00";

}

// Attach event listeners to input fields to recalculate on change
document.getElementById("basicPay").addEventListener("input", calculatePay);
document.getElementById("allowance").addEventListener("input", calculatePay);
document.getElementById("statutoryContribution").addEventListener("input", calculatePay);

// Attach event listener to clear button
document.getElementById("clear").addEventListener("click", clearFields);