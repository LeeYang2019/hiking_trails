// @desc    POST a trail
// @route   POST /api/v1/trails
// @access  Private
exports.addTrail = async (req, res) => {
	console.log(req);
};

// @desc	GET all trails
// @route	GET /api/v1/trails
// @access	Public
exports.getTrails = (req, res) => {
	console.log('hello');

	res.status(200).json({ message: `entered trails path` });
};
