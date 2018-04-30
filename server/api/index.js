const api = require("../service/swapApi");

module.exports = function(router){


    router.use('/planets/:query', isAuthenticated);
    router.use('/planets/:query', searchCount);

    router.get('/planets/:query', function(req, res){
        console.log("querying")
        var query = req.params.query;
        return api.getPlanets(query).then(function(result){
            res.status(200).send(result);
        });
    });
};


const searchCount = function (req, res, next) {
    var endTime = req.session.endTime;
    var sent
    if(endTime){
        let reset = (Date.now() - endTime);
        if(reset >= 0){
            req.session.searches = 0;
        }else{
            let userInnfo = req.session.passport.user;
            if(userInnfo.name != "Luke SkyWalker" && req.session.searches > 15){
                throw new Error("Only 15 searches per minute allowed!!!");
            }
        }

    }else{
        req.session.searches = 0;
        var d = new Date();
        d.setMinutes(d.getMinutes() + 1);
        req.session.endTime = d;
    }
    req.session.searches++;
    return next();
};

const isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};