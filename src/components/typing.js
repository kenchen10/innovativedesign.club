import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

export default class Typing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typingEnabled: false,
      typingAnimator: null,
      typingIndex: 0,
      typingText: '',
      typingTextForward: true,
      typingCursorBlink: false,
      typingCursorHide: true
    };

    this._createTypingAnimator = this._createTypingAnimator.bind(this);
  }

  componentDidMount() {
    if (this.props.strings.length > 0) {
      this._createTypingAnimator();
    }
  }

  componentWillUnmount() {
    if (this.state.typingAnimator) {
      clearTimeout(this.state.typingAnimator);
    }
  }

  _createTypingAnimator() {
    this.setState({
      typingEnabled: true,
      typingCursorHide: false
    });

    const stringsToType = this.props.strings;

    const typingString = () => {
      const lastString = this.state.typingIndex === stringsToType.length - 1;
      const currentStringTyped = this.state.typingText === stringsToType[this.state.typingIndex];
      const currentStringEnd = this.props.backspace ? (
        !this.state.typingTextForward && !this.state.typingText
      ) : (
        currentStringTyped
      );

      if (lastString && currentStringTyped && !this.props.loop) {
        clearTimeout(this.state.typingAnimator);

        const onDoneState = {
          typingAnimator: null
        };

        if (this.props.hideCursorOnDone) {
          onDoneState.typingCursorBlink = false;
          onDoneState.typingCursorHide = true;
        }

        this.setState(onDoneState);

        if (this.props.typingDone) {
          this.props.typingDone();
        }
      } else if (lastString && currentStringEnd && this.props.loop) {
        this.setState({
          typingAnimator: setTimeout(typingString, this.props.interval.string),
          typingText: '',
          typingTextForward: true,
          typingIndex: 0,
          typingCursorBlink: true
        });
      } else if (currentStringEnd && this.props.backspace) {
        this.setState({
          typingAnimator: setTimeout(typingString, this.props.interval.string),
          typingText: '',
          typingTextForward: true,
          typingIndex: this.state.typingIndex + 1,
          typingCursorBlink: true
        });
      } else if (currentStringEnd) {
        this.setState({
          typingAnimator: setTimeout(() => {
            this.setState({
              typingAnimator: setTimeout(typingString, this.props.interval.string),
              typingText: '',
              typingTextForward: true,
              typingIndex: this.state.typingIndex + 1
            });
          }, this.props.interval.string),
          typingCursorBlink: true
        });
      } else if (this.state.typingTextForward && currentStringTyped) {
        this.setState({
          typingAnimator: setTimeout(typingString, this.props.interval.string),
          typingTextForward: false,
          typingCursorBlink: true
        })
      } else if (this.state.typingTextForward) {
        const strLength = this.state.typingText.length + 1;

        this.setState({
          typingAnimator: setTimeout(typingString, this.props.interval.letter),
          typingText: stringsToType[this.state.typingIndex].substring(0, strLength),
          typingCursorBlink: false
        });
      } else {
        const strLength = this.state.typingText.length - 1;

        this.setState({
          typingAnimator: setTimeout(typingString, this.props.interval.letter),
          typingText: stringsToType[this.state.typingIndex].substring(0, strLength),
          typingCursorBlink: false
        });
      }
    };

    setTimeout(typingString, this.props.startDelay);
  }

  render() {
    const textElement = !this.state.typingEnabled ? (
      <span className="typing__text">
        { this.props.defaultString }
      </span>
    ) : (
      <span className="typing__text">
        { this.state.typingText }
      </span>
    );

    const cursorElement = this.props.cursor ? (
      <span
        className={ classnames('typing__cursor', {
          blink: this.state.typingCursorBlink
        }) }
        style={ {
          display: this.state.typingCursorHide ? 'none' : 'inline-block'
        } }
      >
        { this.props.cursor }
      </span>
    ) : null;

    return (
      <div className="typing__container">
        { textElement }
        { cursorElement }
      </div>
    );
  }
}

Typing.propTypes = {
  defaultString: PropTypes.string,
  strings: PropTypes.array,
  interval: PropTypes.object,
  loop: PropTypes.bool,
  backspace: PropTypes.bool,
  cursor: PropTypes.string,
  startDelay: PropTypes.number,
  hideCursorOnDone: PropTypes.bool,
  typingDone: PropTypes.func
};

Typing.defaultProps = {
  startDelay: 0
};
