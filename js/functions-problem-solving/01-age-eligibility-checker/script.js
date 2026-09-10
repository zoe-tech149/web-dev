// Find the age input
const ageInput = document.querySelector("#age");

// Find the check button
const checkButton = document.querySelector("#checkButton");

// Find the result area
const result = document.querySelector
("#result");

// Set the minimum eligible age
const minimumAge = 18;

// Check whether the age is valid
function validateAge(age) {
    return age >= 0 && age <= 120 && age % 1 === 0;
}

// Check if valid input of age is eligible
function checkAge(age) {
    return age >= minimumAge;
}

// Run the whole eligibility-checking process
function checkEligibility() {

    // Check for empty input
    if (ageInput.value === "") {
        result.textContent = "Please enter your age";
        return;
    }

    // Convert input to number
    const age = Number(ageInput.value);
 
    // Check whether age is valid
    if (!validateAge(age)) {
        result.textContent = "Invalid age";
        return;
    }
    
    // Check eligibility and Display result
        const eligible = checkAge(age);

    if (eligible) {
        result.textContent = `Eligible — you meet the minimum age requirement of ${minimumAge}.`;
    } else {
        result.textContent = `Not eligible — the minimum age is ${minimumAge}.`;
    }
}

// Check the entered age when the button is clicked
checkButton.addEventListener("click", function () {
    checkEligibility();
});

// Check age when Enter is pressed
ageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkEligibility();
    }
});

// Clear the old result when the age changes
ageInput.addEventListener("input", function () {
    result.textContent = "";
});
