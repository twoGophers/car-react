import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Competitions from './components/competitions/Competitions';
import HowItWorks from './components/howitworks/HowItWorks';
import Revievs from './components/reviews/Revievs';
import LatestWinners from './components/latestWinners/LatestWinners';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Router>
              <Header />
              < Banner />
              < Competitions />
              < HowItWorks />
              < Revievs />
              < LatestWinners />
              < Footer />
      </Router>
    </div>
  );
}

export default App;
