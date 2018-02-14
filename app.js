var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);


//API START
var mongoose = require('mongoose');

//Local db
//mongoose.connect('mongodb://localhost/residentdbnew');

//Mongo lab db
mongoose.connect('mongodb://ramesh:ramesh@ds139844.mlab.com:39844/residentdblatest')

var Residents = require('./models/residents.js');

//Get Residents list
app.get('/residents', function(req, res) {
	var query = {}
	Residents.find(query, 'residentName residentId', function(err, residents) {
		if(err) {
			throw err;
		} else {
			res.json(residents);
		}
	})
})

//Get Diseases list of a resident
app.get('/residents/:residentId', function(req, res) {
	var query = {residentId: req.params.residentId};

	Residents.find(query, 'residentId residentName diseases', function(err, diseases) {
		if(err) {
			throw err;
		} else {
			res.json(diseases);
		}
	})
})

//API END

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
