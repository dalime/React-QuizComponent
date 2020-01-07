import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  handleClick(buttonText) {
    const { quiz_question, showNextQuestionHandler } = this.props;

    if (buttonText === quiz_question.answer) {
      showNextQuestionHandler();
    }
  }

  render() {
    const { instruction_text } = this.props.quiz_question;

    return (
      <main>
        <section>
          <p>{instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
              return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;