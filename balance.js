var convert = require('./convert');
var randomNumber = require('./randomNumber');

var money = function(){
    convert(randomNumber(1, 100));
};

var moneyBalance = function(){
    return "Account balance: " + money;
};

module.exports.money = money;
module.exports.moneyBalance = moneyBalance;
