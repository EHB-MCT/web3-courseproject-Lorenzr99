import './Answer.scss';
import { Header } from '../Header/Header';
import React from 'react';

export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
    this.getQuestions = this.getQuestions.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }
    
  async getQuestions() {
    await fetch('http://localhost:3001/api/questions')
    .then(response => response.json())
    .then(response => this.setState({questions: response.docs}));
  }

    postAnswer(e, id) {
      e.preventDefault();
      console.log("QUESTION ID: " + id);
    }

    render() {
      const questions = this.state.questions;
      return (
      <div className="Answer">
        <Header />
        <div className="answer-title">
          {questions.map(question => {
            return (
              <div className="question-div" key={question._id}>
                <span>{question.question}</span>
                <form className="answer-form" onSubmit={e => this.postAnswer(e, question._id)}>
                  <input type="text" className="answer-input" placeholder="Typ hier je antwoord..."></input>
                  <input type="submit" className="answer-submit" value="Antwoord indienen"></input>
                </form>
              </div>
            );
          })}
        </div>
      </div>
      );
    }
}