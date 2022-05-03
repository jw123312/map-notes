import React from 'react'
import MapDisplay from './Map'
import * as ReactDOM from 'react-dom/client';



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
      </div>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
