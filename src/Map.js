
import React from "react";
import { GoogleMap, LoadScript} from "@react-google-maps/api";
import LocationMarker from './locationMarker'

class MapDisplay extends React.Component {
    state = {
        location : {
            lat : -27.4975,
            lng : 153.0137,
        }, 
        zoom : 14
    }
 
    render() {
        console.log("hello");
        return (
            
            <div style = {{width : '800px', height : '400px', margin : 'auto', marginTop : 40}}>
                <LoadScript
                    googleMapsApiKey="AIzaSyAoNkBD56EorR_Kd7_bITeBs7nmTvg3p1U"
                >
                    <GoogleMap
                        zoom = {this.state.zoom}
                        center = {this.state.location}
                        onCenterChanged = {({center, zoom}) => {this.setState({center: center, zoom : zoom})}}
                        mapContainerStyle={{ height: '400px', width: '800px' }}
                    >
                        <LocationMarker lat = {this.props.userLocation.lat} lng = {this.props.userLocation.lng}/>
                 
                    </GoogleMap>
                </LoadScript>
            </div>
        )      
    }
};

export default MapDisplay;
