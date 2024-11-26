import React, {useState, useEffect} from "react";
import axios from "axios";
import GameContainer from "../../components/GameInfo/GameContainer";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import classNames from "classnames";

export default function Free(){
    const [genre, setGenre] = useState("");
    const [allGenres, setAllGenres] = useState([]);
    const [gameData, setGameData] = useState("");

    useEffect(() => {
        let mounted = true;
        const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date`,
        params: {platform: 'pc'},
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_FREE_KEY,
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

        const getData = async () => {
            const data = await axios.request(options);
            if (mounted){
                setGameData(data.data)
                setAllGenres([' Show All', ...new Set(data.data.map((x) => x.genre))])
            }
        }
        const sessionData = JSON.parse(sessionStorage.getItem('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date'))
        if (!sessionData){
            getData()    
        }
        else if (mounted) {
            setGameData(sessionData)
            
        }
        return function cleanup() {
        mounted = false
        }
    }, [genre]);

    const isBlank = (x) => {
        return x === " Show All"
    }

    const genreLinks = allGenres.toSorted().map((x) => 
        <Dropdown.Item 
            eventKey={isBlank(x) ? '' : x} 
            key={isBlank(x) ? '' : x} 
            className={
                classNames({
                    disabled: genre === '' ? isBlank(x) : genre === x
                })
            } 
            disabled={genre === '' ? isBlank(x) : genre === x} 
        >
            {x}
        </Dropdown.Item >
    )

    const filteredData = genre !== "" ? gameData.filter((x) => x.genre === genre) : gameData;

    return (
        <GameContainer free games={filteredData} title={`Free PC ${genre} games`}>
            <div className="d-flex justify-content-end pe-5 pb-5">
                <span className="pe-3">
                    Filter By:
                </span>            
                <DropdownButton variant="danger" id='dropdown-button-genre' className="sortDropdown" title={genre} onSelect={(e) => setGenre(e)}>
                    {genreLinks}
                </DropdownButton>
            </div>
        </GameContainer>
    )
  }