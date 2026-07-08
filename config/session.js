const MongoStore = require("connect-mongo").default;

let dbURL = process.env.ATLAS_URL || "mongodb://localhost:27017/the-cozy-lookout";

module.exports.sessionOptions = {
    store: MongoStore.create({
        mongoUrl: dbURL,
        secret: "mysupersecretcode",
        touchAfter: 24 * 60 * 60
    }),
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};