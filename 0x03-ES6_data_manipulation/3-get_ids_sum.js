import getListStudents from "./0-get_list_students.js";

function getStudentIdsSum(students) {
  // Check if the input is a valid array of students
  if (!Array.isArray(students)) {
    throw new Error("Input should be an array of students.");
  }

  // Use the reduce function to calculate the sum of student IDs
  const sum = students.reduce((acc, student) => acc + student.id, 0);

  return sum;
}

// Test the function
const students = getListStudents();
const value = getStudentIdsSum(students);
console.log(value);
