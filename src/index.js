
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
    let returnArr = [],
        arrCounter = 0;
      for (let index = 0; index < matrix.length; index++) {
        for (let i = 0; i < matrix[index].length; i++) {
          if (arrCounter%2 == 0) {
            returnArr.push(matrix[index][i]);
          } else {
            returnArr.push(matrix[index][matrix[index].length - 1 - i]);
          }
        }
        arrCounter++;
      }
    return returnArr;
  } else {
    return [];
  }
}


