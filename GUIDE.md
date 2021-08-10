# bipbop! Character Set
ASCII is so yesteryear. Okay, not actually, but it is annoying in that it requires 8 bits, or 1 byte, of data per character. Now, I'm not saying this because I'm of the opinion that a byte takes up too much storage. Not these days. However, when you only have 4 LEDs to work with and want to display more than the most basic of information with them, there's not a whole lot you can do as far as I can tell. Unless, of course, you develop an ASCII alternative that can work with just one nibble (half of a byte) of data! That's where bipbop! comes in!

## Use Cases
I recognize that the first question many people will ask about this project is something along the lines of: "What's the practical purpose of this?" or "What real-world problem does this solve?"

To these people, I am delighted to say that this doesn't really have one! It's basically a simple proof of concept and that's about it. It's up to you to decide if, where, and how you want to apply it!

## Two(?) Methods of Representing Data
While I'm still figuring out bipbop! myself, at this time, I can think of two methods it can represent information. What do I mean by this? Well, lets start with the first (and simpler) way. Different combinations of bits represent each character in the bipbop! character set, and that's it. So, if we have a binary value of 1001 per se, that adds up to 9 in decimal, and the corresponding character in the table below is 8. It's that simple!

Now, let's take a look at the second, more complex method of doing this. Essentially, you can use bipbop! as a character set to represent another character set! Don't worry, I'll explain this. So, if we have the nibble 1001 again, we can determine once more that this is 9 in decimal and represents the number 8. This time, we're not done, though. Next, we must consult an ASCII character chart and decide which number corresponds to the number 8. That would be backspace.

Admittedly, that's not extremely helpful, and chances are that you will be wanting to represent characters above 9 in the ASCII character chart. Thankfully, there's a solution for this! Below, you'll notice that value 0000 represents the space character. This can be used to show the end of one character and as a separator of sorts. To better show this, take 0010 0100 0000. If you convert this to decimal and then check the bipbop! character chart, you'll get: 2 3 (space) You can simplify this to 23.

## How It Works

## Character Chart

| Bits               | Character                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------|
| @ @ @ @<br>*0 0 0 0* | **= 0**<br>Space. This is used to separate words and thoughts.                                               |
| @ @ @ #<br>*0 0 0 1* | **= 1**<br>Number 0.                                                                                         |
| @ @ # @<br>*0 0 2 0* | **= 2**<br>Number 1.                                                                                         |
| @ @ # #<br>*0 0 2 1* | **= 3**<br>Number 2.                                                                                         |
| @ # @ @<br>*0 4 0 0* | **= 4**<br>Number 3.                                                                                         |
| @ # @ #<br>*0 4 0 1* | **= 5**<br>Number 4.                                                                                         |
| @ # # @<br>*0 4 2 0* | **= 6**<br>Number 5.                                                                                         |
| @ # # #<br>*0 4 2 1* | **= 7**<br>Number 6.                                                                                         |
| # @ @ @<br>*8 0 0 0* | **= 8**<br>Number 7.                                                                                         |
| # @ @ #<br>*8 0 0 1* | **= 9**<br>Number 8.                                                                                         |
| # @ # @<br>*8 0 2 0* | **= 10**<br>Number 9.                                                                                        |
| # @ # #<br>*8 0 2 1* | **= 11**<br>+ (plus sign) - addition operator                                                                |
| # # @ @<br>*8 4 0 0* | **= 12**<br>- (minus sign) - subtraction operator                                                            |
| # # @ #<br>*8 4 0 1* | **= 1**3<br>* (multiply sign) - multiplication operator                                                      |
| # # # @<br>*8 4 2 0* | **= 14**<br>/ (divide sign) - division operator                                                              |
| # # # #<br>*8 4 2 1* | **= 15**<br>Period. This indicates a stopping point for in-between characters or can be used a decimal point.|

