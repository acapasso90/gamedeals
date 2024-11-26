import axios from 'axios';

export default function fetchData(apiURL, setGameData, mounted){
    const getData = async () => {
        try {
            const data = await  axios.get(apiURL)
            if (mounted){
                setGameData(data.data)
                sessionStorage.setItem(apiURL, JSON.stringify(data.data))
            }
        }
        catch(err){
            console.error(err)
        }
    }

    const sessionData = JSON.parse(sessionStorage.getItem(apiURL))
    if (!sessionData){
        getData()    
    }
    else if (mounted){ 
        setGameData(sessionData)
    }
}