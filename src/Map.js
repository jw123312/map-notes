
import React from "react";
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

class LocationMarker extends React.Component {
    render() {
        return (
            <div style = {{width: 150, height : 150, borderRadius: '50%', backgroundColor: "rgb(45, 75, 247)", border:"3px solid white"}}></div>
        )
    }
}
let count = 0;

class MapDisplay extends React.Component {
    
    constructor(props) {
        super(props);

        const center = {lat : -27.4975, lng : 153.0137};

        this.state.markers.push({place_id : count, location : center, text : "University of Queensland"});
        count += 1;
    }

    state = {
        center : {
            lat : -27.4975,
            lng : 153.0137,
        }, 
        zoom : 14,
        markers : []
    };

    buttonAddMarker = () => {
        console.log("add new")
        const text = this.state.textvalue;
        this.addMarkers({location : this.props.userLocation, place_id : count, text : text});
    };

    addMarkers = (details) => {
        console.log("before markers ", this.state.markers);
        console.log("details ", details);
        const newMarkers = this.state.markers.slice();
        newMarkers.push({place_id : count, location : details.location, text : details.text});
        this.setState({markers : newMarkers});
        console.log("markers ", this.state.markers);

        count +=1 ;
    };

    handleChange = (event) => {
        this.setState({textvalue: event.target.value});
    }

 
    render() {
        console.log(this.props.userLocation);
        return (
            
            <div style = {{width : '800px', height : '400px', margin : 'auto', marginTop : 40}}>
                <LoadScript
                    googleMapsApiKey={""}
                >
                    <GoogleMap
                        zoom = {this.state.zoom}
                        center = {this.props.userLocation}
                        onChanged = {({center, zoom}) => {this.setState({center: center, zoom : zoom})}}
                        mapContainerStyle={{ height: '400px', width: '800px' }}
                    >
                        <LocationMarker lat = {this.props.userLocation.lat} lng = {this.props.userLocation.lng}/>
                        {this.state.markers != null &&
                        this.state.markers.map(coords => (
                        <Marker
                            key={coords.place_id}
                            position={coords.location}
                            placeId={coords.place_id}
                            label = {coords.text}
                        />
                        ))}
                    </GoogleMap>
                </LoadScript>
                <br />
                <div>
                    <input
                        type="text"
                        placeholder="note to add"
                        class = "textbox"
                        value={this.state.textvalue}
                        onChange={this.handleChange}
                    />
                </div>
                
                <br />

                <div>
                    <button onClick= {() => this.buttonAddMarker()}>
                    place Marker</button>
                </div>
            </div>
        );    
    }
};

export default MapDisplay;
