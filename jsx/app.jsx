var React = require('react');
var Clock = require('./clock');

var App = React.createClass({
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
});

module.exports = App;