var Err = require('./error.jsx');
var wookie = require('wookie');
var request = require('request');
var staticUrl = 'http://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/-73.99,40.70,13/500x300.png?access_token=';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            errorMsg: '',
            text: ''
        };
    },
    onChange: function(e) {
        this.setState({
            text: e.target.value,
            errorMsg: ''
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var component = this;
        var submit = e.target.querySelector('button');
        var previous = submit.textContent;

        submit.textContent = 'Loading';
        this._validToken(this.state.text, function(err, res) {
            if (err) {
                submit.textContent = previous;
                component.setState({errorMsg: err});
            } else {
                component.props.accessToken({token: component.state.text});
            }
        });
    },
    _validToken: function(token, cb) {
        request(staticUrl + token, {
            withCredentials: false
        }, function(err, res) {
            if (err || res.statusCode !== 200) return cb('Invalid token');
            return cb(null);
        });
    },
    render: function() {
        return (
            <div>
                <div className='limiter'>
                    <div className='col8 margin2'>
                        <form className='col12 clearfix form-pill contain' onSubmit={this.handleSubmit}>
                            <Err errorMsg={this.state.errorMsg} />
                            <input type='text' className='col8' onChange={this.onChange} placeholder='eg. pk.eyJ1IjoidHJpc3RlbiIsImEiOiJGcXlFWnBzIn0.aihSlIGaPqg3WUcK3pWfuw' />
                            <button className='col4'>Enter access token</button>
                        </form>
                        <div className='col12 center small quiet'>
                            Don't know your <a href='https://www.mapbox.com/help/define-access-token/' target='_blank'>Access token?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
