import React from 'react'


class LocationMarker extends React.Component {
    render() {
        console.log("hello");
        return (
            <div style = {{width: 15, height : 15, borderRadius: '50%', backgroundColor: "rgb(45, 75, 247)", border:"3px solid white"}}></div>
        )
    }
}

export default LocationMarker;