function getFixedCounter(k) {
  // write your code here
  let counter = k
  return {
    getValue: function () {
      return counter
    },
    increment: function () {
      counter += k
    },
    decrement: function () {
      counter--
    }
  }
}
