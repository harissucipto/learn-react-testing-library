// create function prootypal inheritance
function Activity(amount) {
  this.amount = amount
}
Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false
  }
  this.amount = value
  return true
}
Activity.prototype.getAmount = function () {
  return this.amount
}

function Payment(amount, receiver) {
  this.amount = amount
  this.receiver = receiver
}
Payment.prototype = Object.create(Activity.prototype)
Payment.prototype.setReceiver = function (name) {
  this.receiver = name
}
Payment.prototype.getReceiver = function () {
  return this.receiver
}

function Refund(amount, sender) {
  this.amount = amount
  this.sender = sender
}
Refund.prototype = Object.create(Activity.prototype)
Refund.prototype.setSender = function (name) {
  this.sender = name
}
Refund.prototype.getSender = function () {
  return this.sender
}

const MyActivity = new Payment(20, 'Haris')

console.log(MyActivity.getReceiver())
