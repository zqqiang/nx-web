var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var BusinessSchema = new Schema({
    business_id: Number,
    name: String,
    branch_name: String,
    address: String,
    telephone: String,
    city: String,
    regions: [String],
    categories: [String],
    latitude: Number,
    longitude: Number,
    avg_rating: Number,
    rating_img_url: String,
    rating_s_img_url: String,
    product_grade: Number,
    decoration_grade: Number,
    service_grade: Number,
    product_score: Number,
    decoration_score: Number,
    service_score: Number,
    avg_price: Number,
    review_count: Number,
    review_list_url: String,
    distance: Number,
    business_url: String,
    photo_url: String,
    s_photo_url: String,
    photo_count: Number,
    photo_list_url: String,
    has_coupon: Number,
    coupon_id: Number,
    coupon_description: String,
    coupon_url: String,
    has_deal: Number,
    deal_count: Number,
    deals: [{
      id: String,
      description: String,
      url: String
    }],
    has_online_reservation: Number,
    online_reservation_url: String,
    loc: {
      type: {
        type: String
      },
      coordinates: []
    },
    days: Number
  });

  BusinessSchema.index({
    loc: '2dsphere'
  });

  // mongoose.model('725_1419566183', BusinessSchema);
  mongoose.model('Business', BusinessSchema);
};