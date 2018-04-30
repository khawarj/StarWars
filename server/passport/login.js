const LocalStrategy   = require('passport-local').Strategy;
const api = require("../service/swapApi");

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        api.findUser(user).then(function(user){
            done(void 0, user);
        },function(err, user){
            done(err, void 0);
        });
    });


    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            // check if a user with username exists or not
            console.log(`In passport for ${username} with ${passport}`);
            api.findByUserName(username).then(function(users){
                if(users){
                    var user;
                    for(var i =0 ; i<users.length; i++){
                        if(users[i].name === username && users[i]['birth_year'] === password){
                            user = users[i];
                            break;
                        }
                    }
                    if(user) {
                        return done(null, user);
                    }else{
                        throw new Error("Invalid Password")
                    }
                }else{
                    throw new Error(`User with username ${username} not found.`);
                }
            }).catch(function(err){
                return done(err, void 0);
            });

        }
    ));

};
