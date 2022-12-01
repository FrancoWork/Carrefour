const express   = require('express');
const path      = require('path');
const app       = express();
// const { append } = require("express/lib/response");

const port      = 5500;

app.listen( port, () => {

    console.log( `Funciona el servidor` );
});

app.use(express.static("/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('views/home');
});