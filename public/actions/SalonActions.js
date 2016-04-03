var AppDispatcher = require('../dispatcher/AppDispatcher');

var SalonActions = {
    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    },
};

module.exports = SalonActions;
