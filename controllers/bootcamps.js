const Bootcamp = require('../models/Bootcamps');

// @desc    Get all bootcamps
// @route   GET /app/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,            
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

// @desc    Get single bootcamp
// @route   GET /app/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp) {
            res.status(400).json({success: false});
        }

        res.status(200).json({
            status: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({status: false});
    }
}

// @desc    Create new bootcamp
// @route   POST /app/v1/bootcamps/
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }    
}

// @desc    Update bootcamp
// @route   PUT /app/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp) {
            return res.status(400).json({ success: false });
        }
    
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({ success: false });
    }    
}

// @desc    Delete single bootcamp
// @route   DELETE /app/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp) {
            return res.status(400).json({ success: false });
        }
    
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        res.status(400).json({ success: false });
    }  
}