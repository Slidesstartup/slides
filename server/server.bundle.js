/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var express = __webpack_require__(1);
	var app = express();
	var pg = __webpack_require__(2);
	var path = __webpack_require__(3);

	// app.set('port', (process.env.PORT || 5000));

	app.use(express.static(path.join(__dirname, '..', '/public')));

	// app.get('/db', function (request, response) {
	//  pg.connect('postgres://bwsdqaqzzvafvg:urXX8nOk8dmVYzTkWDEMNxsNN4@ec2-54-227-250-148.compute-1.amazonaws.com:5432/d3lmjd04uukfu8?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory', function(err, client, done) {
	//    console.log(err);
	//    console.log(client);
	//    client.query('SELECT * FROM test_table', function(err, result) {
	//      done();
	//      if (err)
	//      { console.error(err); response.send("Error " + err); }
	//      else
	//     //  { response.render('pages/db', {results: result.rows} ); }
	//    });
	//  });
	// })
	app.get('/', function (request, response) {
	  // response.sendFile('../p')
	  // response.render('pages/index');
	});

	app.listen(5000);
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("pg");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);