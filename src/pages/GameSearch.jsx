import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import GameContainer from "../components/GameInfo/GameContainer";

export default function GameSearch(){
    const [gameData, setGameData] = useState([]);
    const [title, setTitle] = useState("Choo Choo Charles");

    const inputRef = useRef(null);

    useEffect(() => {
        let mounted = true;
        const apiURL = `https://www.cheapshark.com/api/1.0/deals?&sortBy=Price&title=${title}`;
        const getData = async () => {
            try {
                const data = await  axios.get(apiURL)
                if (mounted){
                    setGameData(data.data)
                }
            }
            catch(err){
                console.error(err)
            }
        }
        getData()
        return function cleanup() {
            mounted = false
        }
    }, [title]); 


    function handleSubmit(event){
        event.preventDefault();
        setTitle(inputRef?.current?.value)

    }
    
    return (
        <GameContainer games={gameData} title="Find lowest price by title">
            <form className="mb-3" onSubmit={handleSubmit} >
                <input className="game-search" ref={inputRef} type="text" autoComplete="off" placeholder="Search by Game Title" /> 
                <button type="submit" className="submitButton"> 
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </GameContainer>
    )
}