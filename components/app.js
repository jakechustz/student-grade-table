class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handlecreateGradeError = this.handlecreateGradeError.bind(this);
    this.handlecreateGradeSuccess = this.handlecreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
  console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    //average loop here
    var gradeTotal = 0;
    for(var ii = 0; ii < grades.length; ii++) {
      gradeTotal += grades[ii].grade;
    }
    var average = gradeTotal/grades.length;
    //pass computed average of all grades recieved
    this.pageHeader.updateAverage(average);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      headers: {
        "X-Access-Token": "WBDUJbdl"
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      headers: { "X-Access-Token": "WBDUJbdl" },
      success: this.handlecreateGradeSuccess,
      error: this.handlecreateGradeError
    })
  }
  handlecreateGradeError(err) {
    console.error(err);
  }
  handlecreateGradeSuccess() {
    this.getGrades();
    console.log("success");
  }
  deleteGrade(id) {
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      headers: {
        "X-Access-Token": "WBDUJbdl"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(err) {
    console.error(err);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  }
