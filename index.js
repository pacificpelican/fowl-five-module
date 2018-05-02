//  getFowlFiveIndexV1.js
//  This is the forumula for calculating the Fowl Five Index of Cryptos
//  http://danmckeown.info/fowlfive
//  copyright Jan-April 2018 by Dan McKeown Licensed under the ISC License
//  This function is published as part of the Paper Umbrella repo:
//  https://github.com/pacificpelican/paper-umbrella/blob/master/pages/fowlfive.js
//  The `...cryptos` argument accepts (five) objects of this shape:
//  Object.assign({"name": "Bitcoin", "price": 8867, "cap": 150689347341})

function getFowlFiveIndexV1(...cryptos) {

  //  expected crypto object parameters: bitcoin, ethereum, bitcoincash, litecoin, dash
  let totalCap = 0;
  let totalPrice = 0;

  const capLimit = cryptos[0].cap; //  assuming for now [0] will be bitcoin
  const priceStandard = cryptos[0].price;
  let subAmount = 0;
  let runningTotal = 0;
  let subAmountArray = [];
  let refAmtTotal = 0;
  let localRebasedPriceRatioTotal = 0;
  let priceTotal = 0;

  for (let crypto of cryptos) {
    totalCap = totalCap + crypto.cap;
    totalPrice = totalPrice + crypto.price;
    let localPriceCapRatio = totalPrice / totalCap;

    priceTotal = priceTotal + crypto.price;

    let localCapPercentage = crypto.cap / capLimit;
    subAmount = localCapPercentage * crypto.price;
    let localRebasedPriceRatio = crypto.price / priceStandard;
    let localRebasedPrice =
      crypto.price * (localRebasedPriceRatio * crypto.cap) / 10000000000;
    if (localRebasedPriceRatio !== 1) {
      localRebasedPriceRatioTotal =
        localRebasedPriceRatioTotal + localRebasedPriceRatio;
    } else {
      localRebasedPriceRatioTotal =
        localRebasedPriceRatioTotal + crypto.price / 10000;
    }

    let refAmt = localCapPercentage * localRebasedPrice;
    refAmtTotal = refAmtTotal + refAmt;

    let localBTCbasis = crypto.price / cryptos[0].price;
    let localAdjustedRebasedPrice = crypto.price / localBTCbasis; //  this acts like a checksum
    let adjustedFowlTotal = localAdjustedRebasedPrice * localRebasedPriceRatio;

    subAmountArray.push(subAmount);

    runningTotal = localRebasedPrice / 100 + runningTotal;
  }

  let adjustedLocalRebasedPriceRatioTotal = localRebasedPriceRatioTotal * 1000;
  let fowlFiveIndex = adjustedLocalRebasedPriceRatioTotal;
  return fowlFiveIndex;
}

module.exports = getFowlFiveIndexV1;
