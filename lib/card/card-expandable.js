'use strict';

var React = require('react');
var OpenIcon = require('../svg-icons/hardware/keyboard-arrow-up');
var CloseIcon = require('../svg-icons/hardware/keyboard-arrow-down');
var IconButton = require('../icon-button');
var StylePropable = require('../mixins/style-propable');

var CardExpandable = React.createClass({
  displayName: 'CardExpandable',

  mixins: [StylePropable],

  getStyles: function getStyles() {
    return {
      root: {
        right: 4,
        top: 0,
        bottom: 0,
        margin: 'auto',
        position: 'absolute'
      }
    };
  },

  propTypes: {
    onExpanding: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool
  },

  _onExpanding: function _onExpanding() {
    if (this.props.expanded === true) this.props.onExpanding(false);else this.props.onExpanding(true);
  },

  render: function render() {
    var styles = this.getStyles();

    var expandable = undefined;
    if (this.props.expanded === true) expandable = React.createElement(OpenIcon, null);else expandable = React.createElement(CloseIcon, null);

    var mergedStyles = this.mergeAndPrefix(styles.root, this.props.style);

    var expandableBtn = React.createElement(
      IconButton,
      {
        style: mergedStyles,
        onClick: this._onExpanding },
      expandable
    );

    return expandableBtn;
  }
});

module.exports = CardExpandable;