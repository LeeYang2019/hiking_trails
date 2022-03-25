// @desc    POST an activity
// @route   POST /api/v1/activities
// @access  Private
exports.addTrail = async (req, res) => {
	console.log(req);
};

exports.getTrail = (req, res) => {
	console.log('hello');

	res.status(200).json({ message: `entered trails path` });
};
