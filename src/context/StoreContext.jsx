import { useState, useEffect, useContext, createContext, useMemo } from "react";
import axios from "axios";

export const StoreContext = createContext({});
export const useStoreContext = () => useContext(StoreContext);

export function StoreProvider({children}){
    const [storeList, setStoreList] = useState([]);
    const apiURL = `https://www.cheapshark.com/api/1.0/stores`;


    useEffect(() => {
        let mounted = true;
        const getData = async () => {
            try {
                const data = await  axios.get(apiURL)
                if (mounted){
                    setStoreList(data.data)
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
    }, []);


    const findStore = (id) => {
        return storeList.find((x) => x.storeID === `${id}`)
    }

    return(
        <StoreContext.Provider
            value={useMemo(() => ({
                storeList,
                findStore,
            }), [storeList, findStore])}>
                {children}
        </StoreContext.Provider>
    )
}