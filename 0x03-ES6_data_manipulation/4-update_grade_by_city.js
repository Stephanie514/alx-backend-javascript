function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeObject = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGradeObject ? newGradeObject.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
