const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'pug');

// root route
app.get('/', (req, res) => {
    res.render('index');
});

// data get request for assignment-2
app.get('/data', (req, res) => {
    if (!isNaN(req.query.number)) {
        let arr = Array.from({length: req.query.number}, (_, i) => i + 1)
        let sum = arr.reduce(function(pv, cv) {return pv + cv;}, 0);
        res.send(`<h1>${sum}</h1>`);
    } else if (typeof req.query.number === 'undefined') {
        res.send('<h1>Lack of Parameter</h1>');
    } else {
        res.send('<h1>Wrong Parameter</h1>');
    }
});

// data post request for assignment-3
app.post('/data', (req, res) => {
    if (!isNaN(req.query.number)) {
        let arr = Array.from({length: req.query.number}, (_, i) => i + 1)
        let sum = arr.reduce(function(pv, cv) {return pv + cv;}, 0);
        res.send(`<h1>${sum}</h1>`);
    } else if (typeof req.query.number === 'undefined') {
        res.send('<h1>Lack of Parameter</h1>');
    } else {
        res.send('<h1>Wrong Parameter</h1>');
    }
});

// myName get request for assignment-4
app.get('/myName', (req, res) => {
    if (typeof req.cookies.username === 'undefined'){
        res.render('myName');
    } else {
        res.send(`<h1>${req.cookies.username}</h1><br>
                  <form action="/clear_cookie_username", method="get">
                    <input type="submit" value="Log Out"/>
                  </form>`);
    }
});

// trackName get request for assignment-4
app.get('/trackName', (req, res) => {
    if (req.query.name) {
        res.cookie('username', req.query.name)
    }
    res.redirect('/myName');
});

// clear cookie username
app.get('/clear_cookie_username', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
 });

app.listen(3000, () => {
    console.log('The application is running on localhose:3000');
});