import logo from './logo.svg';
import bgphoto_main from './images/cv-main.jpg';
import bgphoto_left from  './images/cv-left.jpg';
import bgphoto_right from './images/cv-right.jpg';
import './App.css';

function App() {
  return (
    <div className="App"> 

      <div className="bg">
        <div className="layer-1" style={{ backgroundImage: `url(${bgphoto_main})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, position: `relative`,  minHeight: `100vh`, width: `33%`,  }}>
        </div>  
        <div className="layer-2" style={{ backgroundImage: `url(${bgphoto_left})`, backgroundRepeat: `no-repeat`, backgroundPosition: `left`, position: `relative`,  minHeight: `100vh`, width: `33%`,  }}>      
        </div> 
        <div className="layer-3" style={{ backgroundImage: `url(${bgphoto_right})`, backgroundRepeat: `no-repeat`, backgroundPosition: `right`, position: `relative`,  minHeight: `100vh`, width: `33%`,  }}>   
        </div> 

      </div>

      <div className="content" style={{ position: `absolute`, top: `0`, left: `50%`, marginLeft: `-400px`,  display: `block`}}>
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />  KOMENTARZ */}
          <div className="main-title">
            <div> Stwórz swoje wymarzone CV już dziś</div>
          </div>
        </header>

        <div className="content">

          <button className="btn btn-start"> Start </button>
          <button className="btn btn-info"> Info </button>
          <button className="btn btn-prev"> Zanim zaczniesz </button>
        </div>
      </div>
    </div>
  );
}

export default App;
