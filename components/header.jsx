var Menu = require('./nav.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            mode: (this.props.auth) ? 'map' : 'auth'
        };
    },
    render: function() {
        var nav = (this.props.auth) ? <Menu /> : ''; 
        return (
            <header className={this.state.mode}>
                <div className='limiter pad2y contain'>
                    <a className='sprite logo' href='./'></a>
                    <h1 className='label'>Picture map</h1>
                    {nav}
                </div>
            </header>
        );
    }
});
