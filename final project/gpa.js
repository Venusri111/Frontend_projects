"use strict";
// Set focus on name input when page loads
window.onload = function () {
  document.getElementById("hours1").focus();
};

function Letter_grade(grade) {
  grade = grade.toUpperCase();

  const letters = ["A", "B", "C", "D", "F"];
  const values = [4, 3, 2, 1, 0];

  for (let i = 0; i < letters.length; i++) {
    if (grade === letters[i]) {
      return values[i];
    }
  }

  return null;
}
function calculateGPA() {
  let totalHours = 0;
  let totalPoints = 0;
  let Count = 0;

  for (let i = 1; i <= 5; i++) {
    let hours = parseFloat(document.getElementById("hours" + i).value);
    let grade = document.getElementById("grade" + i).value.toUpperCase();

    // Skip if user did not enter anything
    if (grade !== "" && !isNaN(hours)) {
      let points = Letter_grade(grade);

      if (points === null) {
        alert("Invalid grade in Course " + i + ". Use A, B, C, D, or F.");
        return;
      }

      totalHours += hours;
      totalPoints += points * hours;
      Count++;
    }
  }

  // Check minimum requirement
  if (Count < 2) {
    alert("Please enter at least 2 courses.");
    return;
  }

  // Calculate GPA and show in GPA box
  document.getElementById("GPA").value = (totalPoints / totalHours).toFixed(2);
}

function resetForm() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("hours" + i).value = "";
    document.getElementById("grade" + i).value = "";
  }
  document.getElementById("GPA").value = "";
}
