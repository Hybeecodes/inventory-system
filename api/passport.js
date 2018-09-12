const passport = require('passport');
const User = require('./models/Models').User;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
       
      passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });

    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';
    passport.use(new JwtStrategy(opts,function(jwt_payload, done) {
      // console.log(jwt_payload.user);
      User.findOne({id: jwt_payload.user.id}, function(err,user) {
        if(err){
        //   console.log('error')
          return done(err,false);
        }
        if(user){
          return done(null, user);
        }else{
        //   console.log('no user')
          return done(null,false);
        }
      })
    }));

module.exports.passport = passport;
module.exports.opts = opts;

