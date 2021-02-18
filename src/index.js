import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
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
