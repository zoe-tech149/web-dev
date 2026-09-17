// Store the student's information in an object
const student = {
  name: "Wandile",
  surname: "Mjweni",
  grade: 12,
  school: "Sunflower High School",
};

// Find the element where the student's surname will be displayed.
const surnameElement = document.querySelector("#studentSurname");

// Find the element where the student's grade will be displayed.
const studentGradeElement = document.querySelector("#studentGrade");

// Find the element where the student's school will be displayed.
const studentSchoolElement = document.querySelector("#studentSchool");

const editProfileBtn = document.querySelector("#editProfileBtn");

// DISPLAY NAME PROPERTY

// Find the element where the student's name will be displayed
const studentNameElement = document.querySelector("#studentName"); 
console.log(studentNameElement); //<span id="studentName" class="text-span" data-property="name"></span>

// Access a property from student object
student.name;
console.log(student.name); // Wandile

// Put a value into the name span element
studentNameElement.textContent = student.name; 
console.log(studentNameElement); 



// EDIT PROFILE INFORMATION
editProfileBtn.addEventListener("click", function () {
  // Select all elements with the class name "text-span"
  const textSpan = document.querySelectorAll(".text-span");

  // Loop through each box and apply changes
  textSpan.forEach((textSpan) => {
    // Create a new input element
    const inputField = document.createElement("input"); // <input type="text">
    inputField.type = "text";

    // Copy the current span text into the input field
    inputField.value = textSpan.textContent;

    // Replace the span with the new input field
    textSpan.replaceWith(inputField);

    const inputFields = document.querySelectorAll("#input").value;
    console.log(inputFields);
  
  });

  // Create a new button element
  const SaveChangesBtn = document.createElement("button");

  // Remove the displayed value for update
  // studentNameElement.textContent = "";
});
