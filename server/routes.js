const path = require('path');




module.exports = function(app,  passport) {
    /* GET login page. */
    app.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        if(req.isAuthenticated()){
            res.redirect('/search');
        }else {
            res.sendFile(path.join(__dirname, '../public', 'Login.html'));
        }
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/search',
        failureRedirect: '/'
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/search', isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname, '../public', 'Search.html'));
    });

};


const isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};






//
// var express = require("express");
// var router = express.Router();
// var path = require('path');
//
//
//
// module.exports = function(passport){
//
//     /* GET login page. */
//     router.get('/', function(req, res) {
//         // Display the Login page with any flash message, if any
//         res.sendFile(path.join(__dirname, '../public', 'Login.html'));
//     });
//
//     /* Handle Login POST */
//     router.post('/login', passport.authenticate('login', {
//         successRedirect: '/home',
//         failureRedirect: '/',
//         failureFlash : true
//     }));
//
//     router.get('/logout', function(req, res) {
//         req.logout();
//         res.redirect('/');
//     });
//
//     router.get('/search', isAuthenticated, function(req, res){
//         res.sendFile(path.join(__dirname, '../public', 'Search.html'));
//     });
//
//     return router;
// };
