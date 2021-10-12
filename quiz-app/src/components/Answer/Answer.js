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

    async postAnswer(e, id, question) {
      e.preventDefault();
      if(this.state[id]) {
        try {
          await fetch('http://localhost:3001/api/answers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify({
                user: sessionStorage.getItem("profile-name"),
                question_id: id,
                question,
                answer: this.state[id]
              }),
            })
            .then(response => response.json())
            .then(response => console.log(response.message));
        } catch (e) {
          console.error(e.message);
        }
      }
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
                <form className="answer-form" onSubmit={e => this.postAnswer(e, question._id, question.question)}>
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