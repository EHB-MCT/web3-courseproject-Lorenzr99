import './App.scss';
import React from "react";
import { Question } from './components/Question/Question';
import { Answer } from './components/Answer/Answer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeChoice: false,
      profileChoice: '',
      enteredName: false,
      profileName: '',
      nameValue: ''
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleName = this.handleName.bind(this);
    this.updateNameValue = this.updateNameValue.bind(this);
  }

  handleChoice(e) {
    console.log(e.target.className);
    this.setState({madeChoice: true, profileChoice: e.target.className});
  }

  updateNameValue(e) {
    this.setState({nameValue: e.target.value});
  }

  handleName(e) {
    e.preventDefault();
    console.log(this.state.nameValue);
    let profileName = this.state.nameValue;
    this.setState({enteredName: true, profileName});
  }

  render() {
    if(this.state.madeChoice === false) {
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

    else if(this.state.enteredName === false) {
      return (
        <div className="App">
          <h1 className="title">QUIZ-APP</h1>
            <form className="profile-name" onSubmit={this.handleName}>
              <input type="text" onChange={this.updateNameValue} className="profile-name-input" placeholder="Geef een gebruikersnaam in"></input>
              <input type="submit" value={this.state.nameValue || "GEEF NAAM IN"} className="profile-name-submit"></input>
            </form>
        </div>
      );
    }
    
    else {
      if(this.state.profileChoice === "profile-ask") {
        return (
           <Question />
        );
      }
      else if(this.state.profileChoice === "profile-answer") {
        return (
          <Answer />
       );
      }
    }
  }
}

export default App;
