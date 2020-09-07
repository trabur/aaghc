const tunnel = (plugboard) => {
  let oneBooleanPad = plugboard.oneBitPad ? true : false
  console.log('boot.oneBooleanPad:', oneBooleanPad)
  
  let oneForwardPad = oneBooleanPad
  let oneBackwardPad = !oneBooleanPad
  console.log('boot.oneForwardPad:', oneForwardPad)
  console.log('boot.oneBackwardPad:', oneBackwardPad)
  return {
    oneBooleanPad,
    oneForwardPad,
    oneBackwardPad
  }
}

exports.tunnel = tunnel