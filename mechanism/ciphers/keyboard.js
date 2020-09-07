// ========
// set: (code settings)
// ========
let oneSpacePad = 'aaghc'                           // plain text 1-5 char here (space length must equal time length)
console.log('boot.oneSpacePad:', oneSpacePad)

let oneStringPad = 'G'                              // jam string 1-5 char here (reflect)
console.log('boot.oneStringPad:', oneStringPad)

let oneTimePad = `AA${oneStringPad}HC`              // key text 1-5 char here (time length must equal space length)
console.log('boot.oneTimePad:', oneTimePad)

let plugboard = require('./plugboard')

// ========
// put: (program settings)
// ========
let EventEmitter = require('events')
const timestamp = new Date()
let event = new EventEmitter()
console.log('boot.event:', timestamp)

let level = require('level')
let data = level(oneSpacePad)
console.log('boot.data:', data._db.db.location)

let jamReflector = require('./jam-reflector')
let tunnel = require('./tunnel').tunnel(plugboard)
let wiring = require('./wiring').wiring

// here's a method to convert a Uint8Array into a binary-encoded string:
const toBinString = (bytes) => {
  return bytes.reduce((str, byte) => {
    return str + byte.toString(2).padStart(8, '0')
  }, '')
}
console.log('boot.toBinString:', toBinString([0]))

let decrypted = plugboard.onePlug0aPad
let bytes = Uint8Array.from(decrypted)
let encrypted = toBinString(bytes)
let plainText = new TextDecoder().decode(bytes)
console.log('boot.encrypted:', encrypted)
console.log('boot.decrypted:', decrypted)
console.log('boot.plainText:', plainText)

const limit = (message) => {
  console.log(`boot.${message}`)
  if (oneSpacePad.length !== oneTimePad.length) {
    console.log('oneSpacePad:', `text lengths are not the same`)
    console.log('oneTimePad:', `text lengths are not the same`)
    return oneSpacePad
  }

  let min = tunnel.oneBackwardPad // 0
  let max = plugboard.oneNumberPad // 6
  // @ts-ignore
  if (min < message.length < max) {
    console.log('oneNumberPad:', `${message.length} is within ${min}-${max}`)
    return message
  } else {
    console.log('oneNumberPad:', `${message.length} is not within ${min}-${max}`)
    return oneTimePad
  }
}
console.log('boot.limit:', jamReflector.oneJumpPad.up)

const push = (message) => {
  let key = limit(message)
  let decrypted = new TextEncoder().encode(key)
  let bytes = Uint8Array.from(decrypted)
  let encrypted = toBinString(bytes)
  let store = {
    encrypted: encrypted,
    decrypted: decrypted,
    plainText: key,
  }
  data.put(`keyboard:${key}`, JSON.stringify(store)).then((value) => {
    event.emit('lightboard', JSON.parse(value))
  })
  return tunnel.oneBooleanPad // true
}
let keyboardInput = push(jamReflector.oneObjectPad.left)
console.log('boot.push', keyboardInput)

const pull = (message) => {
  let key = limit(message)
  data.get(`keyboard:${key}`).then((value) => {
    event.emit('keyboard.push', JSON.parse(value))
  })
  return tunnel.oneBooleanPad // true
}
let keyboardOutput = pull(jamReflector.oneObjectPad.right)
console.log('boot.pull', keyboardOutput)

data.on('put', (key, value) => {
  console.log('data.put:', { key, value })
})

data.on('get', (key, value) => {
  console.log('data.get:', { key, value })
})

let keyboard = push('AA')
console.log('boot.keyboard:', keyboard)
console.log('keyboard: allow key check ins...')

let keycheck = pull('AA')
console.log('boot.keycheck:', keycheck)
console.log('keycheck: allow key pass outs...')

let signal = wiring(push, pull, plugboard, jamReflector, tunnel, event)
console.log('boot.signal:', signal)

event.on('keyboard.pull', (text) => {
  pull(text)
})
event.on('keyboard.push', (text) => {
  push(text)
})

exports.signal = signal