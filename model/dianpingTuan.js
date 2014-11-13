var mongoose = require('../db/db');

var DianpingTuan = mongoose.model('DianpingTuan', {
	deal_id: String,
	title: String,
	description: String,
	city: String,
	list_price: Number,
	current_price: Number,
	regions: [String],
	categories: [String],
	purchase_count: Number,
	purchase_deadline: Date,
	publish_date: Date,
	details: String,
	image_url: String,
	s_image_url: String,
	more_image_urls: [String],
	more_s_image_urls: [String],
	is_popular: Number,
	restrictions: {
		is_reservation_required: Number,
		is_refundable: Number,
		special_tips: String
	},
	notice: String,
	deal_url: String,
	deal_h5_url: String,
	commission_ratio: Number,
	businesses: [{
		name: String,
		id: Number,
		city: String,
		address: String,
		latitude: Number,
		longitude: Number,
		url: String,
		h5_url: String
	}]
});

module.exports = DianpingTuan;