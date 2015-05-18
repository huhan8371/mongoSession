var session    = require('express-session');
var MongoStore = require('connect-mongo')(session);


module.exports.mongoSession = function(app, conf)
{
	return function()
	{
		/*
		app.use(session({
		    secret: 'mobd',
		    resave:false,
		    saveUninitialized:false,
		    cookie: { maxAge: 60000 },
		    store: new MongoStore({
		    	db:'abc'})
		}));
		*/
		app.use(session({
		    secret: conf.secret,
		    resave: conf.resave,
		    saveUninitialized: conf.saveUninitialized,
		    cookie: conf.cookie,
		    store: new MongoStore(conf.options)
		}));

	};
};