var CopyLink = require('./copylink.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div className='limiter'>
                    <div id='map' className='map'></div>
                    <CopyLink />
                </div>
            </div>
        )
    }
});
