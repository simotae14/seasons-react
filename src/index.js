import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // try the geolocation
  window.navigator.geolocation.getCurrentPosition(
    // callback on success
    (position) => console.log(position),
    // callback on error
    (err) => console.log(err)
  );
  return (<div>Hi there</div>)
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
