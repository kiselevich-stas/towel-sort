
// You should implement your task here.

module.exports = function towelSort (matrix = false) {
  if (matrix === false)  return [];
  let arr = [];
  for(let i = 0; i < matrix.length ; i++){
    console.log(matrix[i])
    if(i % 2 == 0 || i == 0){
      matrix[i].forEach(e => {
        arr.push(e)
      })
    }
    else {
      matrix[i].reverse().forEach(e => {
        arr.push(e)
      })
    }
  }
  return arr
}
