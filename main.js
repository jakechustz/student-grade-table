var docTable = document.querySelector('table');
var gradeTable = new GradeTable(docTable);
var header = document.querySelector('header');
var pageHeader = new PageHeader(header);
var app = new App(gradeTable);
app.start();
