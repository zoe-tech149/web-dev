const ageInput = document.getElementById("age");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function(){

  const age = ageInput.value;

  if(age === "") {
    result.textContent = "Enter age";
  }
    else if (Number(age) >= 18) {
      result.textContent = "Access Allowed";
    }
      else {
        result.textContent = "Access Denied";
      }
});