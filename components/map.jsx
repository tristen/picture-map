require('mapbox.js');

var Output = require('./output.jsx');
var Controls = require('./controls.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            zoom: 3,
            center: [30, -20],
            mapid: 'tristen.map-4s93c8qx'
        };
    },
    componentDidMount: function() {
        L.mapbox.accessToken = localStorage.getItem('accessToken');
        var component = this;
        var map = L.mapbox.map('map', this.state.mapid)
            .setView(this.state.center, this.state.zoom);

        // Disable some default map interactions.
        map.scrollWheelZoom.disable();
        if (map.tap) map.tap.disable();

        map.on('moveend', function(e) {
            var c = map.getCenter();
            component.setState({
                zoom: map.getZoom(),
                center: [c.lat, c.lng]
            });
        });
    },
    render: function() {
        return (
            <div>
                <div className='col12 clearfix'>
                    <Controls />
                    <div id='map' className='map col8'></div>
                </div>
                <div className='limiter'>
                    <Output
                        mapid={this.state.mapid}
                        zoom={this.state.zoom}
                        center={this.state.center}
                    />
                </div>
            </div>
        )
    }
});
