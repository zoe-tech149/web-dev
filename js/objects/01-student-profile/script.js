// Store the student's information in an object
const student = {
  name: "Wandile",
  surname: "Mjweni",
  grade: 12,
  school: "Sunflower High School",
};

// Find the element where the student's name will be displayed
const studentNameElement = document.querySelector("#studentName"); // <span id="studentName">Wandile</span>

// Find the element where the student's surname will be displayed.
const surnameElement = document.querySelector("#studentSurname"); // <span id="studentSurname">Mjweni</span>

// Find the element where the student's grade will be displayed.
const studentGradeElement = document.querySelector("#studentGrade"); // <span id="studentGrade">12</span>

// Find the element where the student's school will be displayed.
const studentSchoolElement = document.querySelector("#studentSchool"); // <span id="studentSchool">Sunflower High School</span>

const editProfileBtn = document.querySelector("#editProfileBtn"); // <button id="editProfileBtn">Edit Profile</button>

// Display the student's name
studentNameElement.textContent = student.name; // Wandile

// Display the student's surname.
surnameElement.textContent = student.surname; // Mjweni

// Display the student's grade.
studentGradeElement.textContent = student.grade; // 12

// Display the student's school.
studentSchoolElement.textContent = student.school; // Sunflower High School

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
  });

  // Remove the displayed value for update
  // studentNameElement.textContent = "";
});
