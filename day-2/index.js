const exampleInput = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

let sumOfIds = 0;

const generateIdList = (firstId, lastId) => {
  const ids = []
  for (let i = firstId; i <= lastId; i++) {
    ids.push(String(i));
  }
  return ids;
}

const idIsInvalid = (id) => {
  const regexp = /(\d{2})\1|(\d)\2{3}/;
  return id.match(regexp) !== null;
}

const handleRange = (range) => {
  const invalidIds = [];
  console.log("Range:", range);
  const rangeIds = range.split("-");
  const firstId = Number(rangeIds[0]);
  const lastId = Number(rangeIds[1]);

  const ids = generateIdList(firstId, lastId);

  for (let id of ids) {
    const isInvalid = idIsInvalid(id);
    if (isInvalid) {
      invalidIds.push(id);
      sumOfIds += Number(id)
    }
  }

  console.log(range, "has", invalidIds.length, "number of invalid ids,", invalidIds.join(", "));
  console.log("====================");
};

for(let range of exampleInput.split(",")) {
  handleRange(range);
}

console.log("Sum of invalid ids", sumOfIds);
