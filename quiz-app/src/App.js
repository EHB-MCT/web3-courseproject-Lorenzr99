import './App.scss';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {madeChoice: false};
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(e) {
    console.log(e.target.className);
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">QUIZ-APP</h1>
          <div className="profile-choice">
            <button className="profile-ask" onClick={this.handleChoice}>Vraag stellen</button>
            <button className="profile-answer" onClick={this.handleChoice}>Vraag beantwoorden</button>
          </div>
      </div>
    );
  }
}

export default App;
