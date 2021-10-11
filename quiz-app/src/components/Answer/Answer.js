import './Answer.scss';
import { Header } from '../Header/Header';
import React from 'react';

export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
    this.getQuestions = this.getQuestions.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }
    
  async getQuestions() {
    await fetch('http://localhost:3001/api/questions')
    .then(response => response.json())
    .then(response => this.setState({questions: response.docs}));
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

    postAnswer(e, id) {
      e.preventDefault();
      console.log("QUESTION ID: " + id);
      console.log("ANSWER: " + this.state[id]);
    }

    render() {
      const questions = this.state.questions;
      return (
      <div className="Answer">
        <Header />
        <div className="answer-title">
          {questions.map(question => {
            //const idWithoutNumbers = question._id.replace(/[0-9]/g, '');
            return (
              <div className="question-div" key={question._id}>
                <span>{question.question}</span>
                <form className="answer-form" onSubmit={e => this.postAnswer(e, question._id)}>
                  <input type="text" onChange={this.handleInputChange} name={question._id} className="answer-input" placeholder="Typ hier je antwoord..."></input>
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