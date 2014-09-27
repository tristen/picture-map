var wookie = require('wookie');

module.exports = React.createClass({
    clearAccessToken: function(e) {
        e.preventDefault();
        wookie.unset('accessToken');
        console.log(wookie.get('accessToken'));
    },
    render: function() {
        return (
            <nav>
                <span className='sprite icon sprocket contain round tooltip'>
                    <nav className='round small'>
                        <a href='#' onClick={this.clearAccessToken}>Clear&nbsp;accessToken?</a>
                    </nav>
                </span>
            </nav>
        )
    }
});
