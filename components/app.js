class App{
handleGetGradesError(error){
console.error(error);
}
handleGetGradesSuccess(grades){
  console.log(grades);
}
constructor(){
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
}
getGrades() {
  $.ajax({
    method: "GET",
    url: "https://github.com/Learning-Fuze/sgt_api#get-all-grades",
    success: this.handleGetGradesSuccess,
    error: this.handleGetGradesError,
  })
}
}
