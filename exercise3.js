const getNewArray = function(arr) {
  return arr.filter(str => str.length >= 5 && str.includes('a'))
}

const arr = ["apple", "banana", "cat", "elephant", "java", "sky", "table"];
const result = getNewArray(arr);
console.log(result);  