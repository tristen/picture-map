window.React = require('react');
var Header = require('./components/header.jsx');
var Token = require('./components/token.jsx');
var Map = require('./components/map.jsx');
var wookie = require('wookie');

var App = React.createClass({
    getInitialState: function() {
        return {
            auth: wookie.get('accessToken') ? true : false
        };
    },
    render: function() {
        var mode = <Token />;
        if (this.state.auth) mode = <Map />
        return (
            <div>
                <Header auth={this.state.auth} />
                <div className='page'>
                    {mode}
                </div>
            </div>
        );
    }
});

React.renderComponent(
  <App />,
  document.getElementById('content')
);
