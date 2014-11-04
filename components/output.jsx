var ZeroClipboard = require('zeroclipboard');
var wookie = require('wookie');
var geojsonToImage = require('geojson-to-image');

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
    handleClick: function(e) {
        e.preventDefault();
    },
    render: function() {
        var url = geojsonToImage({
            mapID: this.props.mapid,
            accessToken: wookie.get('accessToken')
        }, [], {
            coordinates: this.props.center,
            zoom: this.props.zoom
        });

        return (
            <div className='col12 clearfix contain'>
                <div className='col8 margin2 margin2r contain'>
                    <form className='col12 clearfix form-pill contain' onSubmit={this.handleSubmit}>
                        <input id='copy-contents' type='text' className='col8' value={url} readOnly />
                        <button id='copy' className='col4' onClick={this.handleClick}>Copy link</button>
                    </form>
                </div>
                <div className='pin-right'>
                    <a href={url} target='_blank' className='pin-right sprite icon share'></a>
                </div>
            </div>
        )
    }
});
