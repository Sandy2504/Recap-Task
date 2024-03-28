function extractClassName(sessionTitle) {
  let result = null;
  let months = {
    Januar: "01",
    Februar: "02",
    Maerz: "03",
    März: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  if (sessionTitle.includes("Class")) {
    let arr = sessionTitle.split(" ");
    let year = arr[arr.indexOf("Class") + 1];
    let month = arr[arr.indexOf("Class") + 2];
    if (
      Number(year) > 2020 &&
      Number(year) < 2030 &&
      months.hasOwnProperty(month)
    ) {
      result = year + "-" + months[month];
    }
  }
  return result;
}
