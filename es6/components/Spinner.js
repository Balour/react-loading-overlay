import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
var Spinner = function Spinner(_ref) {
  var getStyles = _ref.getStyles,
    cx = _ref.cx;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('spinner', css(getStyles('spinner')))
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })));
};
Spinner.propTypes = {
  getStyles: PropTypes.func.isRequired,
  cx: PropTypes.func.isRequired
};
export default Spinner;