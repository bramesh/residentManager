var mongoose = require('mongoose');

var ResidentSchema = mongoose.Schema({
	residentName: String,
	residentId: Number
})

var Residents = mongoose.model('Residents', ResidentSchema);

module.exports = Residents;