/**
 * Created by kmukai on 8/16/2017.
 */
var Dispatcher = require('../dispatcher/dispatcherApp');
var LoanApi = require('../api/loanApi');
var ActionTypes = require('./actionTypes');

var LoanAction = {
    createLoan: function (loan) {
        LoanApi.saveLoan(loan, function (loan) {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_LOAN,
                loan: loan
            });
        });
    },
    deleteLoan: function (idx) {
        LoanApi.deleteLoan(idx, function () {
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_LOAN,
                idx: idx
            });
        });
    },
    loadLoans: function () {
        LoanApi.getLoans(function (loans) {
            Dispatcher.dispatch({
                actionType: ActionTypes.LOAD_LOANS,
                loans: loans
            });
        });
    }
};

module.exports = LoanAction;