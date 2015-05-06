var express = require('express');
var app = express();
var balance = require('./balance');

app.set('port', (process.env.PORT || 5000));

app.get("/", function(request, response){
    response.send(balance.moneyBalance());
});

app.listen(app.get('port'), function(){
    console.log('node is running');
});