var app = require('express')(),
    port = process.env.PORT || 8080
    morgan = require('morgan');
    bodyParser = require('body-parser');

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));

//set router
app.use(require('./app/routes'));

// start server
app.listen(port, function( ) {
    console.log('app listenting on ' + port);
});