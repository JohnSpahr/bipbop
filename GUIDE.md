# bipbop! Character Set
ASCII is so yesteryear. Okay, not actually, but it is annoying in that it requires 8 bits, or 1 byte, of data per character. Now, I'm not saying this because I'm of the opinion that a byte takes up too much storage. Not these days. However, when you only have 4 LEDs to work with and want to display more than the most basic of information with them, there's not a whole lot you can do as far as I can tell. Unless, of course, you develop an ASCII alternative that can work with just one nibble (half of a byte) of data! That's where bipbop! comes in!

I had to be pretty creative with bipbop! for a few reasons. Most obviously, we only have 16 different combinations to work with here since we have 4 bits. Also, I had to pick which characters I could include given these constraints. Ultimately, I settled on primarily numeric characters for reasons I'll explain later. Lastly, I had to decide which characters to include after I had decided on 0-9, period, and space. Ultimately, I chose to include the 4 common operators used in math.

## Use Cases
I recognize that the first question many people will ask about this project is something along the lines of: "What's the practical purpose of this?" or "What real-world problem does this solve?"

To these people, I am delighted to say that this doesn't really have one! It's basically a simple proof of concept and that's about it. It's up to you to decide if, where, and how you want to apply it!

## Two(?) Methods of Representing Data
While I'm still figuring out bipbop! myself, at this time, I can think of two ways it can represent information. What do I mean by this? Well, lets start with the first (and simpler) way. Different combinations of bits represent each character in the bipbop! character set, and that's it. So, if we have a binary value of 1001 per se, that adds up to 9 in decimal, and the corresponding character in the table below is 8. It's that simple!

Now, let's take a look at the second, more complex method of doing this. Ironically enough, this actually involves converting bipbop! to ASCII. Guess it's not so yesteryear after all! Anyway, essentially, you can use bipbop! as a character set to represent another character set. In this example, we'll use ASCII since it's pretty famous and cool. Don't worry, I'll explain this. So, if we have the nibble 1001 again, we can determine once more that this is 9 in decimal and represents the number 8. This time, we're not done, though. Next, we must consult an ASCII character chart and decide which number corresponds to the number 8. That would be backspace.

Admittedly, that's not extremely helpful, and chances are that you will be wanting to represent characters above 9 in the ASCII character chart. Thankfully, there's a solution for this! Below, you'll notice that value 0000 represents the space character. This can be used to show the end of one character and as a separator of sorts. To better show this, take a look at 1000 0011 0000 0111 0100. If you convert this to decimal and then check the bipbop! character chart, you'll get 7 2 (space) 7 3. You can simplify this to 72 73. Character 72 (in decimal) is H is ASCII, and 73 is I. As a result, I just told you "hi" in bipbop!

This is a bit confusing, I know. It definitely isn't the most efficient, but it does make for some pretty sneaky hidden codes. It's also worth mentioning that there may even be more ways of representing data in bipbop! One could also develop a more efficient character set to use with it, too. The sky's the limit, and it's up to you to figure out what else you can do with it!

## bipbop! Demo
Coming soon. Just have to get my Arduino up and running, write some code, and publish the finished product. Stay tuned.

## Character Chart
Key:
- 0 = **@**
- 1 = **#**

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
