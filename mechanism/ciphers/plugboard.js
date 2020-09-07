let oneBitPad = 1                                               // jam bit 0 or 1 here (reflect)
console.log('boot.oneBitPad:', oneBitPad)

let oneNumberPad = 6                                            // jam byte 0-255 here (reflect)
console.log('boot.oneStringPad:', oneNumberPad)

let onePlug0aPad = [65, 65, 71, 72, 67]                         // jam byte array here (scramble)
let onePlug0bPad = [67, 72, 71, 65, 65]                         // jam byte array here (scramble)
console.log('boot.onePlug0aPad:', onePlug0aPad)
console.log('boot.onePlug0bPad:', onePlug0bPad)
let onePlug1aPad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']     // jam 1-26 lower letter char here (scramble)
let onePlug1bPad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']     // jam 1-26 lower letter char here (scramble)
console.log('boot.onePlug1aPad:', onePlug1aPad)
console.log('boot.onePlug1bPad:', onePlug1bPad)
let onePlug2aPad = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']     // jam 1-26 upper letter char here (scramble)
let onePlug2bPad = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']     // jam 1-26 upper letter char here (scramble)
console.log('boot.onePlug2aPad:', onePlug2aPad)
console.log('boot.onePlug2bPad:', onePlug2bPad)
let onePlug3aPad = ['1','2','3','4','5','6','7','8','9','0']    // jam 1-10 string number char here (scramble)
let onePlug3bPad = ['1','2','3','4','5','6','7','8','9','0']    // jam 1-10 string number char here (scramble)
console.log('boot.onePlug3aPad:', onePlug3aPad)
console.log('boot.onePlug3bPad:', onePlug3bPad)
let onePlug4aPad = [0,1,2,3,4,5,6,7,8,9]                        // jam 1-10 number char here (scramble)
let onePlug4bPad = [0,1,2,3,4,5,6,7,8,9]                        // jam 1-10 number char here (scramble)
console.log('boot.onePlug4aPad:', onePlug4aPad)
console.log('boot.onePlug4bPad:', onePlug4bPad)
let onePlug5aPad = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}',';',':','\'','"',',','<','.','>','/','?','\\','|']     // jam 1-32 symbol char here (scramble)
let onePlug5bPad = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}',';',':','\'','"',',','<','.','>','/','?','\\','|']     // jam 1-32 symbol char here (scramble)
console.log('boot.onePlug5aPad:', onePlug5aPad)
console.log('boot.onePlug5bPad:', onePlug5bPad)

exports.oneBitPad = oneBitPad
exports.oneNumberPad = oneNumberPad
exports.onePlug0aPad = onePlug0aPad
exports.onePlug0bPad = onePlug0bPad
exports.onePlug1aPad = onePlug1aPad
exports.onePlug1bPad = onePlug1bPad
exports.onePlug2aPad = onePlug2aPad
exports.onePlug2bPad = onePlug2bPad
exports.onePlug3aPad = onePlug3aPad
exports.onePlug3bPad = onePlug3bPad
exports.onePlug4aPad = onePlug4aPad
exports.onePlug4bPad = onePlug4bPad
exports.onePlug5aPad = onePlug5aPad
exports.onePlug5bPad = onePlug5bPad