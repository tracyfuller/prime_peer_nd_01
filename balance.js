var convert = require('./convert');
var randomNumber = require('./randomNumber');

var money = function(){
    var rando = randomNumber(1, 100);
    return convert(rando);
};

var moneyBalance = function(){
    return "Account balance: " + money();
};

module.exports.money = money;
module.exports.moneyBalance = moneyBalance;
