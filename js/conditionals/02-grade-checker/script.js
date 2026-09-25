// DOM CONNECTIONS

const gradeInput = document.getElementById("gradeInput");
const checkButton = document.getElementById("checkButton");
const gradeResult = document.getElementById("gradeResult");

checkButton.addEventListener("click", function(){

  const mark = gradeInput.value;
  
  // Check whether a mark was entered
  if (mark === "") {  
    gradeResult.textContent = "Enter mark";
  } else if (mark >= 80) {
    gradeResult.textContent = "Distinction";
  } else if (mark >= 50) {
    gradeResult.textContent = "Pass";
  } else {
    gradeResult.textContent = "Fail";
  }

})


