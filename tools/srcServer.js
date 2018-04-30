import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */
const port = 3600;

const app = express();
const router = express.Router();
const compiler = webpack(config);


const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session = require('express-session');


app.use('/public',express.static(path.resolve(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

console.log(config.output);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(session({secret: 'mySecretKey'}));
app.use(cookieParser()); // read cookies (needed for auth)

require('../server/passport/login')(passport);

app.use(passport.initialize());
app.use(passport.session());



require('../server/routes.js')(app, passport);

require("../server/api/index")(router);

app.use('/api', router);

app.use(function(req, res, next) {
    console.log(req.originalUrl);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Ooops...");
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});





// var api = require("../server/api/swapApi");
//
// passport.serializeUser(function(user, done) {
//     done(null, user._id);
// });
//
// passport.deserializeUser(function(id, done) {
//     api.findById(id).then(function(user){
//         done(void 0, user);
//     },function(err, user){
//         done(err, user);
//     });
// });
//
//
// const compiler = webpack(config);
// var routes = require("../server/routes");
//
//
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
//
// app.use('/', routes(passport));
//
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// app.use(function(err, req, res, next) {
//     console.log(err);
//     res.status(err.status || 500).send('error');
// });
//
//
// app.listen(port, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         open(`http://localhost:${port}`);
//     }
// });