/**
 * Created by kmukai on 8/16/2017.
 */

var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Dispatcher = require('../dispatcher/dispatcherApp');
var LoanApi = require('../api/loanApi');
var ActionTypes = require('../actions/actionTypes');
var _ = require('lodash');

var _store = {
    totalAmountToReceive: 0,
    loans: []
};

function loadLoans(loans) {
    _store.loans = loans;
}

var CHANGE_EVENT = 'change';

var LoanStore = merge(EventEmitter.prototype, {

    getLoans: function() {
        return _store.loans;
    },
    getTotalAmountToReceive: function () {
        return _store.totalAmountToReceive;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function (action) {
    switch(action.actionType) {
        case ActionTypes.CREATE_LOAN:
            _store.totalAmountToReceive += parseFloat(action.loan.amount);
            _store.loans.push(action.loan);
            break;
        case ActionTypes.DELETE_LOAN:
            var loanAmount = _store.loans[action.idx].amount;
            _store.loans.splice(action.idx, 1);

            _store.totalAmountToReceive -= parseFloat(loanAmount);

            break;
        case ActionTypes.LOAD_LOANS:
            loadLoans(action.loans);

            _.forEach(action.loans, function (loan) {
                _store.totalAmountToReceive += parseFloat(loan.amount);
            });

            break;
    }

    LoanStore.emitChange();
});

module.exports = LoanStore;
