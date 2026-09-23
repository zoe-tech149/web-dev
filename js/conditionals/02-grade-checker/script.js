console.log("js connected");

// DOM CONNECTIONS

const gradeInput = document.getElementById("gradeinput");
const checkButton = document.getElementById("checkButton");
const gradeResult = document.getElementById("gradeResult");

checkButton.addEventListener("click", function(){

  const mark = gradeInput.value;

  if (mark === "") {  
    gradeResult.textContent = "Enter mark";
  }

})


