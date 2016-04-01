var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _salons = {};

var SalonStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _salons;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
});

module.exports = SalonStore;
