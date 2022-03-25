const express = require('express');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');

const app = express();
app.use(cors());

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/', (req, res) => {
	try {
		res.status(200).json({ message: 'Hi Chue' });
	} catch (err) {
		next(err);
	}
});

require('./startup/routes')(app);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
	console.log(`listening on ${process.env.NODE_ENV} mode on port ${PORT}`)
);

module.exports = server;
