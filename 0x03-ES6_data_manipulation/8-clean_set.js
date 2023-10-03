// export default function cleanSet(set, startString) {
//   const result = [];

//   for (const value of set) {
//     if (value.startsWith(startString) && startString.length > 0) {
//       result.push(value.slice(startString.length));
//     }
//   }

//   return result.join('-');
// }
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || !set || !startString) return '';
  const matches = [];
  set.forEach((key) => {
    if (typeof key === 'string' && key.startsWith(startString) && startString.length > 0) {
      // substring() removes the startString and appends the rest
      matches.push(key.substring(startString.length));
    }
  });

  const result = matches.join('-');
  return result;
}
