const btnSubmit = document.querySelector("#submit");

function addMonths(date, months) {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  // get user input
  const startDate = document.querySelector("#starting-date").value;
  const monthToAdd = document.querySelector("#month-to-add").value;
  //   convert date input to date object
  const date = new Date(startDate);
  //   calculate valid till
  const validTill = addMonths(date, monthToAdd);
  //   get day, month, year
  const day = validTill.getDate();
  const month = validTill.getMonth() + 1;
  const year = validTill.getFullYear();
  // get output span
  const result = document.querySelector("#result");
  result.innerHTML = `Geldig tot: ${day}-${month}-${year}`;
});
