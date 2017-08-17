/**
 * Created by kmukai on 8/15/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var RouterDOM = require('react-router-dom');
var HashRouter = RouterDOM.HashRouter;
var Route = RouterDOM.Route;
var Switch = RouterDOM.Switch;
var App = require('./components/app');
var Home = require('./components/home/homePage');
var LoanPage = require('./components/loans/loansPage');
var LoanAction = require('./actions/loanAction');

LoanAction.loadLoans();

ReactDOM.render(
    <HashRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/loans" component={LoanPage}/>
        </App>
    </HashRouter>,
    document.getElementById('app')
);