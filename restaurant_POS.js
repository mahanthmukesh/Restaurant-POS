var express = require('express');

var app = express();

app.set('port', process.env.PORT||3000);

app.get('/', function(req,res){

    res.type('plain/html');
    res.send("<h1>Restaurant POS Page</h1><p>Main Page of Restaurant POS</p>");
})

app.get('/about', function(req,res){

    res.type('plain/html');
    res.send("<h1>About Page</h1> <p> Restaurant POS</p>");
})

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(app.get('port'), function(){
    console.log("Listening to port " + app.get('port')+" ....");
});