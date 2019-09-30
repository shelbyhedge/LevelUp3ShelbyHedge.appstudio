do {
  let calculatorType = prompt("Would you like to calculate your car or home loan payment? Enter either home or car to continue:")

    function myFunction(principal, terms, interest) {
      let n = terms * 12;
      let i = interest / 100 / 12;

      let x = Math.pow(1 + i, n);
      let monthly = (principal * x * i) / (x - 1);
      const monthlyPayment = monthly.toFixed(2);
    return monthly;
    }

  let principal = Number(prompt("Enter your principal amount"));
  let terms = Number(prompt("Enter your payment terms (enter 15 or 30)"));
  let interest = Number(prompt("Enter your interest rate as a number"));
  

  alert(`A ${calculatorType} loan for $${principal} over ${terms} years at ${interest}% interest would have a monthly payment of $${myFunction(principal, terms, interest).toFixed(2)}.`);
  var decision = prompt("Do you want to make another calculation?")
} while (decision == "yes");