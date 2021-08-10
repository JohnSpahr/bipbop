# bipbop! Character Set
ASCII is so yesteryear. Okay, not actually, but it is annoying in that it requires 8 bits, or 1 byte, of data per character. Now, I'm not saying this because I'm of the opinion that a byte takes up too much storage. Not these days. However, when you only have 4 LEDs to work with and want to display more than the most basic of information with them, there's not a whole lot you can do as far as I can tell. Unless, of course, you develop an ASCII alternative that can work with just one nibble (half of a byte) of data! That's where bipbop! comes in!

| Bits               | Character                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------|
| @ @ @ @<br>0 0 0 0 | **= 0**<br>Period. This indicates a stopping point for in-between characters or can be used a decimal point. |
| @ @ @ #<br>0 0 0 1 | **= 1**<br>Number 0.                                                                                         |
| @ @ # @<br>0 0 2 0 | **= 2**<br>Number 1.                                                                                         |
| @ @ # #<br>0 0 2 1 | **= 3**<br>Number 2.                                                                                         |
| @ # @ @<br>0 4 0 0 | **= 4**<br>Number 3.                                                                                         |
| @ # @ #<br>0 4 0 1 | **= 5**<br>Number 4.                                                                                         |
| @ # # @<br>0 4 2 0 | **= 6**<br>Number 5.                                                                                         |
| @ # # #<br>0 4 2 1 | **= 7**<br>Number 6.                                                                                         |
| # @ @ @<br>8 0 0 0 | **= 8**<br>Number 7.                                                                                         |
| # @ @ #<br>8 0 0 1 | **= 9**<br>Number 8.                                                                                         |
| # @ # @<br>8 0 2 0 | **= 10**<br>Number 9.                                                                                        |
| # @ # #<br>8 0 2 1 | **= 11**<br>+ (plus sign) - addition operator                                                                |
| # # @ @<br>8 4 0 0 | **= 12**<br>- (minus sign) - subtraction operator                                                            |
| # # @ #<br>8 4 0 1 | **= 1**3<br>* (multiply sign) - multiplication operator                                                      |
| # # # @<br>8 4 2 0 | **= 14**<br>/ (divide sign) - division operator                                                              |
| # # # #<br>8 4 2 1 | **= 15**<br>Space. This is used to separate words and thoughts.                                              |

