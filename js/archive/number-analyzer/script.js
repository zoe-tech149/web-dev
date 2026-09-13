// create an empty array
const numbers = [];

// Find the form element
const numberForm = document.querySelector("#number-form");

// Find the label element
const numberInput = document.querySelector("#number-input");

// Find the ordered list element
const numberList = document.querySelector("#number-list");

const numberCount = document.querySelector("#number-count");
const emptyMessage = document.querySelector("#empty-message");

function greet(name) {
  console.log("Hello, " + name);
}

const message =
  "This is a very long JavaScript line that should wrap onto the next visual line when word wrap is enabled in VS Code.";

function checkAge(age) {
  if (age >= 18) {
    if (age <= 120) {
      console.log("Valid age");
    }
  }
}
