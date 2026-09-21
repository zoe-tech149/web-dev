// Store the student's information in an object
const student = {
  name: "Wandile",
  surname: "Mjweni",
  grade: 12,
  school: "Sunflower High School",
};

// DISPLAY NAME PROPERTY

// Find the element where the student's name will be displayed
const studentNameElement = document.querySelector("#studentName"); 

// Access a property from student object
student.name; 

// Put a value into the name span element
studentNameElement.textContent = student.name; 

// Using the property name
const property = studentNameElement.dataset.property;

studentNameElement.textContent = student[property];

const studentElements = document.querySelectorAll(".text-span");
console.log(studentElements); // NodeList []


// DISPLAY SURNAME PROPERTY

// Find the element where the student's name will be displayed
const studentSurnameElement = document.querySelector("#studentSurname"); 

// Access a property from student object
student.surname; 

// Put a value into the name span element
studentSurnameElement.textContent = student.surname; 

// DISPLAY GRADE PROPERTY

// Find the element where the student's name will be displayed
const studentGradeElement = document.querySelector("#studentGrade"); 

// Access a property from student object
student.grade; 

// Put a value into the name span element
studentGradeElement.textContent = student.grade;

// DISPLAY GRADE PROPERTY

// Find the element where the student's grade will be displayed
const studentSchoolElement = document.querySelector("#studentSchool"); 

// Access a property from student object
student.school; 

// Put a value into the name span element
studentSchoolElement.textContent = student.school;

// ADDING AGE PROPERTY
student.age = 18;

// Find the age element 
const studentAgeElement = document.querySelector("#studentAge");

// Access age propery and put a value into the span element
studentAgeElement.textContent = student.age;


const editProfileBtn = document.querySelector("#editProfileBtn");

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
