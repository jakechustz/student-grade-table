class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    for (var ii = 0; ii < grades.length; ii++) {
      var tableRow = document.createElement('tr');
      var nameEl = document.createElement('td');
      var courseEl = document.createElement('td');
      var gradeEl = document.createElement('td');

      nameEl.textContent = grades[ii].name;
      courseEl.textContent = grades[ii].course;
      gradeEl.textContent = grades[ii].grade;

      tableRow.append(nameEl, courseEl, gradeEl);
      tbody.append(tableRow);
    }
  }
}
