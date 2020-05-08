class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesEl = noGradesElement;
  }
  renderGradeRow(data, deleteGrade) {
    var tableRow = document.createElement('tr');
    var nameElement = document.createElement('td');
    var courseElement = document.createElement('td');
    var gradeElement = document.createElement('td');
    var operationsElement = document.createElement('td');
    var deleteButton = document.createElement('button');

    nameElement.textContent = data.name;
    courseElement.textContent = data.course;
    gradeElement.textContent = data.grade;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger'
    deleteButton.addEventListener('click', function () { deleteGrade(data.id) });
    operationsElement.append(deleteButton);
    tableRow.append(nameElement, courseElement, gradeElement, operationsElement);
    return tableRow;
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    var noGradesEl = document.querySelector("#no-grades")
    debugger;
    if (!grades.length) {
      this.noGradesEl.classList.remove('d-none');
    } else {
      this.noGradesEl.classList.add('d-none');
    }
    for (var i = 0; i < grades.length; i++) {
    tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
  }
}
