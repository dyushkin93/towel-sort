
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined || matrix.length==0) {
    return [];
  } else {
    matrix=matrix.map((elem, index) => {
      if (index%2!=0) {
        return elem.reverse()
      } else return elem;
    })
    return matrix.flat(1);
  }
}