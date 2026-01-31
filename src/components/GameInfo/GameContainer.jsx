import GameInfo from "./GameInfo";

import './GameContainer.scss';
import FreeGameInfo from "../../components/GameInfo/FreeGameInfo";


export default function GameContainer({games = [], title, pageString, children, free = false}){
    const content = games.length ? 
        games.map((gameData) => 
            free ? <FreeGameInfo data={gameData} key={`${gameData.dealID}-${gameData.title}`} /> :
            <GameInfo data={gameData} key={`${gameData.gameID}-${gameData.dealID}-${gameData.storeID}`} />
        ) 
    : <h3>Loading Games</h3>

    return(
        <div className="content-container">
            <h2 className="pt-3 pb-3"> {title} </h2>
            <div>{pageString}</div>
            {children}
            <div className="game-container">
                {content}
            </div>
        </div>
    )
}