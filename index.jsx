window.React = require('react');

var Header = require('./components/header.jsx');
var Nav = require('./components/nav.jsx');
var Token = require('./components/token.jsx');
var Map = require('./components/map.jsx');

var App = React.createClass({
    manageAuth: function(data) {
        (data.token) ?
            localStorage.setItem('accessToken', data.token) :
            localStorage.removeItem('accessToken');

        this.setState({auth: localStorage.getItem('accessToken')});
    },
    getInitialState: function() {
        return {
            auth: localStorage.getItem('accessToken') ? true : false
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

React.render(
  <App />,
  document.getElementById('content')
);
