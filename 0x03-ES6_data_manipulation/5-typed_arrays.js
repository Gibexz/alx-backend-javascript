export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  const bufferView = new DataView(buffer); // Create a DataView to work with the buffer

  bufferView.setInt8(position, value); // Set the Int8 value at the specified position

  return bufferView;
}
