import './Question.scss';
import { Header } from '../Header/Header';

export const Question = () => {
    function postQuestion(e) {
      e.preventDefault();
    }

    return (
      <div className="Question">
        <Header />
        <h1 className="question-title">Stel hier je vraag</h1>
        <form className="question-form" onSubmit={postQuestion}>
          <input type="text" className="question-input" placeholder="Typ hier je vraag..."></input>
          <input type="submit" className="question-submit" value="Vraag indienen"></input>
        </form>
      </div>
    );
};