// DOM CONNECTIONS

const gradeInput = document.getElementById("gradeInput");
const checkButton = document.getElementById("checkButton");
const gradeResult = document.getElementById("gradeResult");

checkButton.addEventListener("click", function () {
  const mark = gradeInput.value;

  if (mark === "") {
    gradeResult.textContent = "Enter mark";
  } else if (mark < 0 || mark > 100) {
    gradeResult.textContent = "Invalid mark entered ";
  } else if (mark >= 80) {
    gradeResult.textContent = "Distinction";
  } else if (mark >= 50) {
    gradeResult.textContent = "Pass";
  } else {
    gradeResult.textContent = "Fail";
  }
});

// Clear old results  when the mark input changes
gradeInput.addEventListener("input", function () {
  gradeResult.textContent = "";
});
