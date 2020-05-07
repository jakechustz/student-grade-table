class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log("The average grade is: ", newAverage);
    this.headerElement.querySelector("#average-badge").textContent = newAverage;
  }
}
