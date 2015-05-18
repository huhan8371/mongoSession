module.exports.mongoSession = {
    secret:'mobd',
    resave:false,
    saveUninitialized:false,
    cookie: { maxAge: 60000 },
    options:{ db:'abc'}
}
