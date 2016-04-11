var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var SalonConstants = require('../constants/SalonConstants');

var CHANGE_EVENT = 'change';
var _salons = {
    locale: 'cn'
};

function update(udpates) {
    _salons = assign({}, _salons, udpates);
};

var SalonStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getAll: function() {
        return _salons;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
});

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case SalonConstants.SALON_UPDATE_TEXT:
            break;
        case SalonConstants.SALON_CHANGE_LOCALE:
            update({ locale: action.locale });
            SalonStore.emitChange();
            break;
        default:
            console.log('Do not support action type [%s]', action.actionType);
    }
});

module.exports = SalonStore;
