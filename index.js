'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var output = undefined;
var SetIntervalMixin = {
  componentWillMount: function componentWillMount() {
    this.intervals = [];
  },

  componentWillUnmount: function componentWillUnmount() {
    this.intervals.map(clearInterval);
  },

  setInterval: (function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  })(function () {
    this.intervals.push(setInterval.apply(null, arguments));
  })
};

var renderTime = function renderTime() {
  var currentTime = new Date();
  var diem = 'AM';
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();

  if (h === 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    diem = 'PM';
  }

  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  output = {
    hours: h,
    minutes: m,
    seconds: s,
    diem: diem
  };
  return output;
};

var Clock = _react2['default'].createClass({
  displayName: 'Clock',
  mixins: [SetIntervalMixin],
  getInitialState: function getInitialState() {
    return { time: renderTime() };
  },
  componentDidMount: function componentDidMount() {
    this.setInterval(this.tick, 1000);
  },
  tick: function tick() {
    renderTime();
    this.setState({ hours: output.hours, minutes: output.minutes, seconds: output.seconds, diem: output.diem });
  },
  render: function render() {
    return _react2['default'].createElement(
      'p',
      { className: 'clock' },
      this.state.hours,
      ':',
      this.state.minutes,
      ':',
      this.state.seconds,
      _react2['default'].createElement(
        'span',
        { className: 'diem' },
        this.state.diem
      )
    );
  }
});

module.exports = Clock;