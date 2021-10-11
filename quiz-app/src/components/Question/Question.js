import './Question.scss';
import { Header } from '../Header/Header';
import { useState } from 'react';

export const Question = () => {
    const [question, setQuestion] = useState('');

    async function postQuestion(e) {
      e.preventDefault();
      if(question) {
        try {
          await fetch('http://localhost:3001/api/questions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify({
                user: sessionStorage.getItem("profile-name"),
                question
              }),
            })
            .then(response => response.json())
            .then(response => console.log(response.message));
        } catch (e) {
          console.error(e.message);
        }
      }
    }

    return (
      <div className="Question">
        <Header />
        <h1 className="question-title">Stel hier je vraag</h1>
        <form className="question-form" onSubmit={postQuestion}>
          <input type="text" onChange={e => setQuestion(e.target.value)} className="question-input" placeholder="Typ hier je vraag..." required></input>
          <input type="submit" className="question-submit" value="Vraag indienen"></input>
        </form>
      </div>
    );
};