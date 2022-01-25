function stripProperty(obj, prop) {
  // write your code here
  var newObj = {}
  for (var key in obj) {
    if (key !== prop) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const soal = { 1: 'a', 2: 'b', 3: 'c' }
const result = stripProperty(soal, 'm')
console.log(result)
