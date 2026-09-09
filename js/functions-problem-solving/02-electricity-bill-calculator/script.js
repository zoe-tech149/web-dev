// Find the electricity input.
const electricityInput = document.querySelector("#electricity");

// Find the calculate button.
const calculateButton = document.querySelector("#calculateButton");

// Set the Tier 1 usage limit.
const tierOneLimit = 100;

// Set the Tier 2 usage limit.
const tierTwoLimit = 200;

// Set the Tier 1 rate per kWh.
const tierOneRate = 2;

// Set the Tier 2 rate per kWh.
const tierTwoRate = 2.5;

// Set the Tier 3 rate per kWh.
const tierThreeRate = 3;

// Find the electricity usage result.
const electricityResult = document.querySelector("#electricityResult");

// Find the Tier 1 result.
const tierOneResult = document.querySelector("#tierOneResult");

// Find the Tier 2 result.
const tierTwoResult = document.querySelector("#tierTwoResult");

// Find the Tier 3 result.
const tierThreeResult = document.querySelector("#tierThreeResult");

// Find the total bill result.
const totalResult = document.querySelector("#totalResult");


// Calculate the cost and usage for Tier 1.
function calculateFirstTier(usage) {
    
  // Limit Tier 1 usage to its maximum.
  const tierUsage = Math.min(usage, tierOneLimit);

  // Return the tier usage and its cost.
  return {
    usage: tierUsage,
    cost: tierUsage * tierOneRate
  };
}

// Calculate the cost and usage for Tier 2.
function calculateSecondTier(remainingUsage) {
  
  // Limit Tier 2 usage to its maximum.
  const tierUsage = Math.min(remainingUsage, tierTwoLimit);

  // Return the tier usage and its cost.
  return {
    usage: tierUsage,
    cost: tierUsage * tierTwoRate
  };
}

// Calculate the cost and usage for Tier 3.
function calculateThirdTier(remainingUsage) {
    // Tier 3 receives all remaining electricity usage.
    const tierUsage = remainingUsage;

    // Apply the Tier 3 rate.
    return {
        usage: tierUsage,
        cost: tierUsage * tierThreeRate
    };
}

// Calculate the complete electricity bill.
function calculateBill(electricityUsed) {
    
  // Calculate Tier 1.
  const tierOne = calculateFirstTier(electricityUsed);

  // Calculate the usage remaining after Tier 1.
  const remainingAfterTierOne = electricityUsed - tierOne.usage;

  // Calculate Tier 2.
  const tierTwo = calculateSecondTier(remainingAfterTierOne);

  // Calculate the usage remaining after Tier 2.
  const remainingAfterTierTwo = remainingAfterTierOne - tierTwo.usage;

  // Calculate Tier 3 from the remaining usage.
  const tierThree = calculateThirdTier(remainingAfterTierTwo);

  // Add the costs from all three tiers.
  const total = tierOne.cost + tierTwo.cost + tierThree.cost;

  // Return the complete billing information.
  return {
    electricityUsed: electricityUsed,
    tierOne: tierOne,
    tierTwo: tierTwo,
    tierThree: tierThree,
    total: total
  }
}

// Calculate the bill when the button is clicked.
calculateButton.addEventListener("click", function () {

  // Check whether the user entered a value.
  if (electricityInput.value === "") {
    electricityResult.textContent = "Please enter your electricity usage";
    return;
  }

  // Convert the entered usage to a number.
  const electricityUsed = Number(electricityInput.value);

  // Check whether the electricity usage is negative.
  if (electricityUsed < 0) {
    electricityResult.textContent = "Invalid electricity usage";
    return;
  }

  const bill = calculateBill(electricityUsed);

  // Display the electricity usage.
  electricityResult.textContent =
    `Electricity used: ${bill.electricityUsed} kWh`;

  // Display the Tier 1 calculation.
  tierOneResult.textContent =
    `Tier 1: ${bill.tierOne.usage} kWh × R${tierOneRate.toFixed(2)} = R${bill.tierOne.cost.toFixed(2)}`;

  // Display the Tier 2 calculation.
  tierTwoResult.textContent =
    `Tier 2: ${bill.tierTwo.usage} kWh × R${tierTwoRate.toFixed(2)} = R${bill.tierTwo.cost.toFixed(2)}`;

  // Display the Tier 3 calculation.
  tierThreeResult.textContent =
    `Tier 3: ${bill.tierThree.usage} kWh × R${tierThreeRate.toFixed(2)} = R${bill.tierThree.cost.toFixed(2)}`;

  // Display the total bill.
  totalResult.textContent =
    `Total bill: R${bill.total.toFixed(2)}`;
  });

// Clear the old results when the electricity input changes.
electricityInput.addEventListener("input", function () {
    electricityResult.textContent = "";
    tierOneResult.textContent = "";
    tierTwoResult.textContent = "";
    tierThreeResult.textContent = "";
    totalResult.textContent = "";
});

// Calculate the bill when Enter is pressed.
electricityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculateButton.click();
    }
});

