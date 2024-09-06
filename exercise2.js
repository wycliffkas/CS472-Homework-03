function sum(arr) {
  return arr.filter(element => element > 20).reduce((acc, element) => acc+element, 0)
}

const arr = [1, 2, 30, 40, 50, 10]
console.log(sum(arr))  //120