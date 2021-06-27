import logo from './logo.svg';
import bgphoto_main from './images/cv-bg-main.jpg';
import './App.css';
import './icons/fontello/css/fontello.css';
import React from 'react';


function App() {

  const startTheApp = function(message) {console.log(message)};
  const lookupInfo = function() {};
  const lookupPrev = function() {};

  {/*class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = { attribute: "value" };
    }
  }*/}

  return (
    <div className="App"> 

      <div className="layer" style={{ backgroundImage: `url(${bgphoto_main})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, minHeight: `100vh`}}> 

        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />  KOMENTARZ */}
          <div className="main-title">
            <span> Stwórz swoje wymarzone CV już dziś</span>
          </div>
        </header>

       {/*  <span class="welcome-text"> 
          Kocham Kacperka. Curriculum Vitae to osobista wizytówka każdego kandydata. To od niej często zależy, czy dostaniesz 
          wymarzoną pracę. Dla pracodawcy liczy się nie tylko treść, ale również i forma tego dokumentu. Siła pierwszego wrażenia pełni tu kluczową rolę.
          </span>
        */}

        <div className="textbox">
          <span className="welcome-text">
            Nie wiesz jak stworzyć CV, którym oczarujesz pracodawcę? Świetnie trafiłeś! Wypróbuj nasz darmowy kreator, a przekonasz się, że pisanie CV 
            może być proste, przyjemne, i - co najważniejsze - skuteczne.
          </span>
        </div>


        <button className="btn-start" onClick={() => {startTheApp('function fired'); {/*this.setState({attribute: 'new value'})*/}}}> Start </button>

        <div className="info-box">
          <i className="icon-info"> </i>
          {/*<button className="btn btn-info"> Info </button>*/}
          <span className="description">Dowiedz się więcej o tej aplikacji i jej autorze. W razie pytań lub wątpliwości znajdziesz tu także 
           niezbędne informacje kontaktowe </span>
        </div>

        <div className="prev-box">
          <i className="icon-doc"> </i>
         {/*<button className="btn btn-prev"> Zanim zaczniesz </button>*/}
          <span className="description">Zanim rozpoczniesz tworzenie CV, zapoznaj się z przygotowanym przez nas poradnikiem, który pomoże
          Ci stworzyć idealne CV </span>

        </div>

        <footer className="empty-space"> </footer>

      </div>
    </div>  
  );
}

export default App;
