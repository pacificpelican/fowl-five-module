**Fowl Five**
a module with the formula for calculating the [Fowl Five Index](https://djmblog.com/page/Fowl-Five-Index) of Cryptos (version 1)

***About***
- The function `getFowlFiveIndexV1` in [index.js](index.js) contains the formula used to calculate the value of the [Fowl Five Index of Cryptos](http://danmckeown.info/fowlfive)
- This function accepts five objects, each with the properties `name` (a string), and the numbers `price`, and `cap` of a particular cryptocurrency
- The index was designed to include Bitcoin, Ethereum, Bitcoin Cash, Litecoin and Dash.
- The [tests](testsuite.test.js) demonstrate calculating the formula

**How to use**
- First you want to add the fowlfive module to your project:

`npm install --save fowlfive`


- You can then import the getFowlFiveIndexV1 function into your JavaScript project:

`import getFowlFiveIndexV1 from "fowlfive";`


- Then the formula can be calcuated by creating objects for each crypto and using them as arguments to the function getFowlFiveIndexV1:

  `let btc = new cryptoCur("Bitcoin", 8867, 150689347341);`

  `let eth = new cryptoCur("Ether", 633, 62681647244);`

  `let bch = new cryptoCur("Bitcoin Cash", 1228, 20987488920);`

  `let ltc = new cryptoCur("Litecoin", 148, 8310353275);`

  `let dsh = new cryptoCur("Dash", 466, 3741707233);`

  `let fowlfiveindex = getFowlFiveIndexV1(btc, eth, bch, ltc, dsh);`


- The objects should have this shape, as seen in the [cryptoCur class](cryptoCur.js):

`Object.assign({"name": "Bitcoin", "price": 8867, "cap": 150689347341});`

**NPM**

The NPM package is available at [https://www.npmjs.com/package/fowlfive](https://www.npmjs.com/package/fowlfive).

**GitHub**

The GitHub repo is available at [https://github.com/pacificpelican/fowl-five-module](https://github.com/pacificpelican/fowl-five-module).

**License**

ISC

**Created By**

[Dan McKeown](http://danmckeown.info)
