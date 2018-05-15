**Fowl Five**
a module with the formula for calculating the [Fowl Five Index](http://danmckeown.info/fowlfive) of Cryptos (version 1)

***About***
- The function `getFowlFiveIndexV1` in [index.js](index.js) contains the formula used to calculate the value of the [Fowl Five Index of Cryptos](http://danmckeown.info/fowlfive)
- This function accepts five objects, each with the properties `name` (a string), and the numbers `price`, and `cap` of a particular cryptocurrency
- The index was designed to include Bitcoin, Ethereum, Bitcoin Cash, Litecoin and Dash.
- The [tests](testsuite.test.js) demonstrate calculating the formula
