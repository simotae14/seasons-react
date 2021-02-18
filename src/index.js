import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = {
      lat: null,
      errorMessage: ''
    }

    // try the geolocation
    window.navigator.geolocation.getCurrentPosition(
      // callback on success
      position => {
        this.setState({
          lat: position?.coords?.latitude
        });
      },
      // callback on error
      err => {
        this.setState({
          errorMessage: err?.message
        });
      }
    );
  }
  render() {
    return (
      <div>
        Latitude: {this.state.lat}<br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
