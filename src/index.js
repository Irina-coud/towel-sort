
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  const resultArray = matrix.reduce((acc, array, index) => {
    const isEven = index % 2 === 0;

    if (isEven) {
      acc = acc.concat(array);
    } else {
      acc = acc.concat(array.reverse());
    }
    return acc;
  }, []);
  return resultArray;
}
