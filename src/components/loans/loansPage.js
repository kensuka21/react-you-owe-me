/**
 * Created by kmukai on 8/15/2017.
 */

var React = require('react');
var LoanList = require('./loanList');
var LoanForm = require('./loanForm');
var LoanApi = require('../../api/loanApi');
var LoanStore = require('../../store/loanStore');
var LoanAction = require('../../actions/loanAction');


var LoanPage = React.createClass({
    getInitialState: function () {
        return {
            loan: {
                name: '',
                amount: ''
            },
            loans: LoanStore.getLoans()
        }
    },
    componentWillMount: function () {
        LoanStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        LoanStore.removeChangeListener(this._onChange);
    },
    onInputChange: function (evt) {
        var field = evt.target.name;
        var value = evt.target.value;

        this.setState(function (prevState) {
            var prevLoan = prevState.loan;
            prevLoan[field] = value;

            return {
                loan: prevLoan
            }
        });
    },
    onSubmit: function () {
        LoanAction.createLoan(this.state.loan);
        this.setState({
            loan: {
                name: '',
                amount: ''
            }
        });
    },
    _onChange: function () {
        this.setState({
            loans: LoanStore.getLoans()
        })
    },
    deleteLoan: function (idx) {
        LoanAction.deleteLoan(idx);
    },
    render: function () {
        return (
            <div className="container">
                <div className=" ">
                    <h1>Loan's Page
                        <small> Register your loans</small>
                    </h1>
                    <hr/>
                </div>
                <br/>
                <br/>
                <LoanForm loan={this.state.loan} onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <br/>
                <LoanList loans={this.state.loans} deleteLoan={this.deleteLoan}/>
            </div>
        )
    }
});

module.exports = LoanPage;
