function CalC(){

    //Get Input

    const principle=parseFloat(document.getElementById('principle').value);
    const InterestRate=parseFloat(document.getElementById('InterestRate').value);
    const Tenure=parseFloat(document.getElementById('Tenure').value);

    //Get Calculate the value
    const maturityAmt=principle+(principle*InterestRate*Tenure)/100;

    // Display Result

    document.getElementById('result').innerText=`Maturity Anmount :${maturityAmt.toFixed(2)}`;
}
// Attache the event listener to the calculate Button
document.getElementById('CalculateBtn').addEventListener('click',CalC); 