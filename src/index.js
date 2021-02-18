import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    }
  }
  render() {
    // try the geolocation
    window.navigator.geolocation.getCurrentPosition(
      // callback on success
      (position) => console.log(position),
      // callback on error
      (err) => console.log(err)
    );
    return (
      <div>Latitude: </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
