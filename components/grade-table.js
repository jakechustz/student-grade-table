class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    for (var ii = 0; ii < grades.length; ii++) {
      tbody.append(this.renderGradeRow(grades[ii], this.deleteGrade));
  }
  if(grades.length === 0) {
    p.classList.remove('d-none');
  } else {
    p.className = 'd-none';
  }
}
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var studentName = document.createElement("td");
    var studentCourse = document.createElement("td");
    var studentGrade = document.createElement("td");
    var deleteButton = document.createElement("td");
    var button = document.createElement("button");

    studentName.textContent = data.name;
    studentCourse.textContent = data.course;
    studentGrade.textContent = data.grade;
    button.textContent = "DELETE";
    button.className = "bun btn-danger";

    deleteButton.append(button);
    row.append(studentName, studentCourse, studentGrade, deleteButton);

    button.addEventListener("click", function (event) {
      deleteGrade(data.id);
    })
    return row;
  }
}
