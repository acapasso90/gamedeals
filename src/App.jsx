import './App.css';

import { Routes, Route} from "react-router-dom";

import AllGames from './pages/AllGames';


import GameSearch from './pages/GameSearch';

import FreePC from "./pages/Free/FreePC";
import FreeEpic from "./pages/Free/FreeEpic";

import MainLayout from './layout/MainLayout';
import { Container } from "react-bootstrap";
import StoreSearch from './pages/StoreSearch';
import storeArray from './data/storeArray';

function App() {

    const storeRoutes = storeArray.map((store) => {
        const {id, name, path} = store;
        return (
            <Route path={path} key={id} element={<StoreSearch storeId={id} storeName={name} />} />
        )
    })

  return (
    <Container className="App" fluid>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<FreeEpic />} />
                <Route path="all" element={<AllGames />} />

                <Route path="game" element={<GameSearch />} />

                {...storeRoutes}

                <Route path="free/pc" element={<FreePC />} />
            </Route>
        </Routes>
    </Container>
  );
}

export default App;
