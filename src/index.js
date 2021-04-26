import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  // alternate state initialization
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    // try the geolocation
    window.navigator.geolocation.getCurrentPosition(
      // callback on success
      position => this.setState({lat: position?.coords?.latitude}),
      // callback on error
      err => this.setState({errorMessage: err?.message})
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
