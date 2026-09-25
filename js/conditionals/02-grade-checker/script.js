console.log("js connected");

// DOM CONNECTIONS

const gradeInput = document.getElementById("gradeInput");
const checkButton = document.getElementById("checkButton");
const gradeResult = document.getElementById("gradeResult");

checkButton.addEventListener("click", function(){

  const mark = gradeInput.value;
  
  // Check whether a mark was entered
  if (mark === "") {  
    gradeResult.textContent ="Enter mark";
  }



})


