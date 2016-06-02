import React, { Component, PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import merge from 'lodash.merge';
import normalize from 'normalize.css';
import config from './styles/config';


const getStyles = ({ palette, fontFamily }) => ({
  'html, body, #root': {
    height: '100%'
  },
  'html, body': {
    fontSize: 14,
    lineHeight: 1.5,
    color: palette.foreground,
    fontFamily,
  },
  p: {
    marginTop: 0
  },
  '.btn+.btn': {
    marginLeft: 10
  }
});

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  static childContextTypes = {
    theme: PropTypes.object
  };

  getChildContext() {
    return {
      theme: this.props.theme
    };
  }

  render() {
    const gs = getStyles({ ...config, ...this.props.theme });
    return (
      <StyleRoot>
        <Style rules={merge({}, normalize, gs)} />
        {this.props.children}
      </StyleRoot>
    );
  }
}
