import React from 'react'
import MapDisplay from './Map'

class App extends React.Component {
  state = {
    userLocation : {}
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          userLocation : {
            lat : position.coords.latitude,
            lng : position.coords.longitude,
          }
        })
      })
    }
  }

  componentDidMount = () => {
    console.log("hello");
    this.getUserLocation();
  }

  addMarker = () => {
    console.log("add marker");
  }

  render() {

    return (
      <div class = "wrapper">
        <div className = "App">
          <MapDisplay userLocation={this.state.userLocation} />
        </div>
        <br />
        <div>
            <button onClick= {() => this.addMarker()}>
            place Marker</button>
        </div>
    </div>
    );
  }

}

export default App;
