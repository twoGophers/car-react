import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Competitions from './components/competitions/Competitions';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              < Banner />
              < Competitions />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
