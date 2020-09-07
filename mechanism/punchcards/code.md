id. memory      data types                                            // base(10)
00. 1       --> null
01. 2       --> function
02. 3       --> symbol
03. 4       --> object
04. 5       --> string                                                      level
05. 6       --> array                                                      square
06. 7       --> number
07. 8       --> boolean
08. 9       --> infinity                                                   number
09. 0       --> undefined

id. physical    wire                                                   // base(7)
50. ::      --> jam:                                       symbol for ring wiring
51. []      --> switch:                                   symbol for rotor wiring
52. {}      --> swap:                                      symbol for drum wiring
53. //      --> flip:                                     symbol for level wiring
54. ++      --> write rotation
55. --      --> read rotation
56. ==      --> spin rotation

id. data link   frame                                                  // base(2)
10. 0        -> false = 8:                                                   slow
11. 1        -> true = 64:                                                   fast

id. network     packet                                                 // base(4)
12. 00      --> 2 - 2 = 0:                                                    top
13. 11      --> 1 / 1 = 1:                                                  right
14. 10      --> 1 * 2 = 2:                                                 bottom
15. 01      --> 2 + 1 = 3:                                                   left

id. transport   segmentation                                           // base(8)
20. 000    ---> 7 + 1/8(9 * 8) - 8 = 8:                              substitution
21. 001    ---> 8 + 1/9(3 * 360) - 1 = 127:                                binary
22. 011    ---> 1 + 1/2(9 * 128) - 2 = 577:                           permutation
23. 010    ---> 2 + 1/3(27 * 26) - 3 = 233:                              alphabet
24. 101    ---> 3 + 1/4(19 * 18) - 4 = 84.5:                              ternary
25. 110    ---> 4 + 1/5(11 * 10) - 5 = 21:                                 number
26. 100    ---> 5 + 1/6(7 * 6) - 6 = 6:                                   payload
27. 111    ---> 6 + 1/7(5 * 256) - 7 = 181.857142857:                     address

id. session     data                                                  // base(16)
30. 10      --> <>:                                                         start
31. 11      --> </>:                                                       finish
32. 12      --> >:                                                    compression
33. 13      --> <:                                                      expansion
34. 14      --> ><:                     expanded-compressed = compressed-expanded 
35. 15      --> ->:                                      1 read rotation forwards
36. 16      --> <--:                                   backwards 2 read rotations
37. 17      --> <->:                        stream cipher (use reserved keywords)
38. 18      --> <-->:                          block cipher (use custom keywords)
39. 19      --> <>a</>:                                              generate key
40. 20      --> <a></a>:                                        stream encryption
41. 21      --> <div>derive a hash from this plain text</div>:             digest
42. 22      --> <>my-key</>:                                         generate key
43. 23      --> <my-key></my-key>:                               block encryption
44. 24      --> <my-key>encrypt this plain text</my-key>:                  cipher
45. 25      --> <my-key style="top: 0;">encoded</my-key>:           sign & verify

id. presentationdata                                                  // base(30)
60.        <--> ?? parent(in + random)                                      level
61.        <--> .. edge(?.! through ?.!)                             drum & rotor
62.        <--> !! child(random - out)                                       ring
63.       <---> ? graph(reflector = cipher) . node(signal: plain text) !   memory
64. 2019 <ttss> ABCDEFGHIJKLMNOPQRSTUVWXYZ
65. ?       <-> 01 = a = a:                                                     a
66. .       <-> 03 = c = c:                                                     c
67. !       <-> 02 = b = b:                                                     b
68.  ?     <--> 24 = l * b:                                                     x
69.  .     <//> 25 = e * e:                                                     y
70.  !     <--> 26 = m * b:                                                     z
71. ??     <::> 11 = a ~ a:                                                     k
72. ?!     <--> 12 = a ~ b:                                                     l
73. ?.     <--> 13 = a ~ c:                                                     m
74. ..     <--> 06 = c + c:                                                     f
75. .?     <==> 04 = c + a:                                                     d
76. .!     <--> 05 = c + b:                                                     e
77. !!     <[]> 22 = b ~ b:                                                     v
78. !.     <{}> 23 = b ~ c:                                                     w
79. !?     <--> 21 = b ~ a:                                                     u
80. ? ?   <---> 07 = k - d:                                                     g
81. ? !   <---> 08 = l - d:                                                     h
82. ? .   <+++> 09 = m - d:                                                     i
83. . .   <---> 10 = f + d:                                                     j
84. . ?   <---> 14 = d + j:                                                     n
85. . !   <---> 15 = e * c:                                                     o
86. ! !   <---> 16 = v - f:                                                     p
87. ! .   <---> 17 = w - f:                                                     q
88. ! ?   <---> 18 = u - f:                                                     r
89. 1920 <sstt> abcdefghijklmnopqrstuvwxyz

id. application data                                                   // base(8)
90. +        <- in
91. /        <- through:                                                    level
92. (        <- key wrap
93. *        <- through:                                                     drum
94. )        <- key unwrap
95. -        <- out:                                                        rotor
96. =        <- reflector
97. :        <- key exchange:                                                ring