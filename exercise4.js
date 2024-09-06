const strings = ["apple", "banana", "orange", "kiwi", "strawberry", "pear"];

const result = strings.reduce((acc, str) => {
  if(str.length > 5) {
    acc.push(str.toUpperCase())
  }
  return acc
}, [])