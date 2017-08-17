/**
 * Created by kmukai on 8/15/2017.
 */

var React = require('react');
var Link = require('react-router-dom').Link;
var LoanStore = require('../../store/loanStore');

var Header = React.createClass({

    getInitialState: function () {
        return {
            totalAmountToReceive: LoanStore.getTotalAmountToReceive()
        }
    },
    componentDidMount: function () {
        LoanStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        LoanStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            totalAmountToReceive: LoanStore.getTotalAmountToReceive()
        });
    },
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">You Owe Me !</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to=".">Home</Link></li>
                            <li><Link to="/loans">Loans</Link></li>
                        </ul>

                        <p className="navbar-text navbar-right">Total to receive: <Link to="/loans" className="navbar-link">${this.state.totalAmountToReceive}</Link></p>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = Header;
