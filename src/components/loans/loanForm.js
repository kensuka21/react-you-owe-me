/**
 * Created by kmukai on 8/15/2017.
 */

var React = require('react');

var LoanForm = React.createClass({

    onSubmit: function(evt){
        evt.preventDefault();
        this.refs.name.focus();
        this.props.onSubmit(evt);
    },
    render: function () {
        return (
            <form className="form-inline text-center" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="sr-only" >Name</label>
                    <input type="text" className="form-control" name="name"
                           value={this.props.loan.name} placeholder="Name"
                           ref="name"
                           autoFocus="autoFocus"
                           onChange={this.props.onInputChange}/>
                </div>
                <span> </span>
                <div className="form-group">
                    <label className="sr-only" >Amount</label>
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" step="any" className="form-control" name="amount"
                               onChange={this.props.onInputChange}
                               value={this.props.loan.amount} placeholder="Amount"/>
                    </div>
                </div>
                <span> </span>
                <button type="submit" className="btn btn-primary text-center">Submit</button>
            </form>
        );
    }
});

module.exports = LoanForm;
