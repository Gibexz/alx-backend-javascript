export default function divideFunction(numerator, denominator) {
  if ((numerator / denominator) === Infinity) {
    throw new Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
