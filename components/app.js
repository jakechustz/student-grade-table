class App{
  constructor(gradeTable){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }
  handleGetGradesError(error){
  console.error(error);
  }
  handleGetGradesSuccess(grades){
    console.log(grades);
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
