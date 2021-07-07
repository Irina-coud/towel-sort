
// You should implement your task here.

// module.exports = function towelSort(matrix) {
//   if (matrix === undefined || matrix.length === 0) {
//     return [];
//   }
//   const resultArray = matrix.reduce((acc, array, index) => {
//     const isEven = index % 2 === 0;

//     if (isEven) {
//       acc = acc.concat(array);
//     } else {
//       acc = acc.concat(array.reverse());
//     }
//     return acc;
//   }, []);
//   return resultArray;
// }

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  let sortArr = [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i].reverse();
    }
    sortArr.push(matrix[i]);
  }
  for (let k = 0; k < sortArr.length; k++) {
    for (let j = 0; j < sortArr[k].length; j++) {
      result.push(sortArr[k][j]);
    }
  } return result;
}