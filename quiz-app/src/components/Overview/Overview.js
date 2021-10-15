import './Overview.scss';
import React from "react";
import { Header } from '../Header/Header';

export class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {questions: [], answers: []};
        this.linkQuestionToAnswers = this.linkQuestionToAnswers.bind(this);
    }

    componentDidMount() {
        this.getQuestions();
        this.getAnswers();
    }
        
    async getQuestions() {
        try {
            await fetch('http://localhost:3001/api/questions')
            .then(response => response.json())
            .then(response => this.setState({questions: response.docs}));
        } catch (e) {
            console.error(e);
            this.setState({questions: [{question: 'KON VRAGEN NIET OPHALEN'}]});
        }
    }

    async getAnswers() {
        try {
            await fetch('http://localhost:3001/api/answers')
            .then(response => response.json())
            .then(response => this.setState({answers: response.docs}));
        } catch (e) {
            console.error(e);
            this.setState({answers: [{answer: 'KON ANTWOORDEN NIET OPHALEN'}]});
        }        
    }

    linkQuestionToAnswers(e, id) {
        const answers = this.state.answers;
        
        if(this.state[id] && this.state[id].length !== 0) {
            this.setState({[id]: []});
        } else {
            this.setState({[id]: []});
            answers.forEach(answer => {
                if(answer.question_id === id) {
                    this.setState(state => ({
                        [id]: [...state[id], answer],
                    }));
                }
            });            
        }
    }

    render() {
      const questions = this.state.questions;
      let answers = [];
        return (
            <div className="Overview">
                <Header />
                <h1 className="overview-title">Klik op een vraag om de antwoorden te zien!</h1>
                {questions.map(question => {
                        answers = this.state[question._id];
                        if(answers !== undefined) {
                            return (
                                <div className="question-div" onClick={e => this.linkQuestionToAnswers(e, question._id)} key={question._id}>
                                    <span className="question-title">{question.question}</span>
                                    <ul className="answer">
                                        <li className="answer-expected"><b>Antwoord</b>: {question.answer}</li>
                                        {answers.map(answer => {
                                        return <li key={answer._id}><b>{answer.user}</b>: {answer.answer}</li>
                                    })}</ul>
                                </div>
                            );   
                        } else {
                            return (
                                <div className="question-div" onClick={e => this.linkQuestionToAnswers(e, question._id)} key={question._id}>
                                    <span className="question-title">{question.question}</span>
                                    <ul className="answer">
                                        <li className="answer-expected"><b>Antwoord</b>: {question.answer}</li>
                                    </ul>
                                </div>
                            );                               
                        }
                })}
            </div>
        );
    }
}