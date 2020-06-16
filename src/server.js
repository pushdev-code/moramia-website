// load the things we need
var express = require('express');
var app = express();
const path = require('path');
const exec = require('child_process').exec;

// set the view engine to ejs
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

// index page 
app.get('/', function(req, res) {
    res.render('pages/index',{
        title:'Moramia <3',
        refreshUrl:process.env.BROWSER_REFRESH_URL //browser refresh listening
    });
});

app.listen(8080,() => {
    if (process.send) {
        process.send({ event:'online', url:'http://localhost:8080/' });
    }
    exec('webpack', (error, stdout, stderr) => {
        if (error !== null) {
            console.log('exec error: ' + error);
        } 
        return;
    });
});

console.log('8080 is the magic port');
