const express = require('express');
const { notFound, errorHandler } = require('../middleware/error');
const trail = require('../routes/trail');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/v1/trail', trail);
	app.use(notFound, errorHandler);
};
