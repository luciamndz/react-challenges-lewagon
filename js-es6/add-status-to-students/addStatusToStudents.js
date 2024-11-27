const students = [
  { id: 1, name: 'Juan', age: 20, grade: 2 },
  { id: 2, name: 'Nicolas', age: 22, grade: 6 },
  { id: 3, name: 'Agustín', age: 23, grade: 8 },
  { id: 4, name: 'David', age: 21, grade: 4 },
  { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
  const studentsStatus = students.map(student => {
    if (student.grade >= 4) {
      student.status = "Aproved";
    } else {
      student.status = "Disapproved";
    }
    return student
  });

  const studentsAproved = studentsStatus.filter((student) => student.status === "Aproved");
  const studentsDisapproved = studentsStatus.filter((student) => student.status === "Disapproved");
  const studentsArray = [studentsAproved, studentsDisapproved];

  return studentsArray;
};

const [aproved, disapproved, test] = addStatusToStudents(students);
console.log(aproved);
console.log(disapproved);
console.log(test);
