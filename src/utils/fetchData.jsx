import axios from 'axios';

export default function fetchData(apiURL, setGameData, mounted, setPageAmt){
    const getData = async () => {
        try {
            const data = await axios.get(apiURL)
            if (mounted){
                const pageCount = parseInt(data.headers['x-total-page-count']) + 1;
                if (setPageAmt){
                    setPageAmt(parseInt(data.headers['x-total-page-count']) + 1);
                }

                setGameData(data.data);
   
                sessionStorage.setItem(`${apiURL}Count`, pageCount)

            }
        }
        catch(err){
            console.error(err)
        }
    }

    const sessionData = JSON.parse(sessionStorage.getItem(apiURL))
    const sessionCount = JSON.parse(sessionStorage.getItem(`${apiURL}Count`))

    if (!sessionData){
        getData()    
    }
    else if (mounted){ 
        setGameData(sessionData)
        if (setPageAmt){
            setPageAmt(sessionCount);
        }
    }
}