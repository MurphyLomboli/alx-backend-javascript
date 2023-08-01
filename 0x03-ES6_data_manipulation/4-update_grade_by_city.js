function updateStudentGradeByCity(students, city, newGrades) {
  // Check if the input is a valid array of students
  if (!Array.isArray(students)) {
    throw new Error("Input should be an array of students.");
  }

  // Check if the newGrades is a valid array of objects
  if (!Array.isArray(newGrades) || newGrades.length === 0) {
    throw new Error("newGrades should be a non-empty array of objects.");
  }

  // Create a set of student IDs to optimize lookup
  const studentIdSet = new Set(newGrades.map((grade) => grade.studentId));

  // Update the grades of students from the given city
  const updatedStudents = students.map((student) => {
    if (student.location === city && studentIdSet.has(student.id)) {
      const gradeUpdate = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = gradeUpdate.grade;
    }
    return student;
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
