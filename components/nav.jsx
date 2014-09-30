module.exports = React.createClass({
    clearAccessToken: function(e) {
        e.preventDefault();
        this.props.accessToken({token: ''});
    },
    render: function() {
        return (
            <nav>
                <span className='sprite icon sprocket contain round tooltip'>
                    <nav className='round small'>
                        <a href='#' onClick={this.clearAccessToken}>Clear&nbsp;access&nbsp;token?</a>
                    </nav>
                </span>
            </nav>
        )
    }
});
