class GradeTable{
  constructor(tableElement){
    this.tableElement = this.tableElement.bind(this);
  }
  updateGrades(grades) {
    console.log(grades);
  }
}
