import logo from './logo.svg';
import bgphoto_main from './images/cv-bg-main.jpg';
import './App.css';

function App() {
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

        <div className="btn-box">

          <button className="btn btn-start"> Start </button>
          <button className="btn btn-info"> Info </button>
          <button className="btn btn-prev"> Zanim zaczniesz </button>
        </div>
      </div>
    </div>  
  );
}

export default App;
