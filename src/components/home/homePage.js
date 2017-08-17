/**
 * Created by kmukai on 8/15/2017.
 */
var React = require('react');
var Link = require('react-router-dom').Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>You Owe Me!</h1>
                <p>This is a simple web application to register the people who owes you, so you will always remember who and how much does somebody owe you.</p>
                <p><Link className="btn btn-primary btn-lg" to="/loans" role="button">Quick Start</Link></p>
            </div>
        )
    }
});

module.exports = Home;
