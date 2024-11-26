import React, {useState, useEffect} from "react";
import GameContainer from "../../components/GameInfo/GameContainer";
import fetchData from "../../utils/fetchData";

export default function FreeEpic(){
    const [gameData, setGameData] = useState([]);

    const apiURL = `https://www.cheapshark.com/api/1.0/deals?storeID=25&?&upperPrice=0`;

    useEffect(() => {
        let mounted = true;
        fetchData(apiURL, setGameData, mounted)
        return function cleanup() {
            mounted = false
        }
    }, []);

    return(
        <GameContainer games={gameData} title="Games Currently Free at Epic" />
    )
};