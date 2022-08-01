const express = require('express');
const app = express();
const port = 3000;

app.set(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('', (req, res) => {
    res.render('home');
})

app.listen(port, (req, res) => {
    console.log('Running');
})