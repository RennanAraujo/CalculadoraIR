const moment = require("moment");
console.log("Brazilian Income Tax Rate Bracket");
class operation {
  constructor(buyDate, sellDate, profit) {
    this.buyDate = buyDate;
    this.sellDate = sellDate;
    this.profit = profit;
  }
}
const myOperation = new operation(
  moment.utc("2019-10-28", "YYYY-MM-DD").unix(),
  moment.utc("2021-10-05", "YYYY-MM-DD").unix(),
  1950.20
);
/*(myOperation.buyDate = moment.utc("2019-10-28", "YYYY-MM-DD").unix()),
  (myOperation.sellDate = moment.utc("2021-10-28", "YYYY-MM-DD").unix()),
  (myOperation.profit = 2000),
  (myOperation.rate = 0);*/

let timeInterval = (myOperation.sellDate - myOperation.buyDate) / 86400;
//console.log(`interval ${timeInterval}`);
if (timeInterval <= 180) {
  rate = 0.225;
} else if (timeInterval > 180 && timeInterval <= 360) {
  rate = 0.2;
} else if (timeInterval > 360 && timeInterval <= 720) {
  rate = 0.175;
} else if (timeInterval > 720) {
  rate = 0.175;
}
myOperation.rate = rate; //TODO rate não fazia parte da classe original, interessante separar
function taxCalc(profit, rate) {
  let tax = profit * rate;
  return tax;
}
//console.log(`${myOperation.profit}
//${myOperation.rate}`);

const res = taxCalc(myOperation.profit, myOperation.rate);
console.log(`O valor apurado do imposto é: R$${res}`);
