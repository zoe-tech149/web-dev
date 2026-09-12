// Store the student's information in an object
const student = {
  name: "Wandile",
  surname: "Mjweni",
  grade: 12,
  school: "Sunflower High School",
};

// Find the element where the student's name will be displayed
const studentNameElement = document.querySelector("#studentName");

// Display the student's name
studentNameElement.textContent = student.name;
