// closure cipher
// https://stackoverflow.com/questions/4472529/accessing-variables-trapped-by-closure

let toSource = require('tosource')

function Auth(username) {
  var password = "trustno1"
  this.getUsername = function() { return username }
  this.eval = function(name) { return eval(name) }
}

let auth = new Auth("Mulder")
let a = auth.eval("username") // will print "Mulder"
let b = auth.eval("password") // will print "trustno1"

// But you cannot directly overwrite a method, which is accessing 
// closure scope (like getUsername()), you need a simple eval-trick also:

let username = 'username'
let password = 'password'
auth.eval("this.getUsername = " + toSource(function() {
  return `hacked: ${username} + ${password}`
}))

console.log(`secret: ${a} + ${b}`)
console.log(`anonymouse: ${username} + ${password}`)
console.log(auth.getUsername()) // will print secret
// secret: Mulder + trustno1
// anonymouse: username + password
// hacked: Mulder + trustno1