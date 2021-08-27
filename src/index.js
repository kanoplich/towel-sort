
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }
  let count = [];
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
      count = [];
    for(let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        count.push(matrix[i][j]);
      } else {
        count.unshift(matrix[i][j]);
      }
    }
    result = result.concat(count);
  }
  return result;
}
