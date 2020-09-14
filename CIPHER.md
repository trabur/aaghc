AAGHC
=====
secret:
// reflect
-- board
:: plug

CODE:          (message)
-- 01 :: UU BB // board one plug password return
-- 02 :: RT BB // board two plug cipher text return
-- 03 :: TR BB // board three plug text cipher return
-- 04 :: PT BB // board four plug plain text return
-- 05 :: TP BB // board five plug text plain return
-- 06 :: AA BB // board six plug packet return
-- 07 :: SS BB // board seven plug wiring return
-- 08 :: YY BB // board eight plug lightboard return
-- 09 :: TT BB // board nine plug tunnel return
-- 10 :: GO BB // board ten plug counter clockwise return
-- 11 :: OG BB // board 11 plug clockwise return
-- 12 :: LL BB // board 12 plug protocol return
-- 13 :: WW BB // board 13 plug swinging cradle return
-- 14 :: OO BB // board 14 plug connection return
-- 15 :: QQ BB // board 15 plug signal return
-- 16 :: CC BB // board 16 plug partition tolerance return
-- 17 :: KK BB // board 17 plug turn return
-- 18 :: BB BB // board 18 plug return return
-- 19 :: MM BB // board 19 plug to return
-- 20 :: FF BB // board 20 plug from return
-- 21 :: AD BB // board 21 plug stack above return
-- 22 :: TH BB // board 22 plug math return
-- 23 :: DA BB // board 23 plug stack below return
-- 24 :: ND BB // board 24 plug encrypt decrypt return
-- 25 :: HH BB // board 25 plug rotors return
-- 26 :: EE BB // board 26 plug reflector return
-- 27 :: VR BB // board 27 plug vector return
-- 28 :: XX BB // board 28 plug jam return

CIPHER:                         (message)
-- ND :: /I /N /Z /K BB         // board encrypt plug start move from left to right move from top to bottom finish return
-- DN :: /K /Z /N /I BB         // board decrypt plug finish move from top to bottom move from left to right start return
-- PP :: :: -- BB               // board PP plug plugboard return
-- JU :: XX // BB               // board JU plug jam reflect return
-- RT VR LL :: BB               // board cipher text vector protocol plug return
-- AA :: M/ BB                  // board AA plug UP return
-- VV :: W/ BB                  // board VV plug DOWN return
-- RT TH LL :: BB               // board cipher text math protocol plug return
-- HH :: /I AD /I QQ /H BB      // board rotors plug start stack above start signal reflect return
-- EE :: /E DA /F QQ /L BB      // board reflector plug rotor stack below key signal node return
-- RT KK LL :: BB               // board cipher text turn protocol plug return
-- NN :: KK OG MM ND BB         // board NN plug turn clockwise to encrypt decrypt return
-- ZZ :: KK GO MM ND BB         // board ZZ plug turn counter clockwise to decrypt encrypt return

transformations: 
translation      square:vigenere cipher
rotation         circle:wheel cipher
scaling        triangle:xor cipher

keyboard: 90 chars (kernel)
AAAASSssDDDDFFFF
AAAASSssDddDFffF
aaaaSSssDddDFffF
aaaaSSssDDDDFFFF
  ZZZZXXXXCCCC
  ZzzZXxxXCccC
  ZzzZXxxXCccC
  ZZZZXXXXCCCC

lightboard: 4 chars (shell)
input: `~
output: \|

switchboard: 10 KEY (application)
shift
control
command
option
return
delete
fn
tab
caps lock
esc1

PT TT:                                  // plain text tunnel
- F: key
- X: value

PT LL:                                  // plain text protocol
- I: start
- N: move from left to right
- Z: move from top to bottom
- K: finish

PT QQ:                                  // plain text signal
- M: UP
- W: DOWN
- V: down
- A: up

UU SS:                                  // password wiring
- L: node
- T: edge
- Y: graph

UU HH:                                  // password rotors
- H: rotor
- J: jam reflector wire
- U: main reflector

UU HH:                                  // password reflector
- B: aTb
- D: bTd
- P: cTp
- Q: dTq

ISO
===
physical:
- O: 1
- G: 2
- C: 3

data-link:
- b: signal flows from top to bottom then counter clockwise
- d: signal flows from top to bottom then clockwise
- p: signal flows from bottom to top then clockwise
- q: signal flows from bottom to top then counter clockwise

network:
- ACK: aabcdefghijklmnopqrstuvwxyz

golben ratio
golden ratio
golpen ratio
golqen ratio

englis == H if message
doengl at H // rotation
  legI is H
  legN is Z
  legE is M
odengl at T // stack
  legH is T
ondegl at M // reflect
  legW is M
nodegl at L // point
  legT is L
donegl at A // jam
  legM is A
  legW is V
odnegl at J // signal
  legU is J
  legO is C
golden at R // plug
  lenP is R
  lenR is B
  lenB is D
  lenD is P
logden at F // event
  lenS is F // emit
  lenY is G // on
  lenX is K // off
deglis == Q if program
ceglis == PHINZEMTWLAVJUOCRPBDFSYGXKQ
meglis == AABCDEFGHIJKLMNOPQRSTUVWXYZ