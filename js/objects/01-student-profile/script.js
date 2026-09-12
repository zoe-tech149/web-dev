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

// Find the element where the student's surname will be displayed.
const surnameElement = document.querySelector("#studentSurname");

// Display the student's surname.
surnameElement.textContent = student.surname;

// Find the element where the student's grade will be displayed.
const studentGradeElement = document.querySelector("#studentGrade");

// Display the student's grade.
studentGradeElement.textContent = student.grade;

// Find the element where the student's school will be displayed.
const studentSchoolElement = document.querySelector("#studentSchool");

// Display the student's school.
studentSchoolElement.textContent = student.school;

student.grade = 13;
studentGradeElement.textContent = student.grade;

student.age = 18;
console.log(student.age);
