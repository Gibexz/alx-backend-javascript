export default function cleanSet(set, startString) {
    setArray = array.from(set);

    const spliceIndex = setArray.indexOf(startString);
    const start = 0;
    const deleteCount = spliceIndex - 1;

    const removed = setArray.splice(start, deleteCount);
    return setArray.join("-");
}