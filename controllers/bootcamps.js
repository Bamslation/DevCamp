// @desc    Get all bootcamps
// @route   GET /app/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}

// @desc    Get single bootcamp
// @route   GET /app/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   POST /app/v1/bootcamps/
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'});
}

// @desc    Update bootcamp
// @route   PUT /app/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

// @desc    Delete single bootcamp
// @route   DELETE /app/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}