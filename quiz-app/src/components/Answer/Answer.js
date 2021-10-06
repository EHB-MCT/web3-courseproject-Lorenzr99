import './Answer.scss';
import { Header } from '../Header/Header';

export const Answer = () => {
    function postAnswer(e) {
      e.preventDefault();
    }

    return (
      <div className="Answer">
        <Header />
        <h1 className="answer-title">"question here"</h1>
        <form className="answer-form" onSubmit={postAnswer}>
          <input type="text" className="answer-input" placeholder="Typ hier je antwoord..."></input>
          <input type="submit" className="answer-submit" value="Antwoord indienen"></input>
        </form>
      </div>
    );
};