import './App.css';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ResultOfWork from './components/ResultOfWork';
import OurProjects from './components/OurProjects';
import Directions from './components/Directions';

function App() {
  return (
    <div className="App">
      {
        //<Preloader />
      }
      <Header />
      <Main />
      <AboutUs />
      <Directions />
      <OurProjects />
      <ResultOfWork />
      <Footer />
    </div>
  );
}

export default App;
