import React from 'react';
import Clock from './clock';

const App = React.createClass({
  displayName: 'Clock',
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
});

module.exports = App;