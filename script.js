function calculateMaturityAmount(){
    // Get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const intersRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform the calculation

    const maturityAmount = principle + (principle * intersRate * tenure) / 100;

    //display the result

    document.getElementById('result').innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

// attach the event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount );