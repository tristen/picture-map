var ZeroClipboard = require('zeroclipboard');

module.exports = React.createClass({
    onFocus: function(e) {
        console.log(e.target);
    },
    componentDidMount: function() {
        var copyElement = document.getElementById('copy');
        copyElement.setAttribute('data-clipboard-text', document.getElementById('copy-contents').value);

        var copy = new ZeroClipboard(copyElement);
        copy.on('ready', function(e) {
            copy.on('aftercopy', function(e) {
                e.target.textContent = 'Copied to clipboard';
                console.log('Copied text to clipboard: ' + e.data['text/plain'] );
                setTimeout(function() {
                    e.target.textContent = 'Copy link';
                }, 1000);
            });
        });
    },
    copy: function(e) {
        e.preventDefault();
    },
    render: function() {
        return (
            <div className='col8 margin2'>
                <form className='col12 clearfix form-pill contain' onSubmit={this.handleSubmit}>
                    <input id='copy-contents' type='text' className='col8' value='hey there' onFocus={this.onFocus} />
                    <button id='copy' className='col4' onClick={this.copy}>Copy link</button>
                </form>
            </div>
        )
    }
});
