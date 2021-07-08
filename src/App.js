import './App.css';
import PriceSelect from "./PriceSelect";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import SteamGames from "./SteamGames";
import Twenty from './Twenty';
import Fifteen from './Fifteen';
import Ten from "./Ten";
import Five from "./Five";
import GameSearch from './GameSearch';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
      </div>
      <Switch>
          <Route path="/" exact component={PriceSelect} />
          <Route path="/under20" component={Twenty} />
          <Route path="/under15" component={Fifteen} />
          <Route path="/under10" component={Ten} />
          <Route path="/under5" component={Five} />
          <Route path="/game" component={GameSearch} />
          <Route path="/steamsale" component={SteamGames} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
