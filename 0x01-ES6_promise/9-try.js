export default function guardrail(mathsFunction) {
  const queue = [];
  try {
    const gotten = mathsFunction();
    queue.push(gotten);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
