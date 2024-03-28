function filterApiData(apiData, mandatoryKeys) {
  const filteredData = [];
  for (const obj of apiData) {
    let Object1 = true;
    for (const key of mandatoryKeys) {
      if (!obj.hasOwnProperty(key)) {
        Object1 = false;
        break;
      }
    }
    if (Object1) {
      filteredData.push(obj);
    }
  }
  return filteredData;
}

const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
