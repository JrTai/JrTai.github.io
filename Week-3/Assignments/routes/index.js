const express = require('express');
const router = express.Router();

// root route
router.get('/', (req, res) => {
    res.render('index');
});

// data get request for assignment-2 and assignment-3
router.get('/data', (req, res) => {
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
router.get('/myName', (req, res) => {
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
router.get('/trackName', (req, res) => {
    if (req.query.name) {
        res.cookie('username', req.query.name)
    }
    res.redirect('/myName');
});

// clear cookie username
router.get('/clear_cookie_username', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
 });

 module.exports = router;