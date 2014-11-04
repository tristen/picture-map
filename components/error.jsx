module.exports = React.createClass({
    render: function() {
        return (
            <div className='pin-topleft error'>
                <span className='strong'>{this.props.errorMsg}</span>
            </div>
        )
    }
});
