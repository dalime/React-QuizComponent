import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleClick() {
    const { clickHandler, button_text } = this.props;

    clickHandler(button_text);
  }

  render() {
    const { button_text } = this.props;

    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>{button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton;