var ZeroClipboard = require('zeroclipboard');
var wookie = require('wookie');

module.exports = React.createClass({
    componentDidMount: function() {
        var copyElement = document.getElementById('copy');
        copyElement.setAttribute('data-clipboard-text', document.getElementById('copy-contents').value);

        var copy = new ZeroClipboard(copyElement);
        copy.on('ready', function(e) {
            copy.on('aftercopy', function(e) {
                e.target.textContent = 'Copied to clipboard';
                setTimeout(function() {
                    e.target.textContent = 'Copy link';
                }, 1000);
            });
        });
    },
    render: function() {
        var url = 'http://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/';
        url = this.props.center.join(',') +
        '/500x300.png?access_token=' +
        wookie.get('accessToken');

        console.log('here');
        return (
            <div className='col8 margin2'>
                <form className='col12 clearfix form-pill contain' onSubmit={this.handleSubmit}>
                    <input id='copy-contents' type='text' className='col8' value={url} />
                    <button id='copy' className='col4'>Copy link</button>
                </form>
            </div>
        )
    }
});
