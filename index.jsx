window.React = require('react');
var Header = require('./components/header.jsx');
var Nav = require('./components/nav.jsx');
var Token = require('./components/token.jsx');
var Map = require('./components/map.jsx');
var wookie = require('wookie');

var App = React.createClass({
    manageAuth: function(data) {
        (data.token) ?
            wookie.set('accessToken', data.token) :
            wookie.unset('accessToken');

        this.setState({auth: wookie.get('accessToken')});
    },
    getInitialState: function() {
        return {
            auth: wookie.get('accessToken') ? true : false
        };
    },
    render: function() {
        var mode = <Token accessToken={this.manageAuth} />;
        var klass = 'auth';

        if (this.state.auth) {
            mode = <Map accessToken={this.manageAuth} />
            klass= 'map';
        }

        return (
            <div>
                <header className={klass}>
                    <div className='limiter pad2y contain'>
                        <Header />
                        <Nav accessToken={this.manageAuth} />
                    </div>
                </header>
                {mode}
            </div>
        );
    }
});

React.renderComponent(
  <App />,
  document.getElementById('content')
);
