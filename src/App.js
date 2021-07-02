import './App.css';
import PriceSelect from "./PriceSelect";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Fifteen from './Fifteen';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
      </div>
      <Switch>
          <Route path="/" exact component={PriceSelect} />
          <Route path="/under15" component={Fifteen} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
