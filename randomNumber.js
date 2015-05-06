var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};

// parentheses ? after right randomNumber?
module.exports.randomNumber = randomNumber;
