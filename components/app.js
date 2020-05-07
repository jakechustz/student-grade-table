class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
  }
  }
