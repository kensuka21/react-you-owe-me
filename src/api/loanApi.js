/**
 * Created by kmukai on 8/15/2017.
 */

var localforage = require('../localforage/localforage');

var loanApi = {
    saveLoan: function (loan, callback) {
        localforage.getItem('loans', function (err, value) {
            // if err is non-null, we got an error. otherwise, value is the value
            var loans = value || [];
            loans.push(loan);

            localforage.setItem('loans', loans, function (err) {
                // if err is non-null, we got an error
                if(callback){
                    callback(loan);
                }
            });
        });
    },
    getLoans: function (callback) {
        localforage.getItem('loans', function (err, value) {
            // if err is non-null, we got an error. otherwise, value is the value
            if(callback){
                callback(value || []);
            }
        });
    },
    deleteLoan: function (idx, callback) {
        localforage.getItem('loans', function (err, value) {
            // if err is non-null, we got an error. otherwise, value is the value
            var loans = value || [];
            loans.splice(idx, 1);

            localforage.setItem('loans', loans, function (err) {
                // if err is non-null, we got an error
                if(callback){
                    callback();
                }
            });
        });
    }
};

module.exports = loanApi;
