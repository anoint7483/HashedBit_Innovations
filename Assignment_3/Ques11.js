// Calculate average of student subjects (object of objects)

const studentsData = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 45, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 94, subject4: 97, subject5: 37 }
};

const result = {};

for (let student in studentsData) {
  let marks = Object.values(studentsData[student]);
  let avg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
  result[student] = { average: avg };
}

console.log(result);
