//  test suite for fowlfive module
//  copyright 2018 by http://danmckeown.info licensed under ISC license
//  Jest tests: `npm run jest`

const getFowlFiveIndexV1 = require('./index.js');
const cryptoCur = require('./cryptoCur');

test('correct shape of cryptoCur object', () => {
  let btc = new cryptoCur("Bitcoin", 8867, 150689347341);
  let bitcoin = Object.assign({"name": "Bitcoin", "price": 8867, "cap": 150689347341});
  expect(btc).toMatchObject(bitcoin);
});

test('BTC at 10000 and everything else undefined should equal 1000', () => {
  let btc = new cryptoCur("Bitcoin", 10000, 149882514132);
  let btcTest = getFowlFiveIndexV1(btc);
  console.log(btcTest);
  expect(btcTest).toEqual(1000);
});

test('BTC 8867, ETH 633, BCH 1228, LTC 148, DASH 466 should equal 1166', () => {  // ~ 7:54pm 4/22/2018
  let btc = new cryptoCur("Bitcoin", 8867, 150689347341);
  let eth = new cryptoCur("Ether", 633, 62681647244);
  let bch = new cryptoCur("Bitcoin Cash", 1228, 20987488920);
  let ltc = new cryptoCur("Litecoin", 148, 8310353275);
  let dsh = new cryptoCur("Dash", 466, 3741707233);
  let btcTest = getFowlFiveIndexV1(btc, eth, bch, ltc, dsh);
  console.log(btcTest);
  expect(Math.round(btcTest)).toEqual(1166);
});

test('BTC 8718.92, ETH 727.26, BCH 1424.17, LTC 147.90, DASH 435.53 should equal 1186', () => {  // ~ 3:33pm 5/14/2018
  let btc = new cryptoCur("Bitcoin", 8718.92, 148515572231);
  let eth = new cryptoCur("Ether", 727.26, 72316742381);
  let bch = new cryptoCur("Bitcoin Cash", 1424.17, 24393148156);
  let ltc = new cryptoCur("Litecoin", 147.90, 8361291731);
  let dsh = new cryptoCur("Dash", 435.53, 3515085877);
  let btcTest = getFowlFiveIndexV1(btc, eth, bch, ltc, dsh);
  console.log(btcTest);
  expect(Math.round(btcTest)).toBeCloseTo(1186);
});
