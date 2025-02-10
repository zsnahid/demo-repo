// A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

function calcGpa(marks) {
  if (marks >= 90) {
    console.log("A");
  } else if (marks >= 80 && marks < 90) {
    console.log("B");
  } else if (marks >= 70 && marks < 80) {
    console.log("C");
  } else if (marks >= 60 && marks < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}
let marks = 59;
calcGpa(marks);
