var AppDispatcher = require('../dispatcher/AppDispatcher');
var SalonConstants = require('../constants/SalonConstants');

var SalonActions = {
    changeLocale: function(locale) {
        AppDispatcher.dispatch({
            actionType: SalonConstants.SALON_CHANGE_LOCALE,
            locale: locale
        });
    },
    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: SalonConstants.SALON_UPDATE_TEXT,
            id: id,
            text: text
        });
    },
};

module.exports = SalonActions;
