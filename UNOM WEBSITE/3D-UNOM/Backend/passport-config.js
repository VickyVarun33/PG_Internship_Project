// backend/passport-config.js
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const users = require('./users');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret',
};

const strategy = new JwtStrategy(options, (payload, done) => {
    const user = users.find(user => user.id === payload.id);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
});

module.exports = strategy;
