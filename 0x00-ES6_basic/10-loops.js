export default function appendToEachArrayValue(array, appendString) {
  const newArray1 = [];

  for (const val of array) {
    newArray1.push(appendString + val);
  }

  return newArray1;
}
