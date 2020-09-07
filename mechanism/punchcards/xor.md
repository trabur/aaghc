id. input + input =                 output: code            // base(8)
10. 0       0                       0       1.             01: bottom
11. 0       1                       1       2.             02: front
12. 1       0                       1       3.             03: out
13. 1       1                       0       4.             04: back
14. 1       1                       1       5.             05: top
15. 0       1                       0       6.             06: in
16. 1       0                       0       7.             07: left
17. 0       0                       1       8.             08: right

id. idput + idput =                 bitput: code            // base(4)
18. 10      10                      00      aa.             a: west
19. 10      11                      01      ab.             w: north
20. 11      11                      11      bb.             d: east
21. 11      10                      10      ba.             s: south

id. doput + doput =                 numput: code            // base(2)
22. aa      aa                      1       a.              0: start
23. aa      ab                      2       b.              1: finish

id. onput + onput =                 letput: code            // base(1)
24. a       a                       aa      00.             2: loop

id. onset + idset + doset + inset = secret: code            // base(6)
00. 0       0       0       0       a       0.             aa: red
01. 1       1       1       1       d       1.             bb: orange
02. 2       2       2       2       h       00.            cc: yellow
03. 3       3       3       3       l       01.            dd: green
04. 4       4       4       4       p       10.            ee: blue
05. 5       5       5       5       t       11.            ff: purple

// abcdefghijklmnopqrstuvwxyz:0(1+2=3).456789
AAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHC

password:
suppose we have a single 32 x 70 grid of points for a total number of
2,240 possibilities; for each possibility there is a chance that it's
value could be 1 of the 45 possible characters on line 32. now! using
the key on line 33 and the burn cipher method starting on line 36
what is the password to this encrypted text?

rules:
  i. output + output = onset: letput // ba
 ii. letput + letput = idset: numput // cb
iii. numput + numput = doset: bitput // dc
 iv. bitput + bitput = inset: output // ad

code:
- 360 + 360 = (?)

plain text:
- 360

verify:
- chance + possibility + opportunity = total: point // AA

message:
suppose we have a single 64 x 70 grid of points for a total number of
4,480 possibilities; for each possibility there is a chance that it's
value could be 1 of the 45 possible characters on line 64. now! using
the key on line 65 and the burn cipher method starting on line 58
what is the password to this encrypted text?

AAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHCAAGHC
// abcdefghijklmnopqrstuvwxyz:0(1+2=3).456789

key chart:
===============================================
0000. ack-all + garbage + hash + cipher = aaghc
1111. set-put * code    * base * id     = AAGHC
===============================================

code chart:
===================================================================================================================================================================
9. a.                  b.                  c.                  d.                  e.                  f.                  g.                  h.                J.
1. alphabet(52)      * symbol(M)         * color(6)          * loop(1)           * move(2)           * direction(4)      * cube(8)           * number(10)        B.
2. symbol(M)         * color(6)          * loop(1)           * move(2)           * direction(4)      * cube(8)           * number(10)        * alphabet(52)      C.
3. color(6)          * loop(1)           * move(2)           * direction(4)      * cube(8)           * number(10)        * alphabet(52)      * symbol(M)         D.
4. loop(1)           * move(2)           * direction(4)      * cube(8)           * number(10)        * alphabet(52)      * symbol(M)         * color(6)          E.
5. move(2)           * direction(4)      * cube(8)           * number(10)        * alphabet(52)      * symbol(M)         * color(6)          * loop(1)           F.
6. direction(4)      * cube(8)           * number(10)        * alphabet(52)      * symbol(M)         * color(6)          * loop(1)           * move(2)           G.
7. cube(8)           * number(10)        * alphabet(52)      * symbol(M)         * color(6)          * loop(1)           * move(2)           * direction(4)      H.
8. number(10)        * alphabet(52)      * symbol(M)         * color(6)          * loop(1)           * move(2)           * direction(4)      * cube(8)           I.
0. 000                 001                 010                 011                 110                 101                 100                 111               A.
===================================================================================================================================================================

program chart:
=========================================================================
- az 21 a. b! c? d; e. f! g? h; i. j! k? l; m. n! o? p; q. r! s? t; 22 :y
- b: .1 01 02 03 04 05 24 22 23 18 19 20 21 10 11 12 13 14 15 16 17 A. :x
- c: !2 24 22 23 18 19 20 21 10 11 12 13 14 15 16 17 01 02 03 04 05 B! :w
- d: ?3 22 23 18 19 20 21 10 11 12 13 14 15 16 17 01 02 03 04 05 24 C? :v
- e: ;4 18 19 20 21 10 11 12 13 14 15 16 17 01 02 03 04 05 24 22 23 D; :u
- f: .5 10 11 12 13 14 15 16 17 01 02 03 04 05 24 22 23 18 19 20 21 E. :t
- g: 30 u. v! w? x; y. z! a? b; c. d! e? f; g. h! i? j; k. l! m? n; 23 :s
- h: !6 24 22 23 18 19 20 21 10 11 12 13 14 15 16 17 01 02 03 04 05 F! :r
- i: ?7 22 23 18 19 20 21 10 11 12 13 14 15 16 17 01 02 03 04 05 24 G? :q
- j: ;8 18 19 20 21 10 11 12 13 14 15=16 17 01 02 03 04 05 24 22 23 H;=:p
- k: .9 10 11 12 13 14 15 16 17 01 02+03 04 05 24+22 23 18 19 20 21 I.+:o
- l: !0 01 02 03 04 05 24 22=23-18-19+20 21 10 11+12-13-14-15-16=17-J!+:n
- m: 29 o. p! q? r; s. t! u?+v; w. x! y? z; aa bb cc dd ee ff gg+hi 24 :m
- n: ?0 22 23 18 19 20 21 10+11 12 13 14 15 16 17 01 02 03 04 05+24 K? :l
- o: ;9 18 19 20 21 10 11 12+13 14 15 16 17 01 02 03 04 05 24=22+23 L; :k
- p: .8 10 11 12 13 14 15 16+17-01-02-03=04-05-24-22=23-18-19+20 21 M. :j
- q: !7 01 02 03 04 05 24 22 23 18 19 20+21 10 11 12+13 14 15 16 17 N! :i
- r: ?6 24 22 23 18 19 20 21 10 11=12-13+14 15 16 17+01 02 03 04 05 O? :h
- s: 28 IH GG FF EE DD CC BB AA Z;+Y? X! W. V; U? T!+S. R; Q? P! O. 25 :g
- t: ;5 18 19 20 21 10 11 12 13 14+15 16 17 01 02 03+04 05 24 22 23 P; :f
- u: .4 10 11 12 13+14-15-16-17-01+02-03=04-05-24-22+23 18 19 20 21 Q. :e
- v: !3 01 02 03 04 05 24 22 23 18+19 20-21 10 11 12 13 14 15 16 17 R! :d
- w: ?2 24 22 23 18 19 20 21 10 11+12 13-14 15 16 17 01 02 03 04 05 S? :c
- x: ;1 22 23 18 19 20 21 10 11 12+13 14-15 16 17 01 02 03 04 05 24 T; :b
- y: 27 N; M? L! K. J; I? H! G. F;+E? D!-C. B; A? Z! Y. X; W? V! U. 26 za
=========================================================================

script chart:



secret channels:
.. CUBE/PHYSICAL(1/8)                              // drum
!! AA/GHC/M(52 - 28 - 6 - 1 - 2 - 4 - 8 - 10)      // cache
?? 22(key(45) * set(2) - let(26 + 26) - num(10))   // memory
;; 145/256                                         // head
