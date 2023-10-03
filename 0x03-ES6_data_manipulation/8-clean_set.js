export default function cleanSet(set, startString) {
  const result = [];

  for (const value of set) {
    if (value.startsWith(startString) && startString.length > 0) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
