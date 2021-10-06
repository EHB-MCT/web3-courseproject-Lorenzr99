import './Header.scss';
import home from '../../assets/icons/home.png';

export const Header = () => {
    function reloadPage() {
        window.location.reload();
    }

    return (
      <header className="Header">
        <img src={home} className="home" onClick={reloadPage} alt="back to home button" width="35px" height="auto"></img>
        <h1 className="logo">QUIZ-APP</h1>
      </header>
    );
};