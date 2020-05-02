var express = require('express');
var mongoose = require('mongoose');


var app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/hospitalDB', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});




app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
})


app.listen(3000, () => {
    console.log('Express Server en puerto 3000: \x1b[32m%s\x1b[0m', 'online');

});