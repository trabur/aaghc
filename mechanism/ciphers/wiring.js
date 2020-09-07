// check if javascript array is binary
const isArrayBool = (array) => {
  for (var i of array) {
       if (i !== 0 && i !== 1) return false;
  }
  return true;
}

let move = (point) => {
  // VISA
  oneJumpPad.up == 'up' ? oneJumpPad.up = 'down' : oneJumpPad.up = 'up'

  // inverts the values of in and out 
  if (point === oneBackwardPad) {
    point = onePathPad = 
  }
  if (point === oneForwardPad) {
    point = onePathPad = 
  }


  // point onePathPad to the next key
  if () {
    point = onePathPad = 
  }
  return point // a bit returns a number
}

let swap = (point) => {
  // inverts the values of all the keys

  // point oneBooleanPad to the next key
  if () {
    point = oneBooleanPad = 
  }
  return point // a array of bits returns a boolean
}

let flip = (point) => {
  // inverts all the booleans
  oneBooleanPad = !oneBooleanPad

  // point oneBitPad to the next key
  if ((onePositionPad % 2 == + oneBackwardPad) === point) {
    point = oneBitPad = oneJumpPad.up == 'up' ? + oneForwardPad : + oneBackwardPad 
  }
  return point // a boolean returns a bit
}

let rotate = (point) => {
  // move all the object numbers up by 7
  for (let key in oneObjectPad) {
    if (oneJumpPad.up == 'up') oneObjectPad[key] = oneObjectPad[key] + point % Object.keys(oneObjectPad).length
    if (oneJumpPad.up == 'down') oneObjectPad[key] = oneObjectPad[key] - point % Object.keys(oneObjectPad).length
  }

  // point onePositionPad to the next key
  if () {
    point = onePositionPad = 
  }
  return point // a array of numbers returns a string
}

let shift = (point) => {
  // shift points
  oneTimePad = oneSpacePad
  oneSpacePad = point

  // inverts all the bits
  oneBitPad === 1 ? oneBitPad = 0 : oneBitPad = 1

  // point onePositionPad to the next key
  if (onePathPad.in === point) {
    point = onePositionPad = oneObjectPad[point] // return object key
  }
  return point // a string returns a number
}

let oneFunctionPad = function (point) {
  switch (point) {
    case point === 0 || point === 1:
      point = move(point)
      break;
    case isArrayBool(point):
      point = swap(point)
      break;
    case typeof point === 'boolean':
      point = flip(point)
      break;
    case typeof point === 'number':
      point = rotate(point)
      break;
    case typeof point === 'string':
      point = shift(point)
      break;
    default:
      break;
  }

  return point
}
console.log('boot.oneFunctionPad:', oneFunctionPad)

let wiring = (push, pull, plugboard, jamReflector, tunnel, event) => {
  let signal = {
    ack: false,
    requestAttempts: 10,                // send messages
    responseAttempts: 10,               // recieve messages
    queueVectorStart: 1,                // 1 = up, 0 = down
    queuePositionStart: 0,              // 0 = keyboard
    queueVectorPlace: 1,                // pointing up
    queuePositionPlace: 0,              // at keyboard
    queueVectorFinish: 0,               // 1 = up, 0 = down
    queuePositionFinish: 3,             // 3 = tunnel
    swingingCradle: ['keyboard', 'plugboard', 'jamReflector', 'tunnel'],
    bulk: 3,                            // packet transfers at a time
    delay: 1,                           // miliseconds between packet transfers
    keyboard: { up: [], down: [] },     // packets go down
    plugboard: { up: [], down: [] },    // packets go through
    jamReflector: { up: [], down: [] }, // packets go up and down
    tunnel: { up: [], down: [] }        // packets go in, ack, then out
  }

  // push/pull: ack and store key data
  event.on('keyboard.pull', (text) => {
    signal.keyboard.up.push(text)
  })
  event.on('keyboard.push', (text) => {
    signal.keyboard.down.push(text)
  })

  // plugboard: scramble out signals and descramble in signals
  event.on('plugboard.in', (text) => {
    signal.plugboard.up.push(text)
  })
  event.on('plugboard.out', (text) => {
    signal.plugboard.down.push(text)
  })

  // jamReflector: stop and reverse signals
  event.on('jamReflector.in', (text) => {
    signal.jamReflector.up.push(text)
  })
  event.on('jamReflector.out', (text) => {
    signal.jamReflector.down.push(text)
  })

  // tunnel: pass signals through wiring
  event.on('tunnel.request', (text) => {
    signal.tunnel.up.push(text)
  })
  event.on('tunnel.response', (text) => {
    signal.tunnel.down.push(text)
  })

  while (signal.ack === false) {
    // swingingCradle: alternate vector
    if (signal.queuePositionPlace === signal.swingingCradle.length - 1) {
      // queue position is all the way at the bottom
      if (signal.queueVectorPlace === 0) {
        // queue vector is pointing down over the limit
        signal.queueVectorPlace = 1 // point up now
      }
    }
    if (signal.queuePositionPlace === 0) {
      // queue position is all the way at the top
      if (signal.queueVectorPlace === 1) {
        // queue vector is pointing up over the limit
        signal.queueVectorPlace = 0 // point down now
      }
    }

    // swingingCradle: move position
    if (signal.queueVectorPlace) {
      signal.queuePositionPlace-- // go up now
    } else {
      signal.queuePositionPlace++ // go down now
    }

    // v: 0, p: 1 on first wire

    // swingingCradle: transfer
    let transfer = (start, finish) => {
      // limit the number of packets per swing
      for (let i = 0; i < signal.bulk; i++) {
        // delay each packet per swing
        setTimeout(() => {
          finish.push(start.shift())
        }, signal.delay)
      }
      return true
    }
    
    // swingingCradle: packet
    if (signal.queueVectorPlace === 1) {
      // is pointing up
      let from = signal[signal.swingingCradle[signal.queuePositionPlace - 1]].down
      let to = signal[signal.swingingCradle[signal.queuePositionPlace]].up
      // ping signals from top to current
      for (let check = 0; check < signal.requestAttempts; check++) {
        let request = transfer(from, to)
        request === true ? check = signal.requestAttempts : null
      }
    } else {
      // is pointing down
      let from = signal[signal.swingingCradle[signal.queuePositionPlace + 1]].down
      let to = signal[signal.swingingCradle[signal.queuePositionPlace]].up
      // ping signals from bottom to current
      for (let check = 0; check < signal.responseAttempts; check++) {
        let response = transfer(from, to)
        response === true ? check = signal.responseAttempts : null
      }
    }

    // swingingCradle: swing
    // have we come full circle back to keyboard? 
    if (signal.queuePositionPlace === 0) {
      if (signal.queueVectorPlace === 1) {
        // v: 1 = up  // finish 
        // p: 0 = top // finish
        signal.ack = true
      }
    }
  }
  return signal.ack
}

exports.wiring = wiring