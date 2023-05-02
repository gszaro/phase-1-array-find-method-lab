// code your solution here
function superbowlWin(record) {
  const winRecord = record.find(game => game.result === "W");
  if (winRecord) {
    return winRecord.year;
  } else {
    return undefined;
  }
}

const denverBroncosRecord = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
];

console.log(superbowlWin(denverBroncosRecord));