const MongoStore = require("connect-mongo").default;

let dbURL = process.env.ATLAS_URL;
let secret = process.env.SECRET;

module.exports.sessionOptions = {
    store: MongoStore.create({
        mongoUrl: dbURL,
        secret: secret,
        touchAfter: 24 * 60 * 60
    }),
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};