/**
 * Created by kmukai on 8/15/2017.
 */

var React = require('react');

var LoanList = React.createClass({

    onDeleteLoanClick: function (idx, evt) {
        if(confirm('Are you sure you want to delete this loan?')){
            this.props.deleteLoan(idx);
        }
    },
    render: function () {
        var component = this;

        return (
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>Name</th>
                    <th className="text-right">Amount</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.loans.map(function (loan, idx) {
                    return (
                        <tr key={idx}>
                            <td>{loan.name}</td>
                            <td className="text-right">{loan.amount}</td>
                            <td className="text-center">
                                <button type="button"
                                        className="btn btn-success dropdown-toggle">
                                    <span className="glyphicon glyphicon-credit-card"/>
                                </button>

                                <span> </span>

                                <button type="button"
                                        onClick={this.onDeleteLoanClick.bind(this, idx)}
                                        className="btn btn-danger dropdown-toggle">
                                    <span className="glyphicon glyphicon-remove"/>
                                </button>
                            </td>
                        </tr>
                    )
                }, this)}
                </tbody>
            </table>
        );
    }
});

module.exports = LoanList;