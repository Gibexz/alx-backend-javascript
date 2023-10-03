// Create a WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0; // compressed if...else
  //   if (!weakMap.has(endpoint)) {
  //     weakMap.set(endpoint, 1);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
