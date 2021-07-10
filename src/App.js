import './App.css';
import "./PriceSelect.css";

import Home from "./Home";
import PriceSelect from "./PriceSelect";
import StoreSelect from "./StoreSelect";
import FreeSelect from "./FreeSelect";


import ScrollTop from "./ScrollTop";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";


import Twenty from './ByPrice/Twenty';
import Fifteen from './ByPrice/Fifteen';
import Ten from "./ByPrice/Ten";
import Five from "./ByPrice/Five";
import One from "./ByPrice/One";

import GameSearch from './GameSearch';

import SteamGames from "./ByStore/SteamGames";
import GamersGateGames from "./ByStore/GamersGateGames";
import EpicGames from "./ByStore/EpicGames";
import HumbleGames from "./ByStore/HumbleGames";
import FanaticalGames from "./ByStore/FanaticalGames";
import GOGGames from "./ByStore/GOGGames";
import IndieGalaGames from "./ByStore/IndieGalaGames";
import GreenManGames from './ByStore/GreenManGames';

import FreePC from "./Free/FreePC";
import FreeBrowser from "./Free/FreeBrowser"
import GameBilletGames from './ByStore/GameBilletGames';
import VoiduGames from './ByStore/VoiduGames';
import GamesplanetGames from './ByStore/GamesplanetGames';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="containerApp">
      <ScrollTop />
      <Header />
      <div className="components">
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/byprice" component={PriceSelect} />
          <Route path="/bystore" component={StoreSelect} />
          <Route path="/byfree" component={FreeSelect} />

          <Route path="/under20" component={Twenty} />
          <Route path="/under15" component={Fifteen} />
          <Route path="/under10" component={Ten} />
          <Route path="/under5" component={Five} />
          <Route path="/under1" component={One} />

          <Route path="/game" component={GameSearch} />

          <Route path="/steam" component={SteamGames} />
          <Route path="/gamersgate" component={GamersGateGames} />
          <Route path="/epicgames" component={EpicGames} />
          <Route path="/humblestore"  component={HumbleGames} />
          <Route path="/fanatical"  component={FanaticalGames} />
          <Route path="/gog" component={GOGGames} />
          <Route path="/indiegala" component={IndieGalaGames} />
          <Route path="/greenmangaming" component={GreenManGames} />
          <Route path="/gamebillet" component={GameBilletGames} />
          <Route path="/voidu" component={VoiduGames} />
          <Route path="/gamesplanet" component={GamesplanetGames} />

          <Route path="/free/pc" component={FreePC} />
          <Route path="/free/browser" component={FreeBrowser} />
      
      </Switch>
      <Footer />
      </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
